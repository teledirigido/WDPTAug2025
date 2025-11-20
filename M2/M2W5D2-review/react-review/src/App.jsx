import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SiteNav from './components/SiteNav'
import PostSinglePage from './pages/PostSinglePage'
import PostCommentPage from './pages/PostCommentPage'
import PokemonPage from './pages/PokemonPage'
import PokemonSinglePage from './pages/PokemonSinglePage'

function App() {

  return (
    <>

      <h1>React Review</h1>

      <SiteNav />

      <Routes>
        {/* Route 
          @prop path is the url path
          @prop element is the page component
         */}
        <Route path="/" element={ <HomePage />} ></Route>
        <Route path="/about" element={ <AboutPage />} ></Route>

        {/* create fake post path which accepts and id as parameter */}
        <Route path="/posts/:id" element={ <PostSinglePage />}></Route>

        {/* 
          create a page route to display a comment from a post.
          Eg: 
            commendtId 3 from PostId 10
            commendtId 1 from PostId 100
            commentId X from PostId Y
        */}
        <Route path="/posts/:postId/comments/:commentId" element={ <PostCommentPage />}></Route>

        {/* Create a path /pokemon to list pokemons */}
        <Route path="/pokemon" element={ <PokemonPage />}></Route>
        <Route path="/pokemon/:pokeName" element={ <PokemonSinglePage />}></Route>

      </Routes>

    </>
  )
}

export default App
