import './App.css'
import DragSpace from './components/DragSpace'
import ListBooks from './components/ListBooks'
import NavBar from './components/NavBar'

function App () {
  return (
    <main className= 'w-full h-full font-rajdhani'>
      <NavBar />
      <article className=' ml-10 justify-around mt-5 '>
        <ListBooks />
        <DragSpace />
      </article>
    </main>
  )
}

export default App
