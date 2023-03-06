import './App.css'

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
]
  return (
    <div className="App">
        <h1>Ann's Coffee Show Reviews</h1>
        <div id='post-container'>
          <div id='post-header'>  
            <h2>Posts</h2>
            <div id='add-post'>New Post</div>
          </div>
          <div id='coffee-sidebar'>
          <p>Coffees</p>
        </div>
        </div>

        
    </div>
  )
}

export default App
