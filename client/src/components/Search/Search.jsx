import React, { useState } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './Search.scss'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'

const Search = ({ setSearch }) => {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()
    const change = (e) => {
        setQuery(e.target.value)
    }
    let { data, loading, error } = useFetch(`/products?populate=*&filters[title][$contains]=${query}`)
    console.log(data)
    if (!query.length) {
        data = null;
    }
    return (
        <div className='search'>
            <div className="search-field">
                <input
                    type="text"
                    placeholder='Search Products...'
                    autoFocus
                    value={query}
                    onChange={change}
                />
                <span className='icon'>
                    <CloseOutlinedIcon onClick={() => setSearch(false)} />
                </span>
            </div>
            <div className="result-content">
                <div className="search-result">
                    {data?.map(item => (
                        <div className="item" key={item.id}>
                            <div className="img-container">
                                <img src={process.env.REACT_APP_UPLOAD_URL+item.attributes.img.data?.attributes.url} alt="" />
                            </div>
                            <div className="details">
                                <a href={`/product/${item.id}`}>
                                    <h1>{item.attributes.title}</h1>
                                </a>
                                <p>{item.attributes.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Search