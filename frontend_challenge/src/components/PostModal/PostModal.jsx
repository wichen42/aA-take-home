import { useState } from 'react';
import './PostModal.css';

function PostModal({open, close, coffeeList, addPost}) {

    if(!open) return null;

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [coffee, setCoffee] = useState({});
    const [text, setText] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        const coffeeData = coffeeList.filter((obj) => obj.name === coffee)[0];
        const post = {title: title, rating: rating, coffee: coffeeData, text: text};
        addPost(post);
    }

    return (
    <>
        <div id='post-modal-bg'></div>
        <div id='post-modal-container'>
            <div id='post-modal-header'>
                <span>Create Post</span>
                <span id='post-modal-close' className='material-symbols-outlined'
            onClick={() => close()}
            >close</span>
            </div>
            <form action="" id='post-form'>
                <input type="text" id="post-form-title" placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
                <div id='post-form-middle'>
                    <input type="text" id='post-rating' placeholder='Rating (1-5)' onChange={(e) => setRating(e.target.value)}/>
                    <select id="post-coffee" onChange={(e) => setCoffee(e.target.value)}>
                        <option value="" disabled selected>Select Your Coffee</option>
                        {coffeeList.map((coffee, idx) => (
                            <option value={coffee.name} key={idx+22}>{coffee.name}</option>
                        ))}
                    </select>
                </div>
                <textarea id="post-form-text" cols="30" rows="10" placeholder='Your message here.' onChange={(e) => setText(e.target.value)}></textarea>
                <button onClick={(e) => handleClick(e)}>Submit</button>
            </form>
        </div>
    </>
    )
}

export default PostModal