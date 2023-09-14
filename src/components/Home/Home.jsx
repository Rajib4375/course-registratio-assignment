/* eslint-disable react/jsx-key */

import { useEffect, useState } from 'react';
import './Home.css'
import {FaDollarSign, FaBookOpen} from 'react-icons/fa';


const Home = () => {
    const [allcourse, setAllCourse] = useState([])


    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllCourse(data))
    },[])
    console.log(allcourse)





    return (
        <div className='container'>
            <div className='home-container'>
            <div className='card-container'>
            {
                allcourse.map(course => (
                    <div key={course.id} className='card'>
                <div className='card-img'>
                    <img className='card-photo' src={course.image} alt="" />
                </div>
                <h3 className='card-name'>{course.name}</h3>
                <p className='card-details'>{course.details}</p>
                <div className='icon-set'>
                    <p className='icon'><FaDollarSign></FaDollarSign></p>
                    <p className='card-price'>Price : {course.Price}</p>
                    <p className='icon'><FaBookOpen></FaBookOpen></p>
                    <p className='credit'>Credit : {course.Credit}hr</p>
                </div>
                <button className='card-butn'>Select</button>

                </div>
                ))

            }

            </div>
                <div className='cart'>
                    <h1>This is cart</h1>

                </div>

            </div>

            
            
        </div>
    );
};

export default Home;