import { useEffect, useState } from 'react';
import './App.css'
import CoffeeItem from './components/CoffeeItem/CoffeeItem';
import PostItem from './components/PostItem/PostItem';
import CoffeeModal from './components/CoffeeModal/CoffeeModal';
import PostModal from './components/PostModal/PostModal';

const coffeeData = [
  {
  name: "Black",
  year: 1671,
  caffine: 12
  },
  {
    name: "Espresso",
    year: 1906,
    caffine: 64
  },
  {
    name: "Latte",
    year: 1950,
    caffine: 64
  }
];

const postData = [
  {
    id: 1,
    title: "The First Cup",
    rating: 5,
    coffee: {
      type: "Espresso",
      caffine: 64
    },
    text: "I can't quite remember what it was, but it was made by Ann, I loved it because of that."
  },
  {
    id: 2,
    title: "The Second Cup",
    rating: 4,
    coffee: {
      type: "Black",
      caffine: 12
    },
    text: "She always makes the best coffee, I don't think there is any other like it."
  },
  {
    id: 3,
    title: "The Third Cup",
    rating: 5,
    coffee: {
      type: "Latte",
      caffine: 64
    },
    text: "Ann made me a latte, this time with honey and cinnamon. She always puts so much of herself into the coffee she makes."
  }
];

function App() {

  const [coffeeList, setCoffeeList] = useState([]);
  const [postList, setPostList] = useState([]);
  const [openCoffeeModal, setOpenCoffeeModal] = useState(false);
  const [openPostModal, setOpenPostModal] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);
  const [showAddCoffee, setShowAddCoffee] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState("asc");


  
  useEffect(() => {
    setCoffeeList(coffeeData);
    setPostList(postData);
  }, []);

  useEffect(() => {
    const updatePostList = [...postList];

    if (filter === "dsc") {
      updatePostList.sort((a, b) => a.id > b.id ? -1 : 1);
      console.log(updatePostList);
      setPostList(updatePostList);
    } else if (filter === "coffee") {
      updatePostList.sort(function(a,b) {
        if (a.coffee.type.toLowerCase() < b.coffee.type.toLowerCase()) return -1;
        if (a.coffee.type.toLowerCase() > b.coffee.type.toLowerCase()) return 1;
        return 0;
      })
      console.log(updatePostList);
      setPostList(updatePostList);
    } else {
        updatePostList.sort((a, b) => a.id > b.id ? 1 : -1);
        console.log(updatePostList);
      setPostList(updatePostList);
    }
  }, [filter]);

  const addCoffee = (coffee) => {
    setCoffeeList(coffeeList => [...coffeeList, coffee]);
    setOpenCoffeeModal(false);
  };

  const removeCoffee = (coffee) => {
    const update = coffeeList.filter((obj) => obj.name !== coffee.name);
    setCoffeeList(update);
  };

  const addPost = (post) => {
    setPostList(postList => [...postList, post]);
    setOpenPostModal(false);
  };

  return (
    <div className="App">
        <h1>Ann's Coffee Shop Reviews</h1>
        <div id='post-container'>
          <div id='post-body-container'>
            <div id='post-header'>  
              <div id='post-header-left'>
                <h2>Posts</h2>
                <span className='material-symbols-outlined'
                      onMouseEnter={() => setShowAddPost(true)}
                      onMouseLeave={() => setShowAddPost(false)}
                      onClick={() => setOpenPostModal(true)}
                >add_circle</span>
                {showAddPost && (
                  <div id='add-post'>Add Post</div>
                )}
              </div>
              <div id='post-header-right'
                   onMouseEnter={() => setShowFilter(true)}
                   onMouseLeave={() => setShowFilter(false)}
              >
                  <span className='material-symbols-outlined'>Sort</span>
                  <select id="post-select" onChange={(e) => setFilter(e.target.value)}>
                    <option value="asc">asc</option>
                    <option value="dsc">dsc</option>
                    <option value="coffee">coffee</option>
                  </select>
                  {showFilter && (
                    <div id='post-filter'>Filter</div>
                  )}
              </div>
            </div>

            <div id='post-body'>
              {postList.map((post, idx) => (
                <PostItem post={post} key={idx} />
              ))}
            </div>
          </div>
          <div id='coffee-sidebar'>
              <div id='coffee-sidebar-header-container'
                   onMouseEnter={() => setShowAddCoffee(true)}
                   onMouseLeave={() => setShowAddCoffee(false)}
              >
                <h2>Coffees</h2>
                <span className='material-symbols-outlined' 
                      onClick={() => setOpenCoffeeModal(true)}
                >add_circle</span>
              </div>
              <CoffeeModal open={openCoffeeModal} 
                           close={() => setOpenCoffeeModal(false)} 
                           addCoffee={addCoffee}></CoffeeModal>
              {coffeeList.map((coffee, c_idx) => (
                <CoffeeItem coffee={coffee} key={c_idx} removeCoffee={removeCoffee}/>
              ))}
              {showAddCoffee && (
                <div id='add-coffee'>Add Coffee</div>
              )}
        </div>
        </div>
        <PostModal open={openPostModal} 
                   close={() => setOpenPostModal(false)} 
                   coffeeList={coffeeList} 
                   addPost={addPost}/>

    </div>
  )
}

export default App
