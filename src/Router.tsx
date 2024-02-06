import { Route, Routes } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { Post } from './pages/Post'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/issue/:issueNumber" element={<Post />} />
    </Routes>
  )
}
