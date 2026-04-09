import { Link, Route, Routes } from 'react-router';
import Game from './components/Game';
import InfiniteGame from './components/InfiniteGame';

function App() {

  function Home() {
    return (
      <>
        <nav className='game-menu'>
            <Link to="/classic">Classic</Link>
            <Link to="/infinite">Infinite</Link>
        </nav>
      </>
    )
  }

  return (
    <>
      <Routes>
        <Route path='/' element={Home} />
        <Route path='/classic' element={<Game />} />
        <Route path='/infinite' element={<InfiniteGame />} />
      </Routes>
    </>
  )
}

export default App
