import './PostItem.css';
import star_img from './star-solid.svg';

const PostItem = ({post, idx}) => {

    const stars = [];

    for (let i = 0; i < post.rating; i++ ) {
        stars.push(<img src={star_img} alt="star" className='star-image'/>);
    }

    return (
        <div id="post-item-container" key={idx}>
            <p id='post-title'>{post.title}</p>
            <div className='star-container'>
                {stars.map((star) => (
                    star
                ))}
            </div>
            <p id='post-text'>{post.text}</p>
            <p id='post-type'>{post.coffee.type} - {post.coffee.caffine} mg per oz</p>
        </div>
    );
};

export default PostItem;
