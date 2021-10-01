import React from 'react'
import { useParams } from 'react-router';
const Num = (props) => {
    const {num} = useParams();
    return(
        <div>
            <p>The number is: {isNaN(num) ? 0 : num}</p>
        </div>
    )
}
export default Num;