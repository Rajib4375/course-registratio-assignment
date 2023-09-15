/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Cart.css'

const Cart = ({selectedCourse, remaining, totalCredit}) => {
    

    return (
        <div className='cart-contant'>
            <h4 className='remaining'>Credit Hour Remaining : {remaining}</h4>
            <hr />

            <h2>Course Name</h2>
            <ol>
            {
                selectedCourse.map(course =>(
                    <li key={course.id}>{course.name}</li>
                ))
            }
            </ol>
            <hr />
            <h4>Total Credit Hour : {totalCredit}</h4>
            
        </div>
    );
};

export default Cart;