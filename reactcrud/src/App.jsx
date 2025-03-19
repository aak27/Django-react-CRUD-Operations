import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Get from './components/Get'
import Post from './components/Post'
import Navbarss from './components/Navbarss'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:(
        <>
          <Navbarss/>
          <Post/>
        </>
      )
    },
    {
      path:"/get",
      element:(
      <>
        <Navbarss/>
        <Get/>
      </>
    )
    }
  ])
  return (
    <>
      <RouterProvider  router={router}/>
    </>
  )
}

export default App
