import './App.css'
import PostItem from './components/PostItem/PostItem';

function App() {

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
      title: "The First Cup",
      rating: 5,
      type: "Espresso",
      text: "I can't quite remember what it was, but it was made by Ann, I loved it because of that."
    },
    {
      title: "The Second Cup",
      rating: 4,
      type: "Black",
      text: "She always makes the best coffee, I don't think there is any other like it."
    },
    {
      title: "The Third Cup",
      rating: 5,
      type: "Latte",
      text: "Ann made me a latte, this time with honey and cinnamon. She always puts so much of herself into the coffee she makes."
    }
  ];

  return (
    <div className="App">
        <h1>Ann's Coffee Shop Reviews</h1>
        <div id='post-container'>
          <div id='post-body-container'>
            <div id='post-header'>  
              <div id='post-header-left'>
                <h2>Posts</h2>
                <span className='material-symbols-outlined'>add_circle</span>
              </div>
              <div id='post-header-right'>
                  <span className='material-symbols-outlined'>Sort</span>
                  <select id="post-select">
                    <option value="asc">asc</option>
                    <option value="dsc">dsc</option>
                    <option value="coffee">coffee</option>
                  </select>
              </div>
            </div>

            <div id='post-body'>
              {postData.map((post, idx) => (
                <PostItem post={post} idx={idx} />
              ))}
            </div>
          </div>
          <div id='coffee-sidebar'>
            <h2>Coffees</h2>
            <span className='material-symbols-outlined'>add_circle</span>
        </div>
        </div>

        
    </div>
  )
}

export default App
