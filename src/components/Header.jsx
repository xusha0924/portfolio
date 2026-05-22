import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#" className="logo">Coco.</a>
        <nav className="nav">
          <a href="#about">关于我</a>
          <a href="#projects">项目</a>
          <a href="#contact">联系</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
