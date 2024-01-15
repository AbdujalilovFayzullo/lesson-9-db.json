import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { SiVite } from "react-icons/si";
import './Detail.scss'
import axios from 'axios';

const Detail = () => {

    const [comment, setComment] = useState([])

    const fetchComment = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data = await res.data
        setComment(data)
        console.log(data);
    }

    

    useEffect(() => {
        fetchComment()
    }, [])




  return (
    <div>
        <div className='detail container'>
            <Header />
            <p className='detail__text'>Published at  12.08.2023</p>
            <h1 className='detail__title'>Charge Two Devices at the Same Time With This Magnetic Wireless Charging Dock</h1>
            <div className='detail__block'>
            <SiVite className='detail__icon' />
            <p className='detail__desc'>Cameron Williamson</p>

          

            </div>


            {
                comment.map((comment) => (
                    <ul key={comment.id} className='detail__list'>
                        <li>
                        {comment.id}
                        </li>
                    <li className='detail__item'>
                        {comment.body}
                    </li>
                    </ul>
                ))
            }



        </div>
    </div>
  )
}

export default Detail