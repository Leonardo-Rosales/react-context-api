import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import PostIndex from "./pages/posts/Index"
import PostShow from "./pages/posts/Show"
import PostsContext from "./contexts/PostsContext"
import { useState } from "react"
import axios from "axios"
import { BASE_URI } from "./Config"

function App() {

  const [posts, setPosts] = useState([])

  function fetchPosts() {
    axios.get(`${BASE_URI}/posts`)
      .then(res => {
        setPosts(res.data)
        console.log(res.data);

      })
      .catch(err => {
        console.error(err)
      })
  }


  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/posts">
              <Route path="" Component={PostIndex}></Route>
              <Route path=':id' Component={PostShow} ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PostsContext.Provider>
  )
}

export default App
