import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import './assets/fonts/fonts.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainSection from './components/MainSection/MainSection.tsx'
import SearchSection from './components/SearchSection/SearchSection.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/main', 
        element: <MainSection />
      },
      {
        path: '/search',
        element: <SearchSection />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
