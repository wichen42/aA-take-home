import './CoffeeModal.css';
import { useState } from "react";

function CoffeeModal({open, close, addCoffee}) {
    
    if (!open) return null;

    const [coffeeName, setCoffeeName] = useState("");
    const [coffeeYear, setCoffeeYear] = useState(0);
    const [coffeeCaffine, setCoffeeCaffine] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const coffee = {
            name: coffeeName,
            year: parseInt(coffeeYear),
            caffine: parseInt(coffeeCaffine)
        };
        addCoffee(coffee)
        // update coffee data and reload coffee list. 
    }

    return (
    <div id="coffee-form-container">
        <form action="" id="coffee-form">
            <div id='coffee-form-header'>
                <h3>Add Coffee</h3>
                <span className="material-symbols-outlined"
                onClick={close}
            >close</span>
            </div>
            <input type="text" id="coffee-name" placeholder="Name" onChange={(e) => setCoffeeName(e.target.value)}/>
            <input type="text" id="coffee-year" placeholder="Year" onChange={(e) => setCoffeeYear(e.target.value)}/>
            <input type="text" id="coffee-caffine" placeholder="Caffine" onChange={(e) => setCoffeeCaffine(e.target.value)}/>
            <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)}/>
        </form>

    </div>
    );

};

export default CoffeeModal;