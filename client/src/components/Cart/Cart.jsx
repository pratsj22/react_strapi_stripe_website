import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';
const Cart = () => {
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch();
    const totalPrice = () => {
        let total = 0;
        products.forEach(element => {
            total += element.price * element.quantity
        });
        return total.toFixed(2);
    }
    const stripePromise = loadStripe('pk_test_51NOSwxSBrr9PB6v86qBgt1NqSCfl1JslZKrlz7hUef1WYC34BGUf9CG6fPMFzfWAvDlA8gnmindHhKe1KePNAScN00usW0dOM5');
    const handlePayment = async () => {
        try {
          const stripe = await stripePromise;
          const res = await makeRequest.post("/orders", {
            products,
          });
          await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id,
          });
    
        } catch (err) {
          console.log(err);
        }
      };
    return (
        <div className='cart'>
            <h1>Products in the cart</h1>
            {products?.map(item => (
                <div className="item" key={item.id}>
                    <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
                    <div className="details">
                        <a href={`/product/${item.id}`}>
                        <h1>{item.title}</h1>
                        </a>
                        <p>{item.desc.substring(0, 70)}</p>
                        <div className="price">
                            {item.quantity} x ₹{item.price}
                        </div>
                    </div>
                    <div className="right">
                        <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
                    </div>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>₹{totalPrice()}</span>
            </div>
            <button onClick={handlePayment} className='btn' >PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={() => dispatch(resetCart())} >
                Reset Cart
            </span>
        </div>
    )
}

export default Cart