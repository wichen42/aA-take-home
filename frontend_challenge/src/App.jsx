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
        <div className='post-container'>
          <h2>Posts</h2>
        </div>

        <div className='coffee-sidebar'>
          <p>world</p>
        </div>
    </div>
  )
}

export default App
