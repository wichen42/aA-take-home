import './PostModal.css';

function PostModal({open, close, coffeeList}) {

    if(!open) return null;

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
                <input type="text" id="post-title" placeholder='Title' />
                <div id='post-form-middle'>
                    <input type="text" id='post-rating' placeholder='Rating'/>
                    <select id="post-coffee">
                        {coffeeList.map((coffee, idx) => (
                            <option value={coffee.name} key={idx+22}>{coffee.name}</option>
                        ))}
                    </select>
                </div>
                <textarea id="post-text" cols="30" rows="10"></textarea>
            </form>
        </div>
    </>
    )
}

export default PostModal