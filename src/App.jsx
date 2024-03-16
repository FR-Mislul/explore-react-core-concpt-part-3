import './App.css'
import Counter from './counter'
import Friends from './friends'

function App() {
  function hendelClick (){
    alert('atai ami')
  }
  return (
    <>
     
     <Friends></Friends>

      <h1>Vite + React</h1>

      <Counter></Counter>
      
      
      <button onClick={hendelClick}>Click me</button>

    </>
  )
}

export default App
