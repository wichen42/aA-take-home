import './CoffeeItem.css';
import mug_img from './mug.svg';

const CoffeeItem = ({coffee, idx}) => {

    return (
        <div id='coffee-container'>
            <img src={mug_img} alt="mug" id='coffee-img'/>
            <span>{coffee.name}</span>
            <span>&nbsp;  - &nbsp; </span>
            <span>{coffee.year}</span>
        </div>
    )
};

export default CoffeeItem;