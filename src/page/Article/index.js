import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const Article = () => {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const id = params.get('id')
  const name = params.get('name')
  return (
    <div>
      这是文章页面 {id}-{name}
      <Link to='/login'>登录页</Link>
      <button onClick={() => navigate('/login')}>跳转登录页</button>
      <button onClick={() => navigate('/login/111')}>跳转登录页携带参数</button>
    </div>
  )
}

export default Article