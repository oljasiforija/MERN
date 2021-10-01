import React from 'react'
import { useParams } from 'react-router';
const Word = (props) => {
    const {word, bgc, col} = useParams();
    
    return(
        <div>
            {
                isNaN(word) ? 
                <p style={{backgroundColor:bgc, color:col}}>The word is: {word}</p> :
                <p>The number is: {word} </p> 
                }
        </div>
    )
}
export default Word;