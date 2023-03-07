import { useState } from 'react';
import './CoffeeItem.css';
import mug_img from './mug.svg';

const CoffeeItem = ({coffee, idx, removeCoffee}) => {

    const [showRemove, setShowRemove] = useState(false);
    
    const handleClick = (e) => {
        e.preventDefault();
        removeCoffee(coffee);
    }

    return (
        <div id='coffee-container' key={idx} 
        onMouseEnter={(e) => setShowRemove(true)}
        onMouseLeave={(e) => setShowRemove(false)}
        >
            <div id='coffee-container-left'>
                <img src={mug_img} alt="mug" id='coffee-img'/>
                <span>{coffee.name}</span>
                <span>&nbsp;  - &nbsp; </span>
                <span>{coffee.year}</span> 
            </div>
            {showRemove && (
                <span id='coffee-delete' 
                className='material-symbols-outlined'
                onClick={(e) => handleClick(e)}
                >delete</span>
            )}
        </div>
    )
};

export default CoffeeItem;