import { createHashRouter } from 'react-router-dom'
import Login from '../page/Login'
import Article from '../page/Article'
import Layout from '../page/Layout'
import About from '../page/About'
import Board from '../page/Board'
import NotFount from '../page/NotFount'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: 'board',
        element: <Board />
      }
    ]
  },
  {
    path: '/login/:id?',
    element: <Login />
  },
  {
    path: '/article',
    element: <Article />
  },
  {
    path: '*',
    element: <NotFount />
  }
])

export default router