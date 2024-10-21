import { Link, useNavigate ,useParams} from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id
  return (
    <div>
      login页面 {id}
      {/* 链接导航 */}
      <Link to='/article'>文章页</Link>
      {/* 编程式导航 */}
      <button onClick={() => navigate('/article')}>跳转文章页</button>
      <button onClick={() => navigate('/article?id=1001&name=javascript入门')}>跳转文章页携带参数</button>
    </div>
  )
}

export default Login