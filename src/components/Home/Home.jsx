/* eslint-disable no-unused-vars */

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



import { useEffect, useState } from 'react';
import './Home.css'
import {FaDollarSign, FaBookOpen} from 'react-icons/fa';
import Cart from '../Cart/Cart';


const Home = () => {
    const [allcourse, setAllCourse] = useState([])
    const [selectedCourse, setSelectedCourse] =useState([])


    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllCourse(data))
    },[])
    const handleSelectCourse = (course) =>{
        const isExist = selectedCourse.find(item => item.id == course.id);
        if(isExist){
            toast('Already selected')
        }else{
            setSelectedCourse([...selectedCourse, course]);

        }


        

    };
    console.log(selectedCourse);





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
                <button onClick={()=>handleSelectCourse(course)} className='card-butn'>Select</button>
                <ToastContainer />

                </div>
                ))

            }

            </div>
                <div className='cart'>
                    
                    <Cart selectedCourse={selectedCourse}></Cart>

                </div>

            </div>

            
            
        </div>
    );
};

export default Home;