
import './Home.css'
import {FaDollarSign, FaBookOpen} from 'react-icons/fa';


const Home = () => {
    return (
        <div className='container'>
            <div className='card-container'>
            <div className='card'>
                <div className='card-img'>
                    <img className='card-photo' src="https://i.ibb.co/WttSmPZ/Rectangle-2.jpg?fbclid=IwAR2uf9z4uhuG6Yiiop5Z6e8Kaw1k0Ar4OGNCkIHbGTxEITwZZ51fWCgvKzo" alt="" />
                </div>
                <h3 className='card-name'>Introduction to C Programming</h3>
                <p className='card-details'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <div className='icon-set'>
                    <p className='icon'><FaDollarSign></FaDollarSign></p>
                    <p className='card-price'>Price : 50000</p>
                    <p className='icon'><FaBookOpen></FaBookOpen></p>
                    <p className='credit'>Credit : 2hr</p>
                </div>
                <button className='card-butn'>Select</button>

                </div>

            </div>
            
            
        </div>
    );
};

export default Home;