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
        <h1>Ann's Coffee Shop Reviews</h1>
        <div id='post-container'>
          <div id='post-header'>  
            <div id='post-header-left'>
              <h2>Posts</h2>
              <span className='material-symbols-outlined'>add_circle</span>
            </div>
            <div id='post-header-right'>
                <span className='material-symbols-outlined'>Sort</span>
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
