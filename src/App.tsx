import Menu from './components/Menu/Menu.tsx'
import MainSection from './components/MainSection/MainSection.tsx'
import './App.scss'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Menu />
      {/* <MainSection /> */}
      <Outlet />
    </>
  )
}

export default App