import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './News.scss'

const News = () => {

    const [news, setNews] = useState([])

    const fetchNews = async () => {
        const res = await axios.get('http://localhost:3000/users')
        const data = await res.data
        setNews(data)
        console.log(data);
    }

    useEffect(() => {
        fetchNews()
    }, [])
  return (
    <div className='container'> 
        <h1 className='news__title'>Our Latest Posts</h1>
        <div className='news__box'>

            {
                news.map((news) => (
                    <ul key={news.id} className='news__list'>
                        <li className='news__item'>
                            {news.image ? <img className='news__img' src={news.image}/> : null }
                            <h1 className='news__text'>{news.name}</h1>
                            <h2 className='news__text'>{news.username}</h2>
                            <h3 className='news__text'>{news.email}</h3>
                            <p className='news__desc' >{news.address.street}</p>
                            <p className='news__desc' >{news.address.city}</p>
                            <p className='news__desc' >{news.address.suite}</p>
                            <p className='news__desc' >{news.address.zipcode}</p>
                        </li>

                    </ul>
                ))
            }
        </div>

    </div>
  )
}

export default News