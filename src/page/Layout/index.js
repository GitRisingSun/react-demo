import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <p>这是layout页面--测试</p>
      <Outlet />
    </div>
  )
}
export default Layout