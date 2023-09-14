/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Cart.css'

const Cart = ({selectedCourse}) => {
    

    return (
        <div>
            <h4>Course Name</h4>
            <ol>
            {
                selectedCourse.map(course =>(
                    <li key={course.id}>{course.name}</li>
                ))
            }
            </ol>
            
        </div>
    );
};

export default Cart;