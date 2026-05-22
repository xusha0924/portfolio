import './Hero.css'

function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-badge">Product Manager</div>
      <h1 className="hero-title">
        Hi, 我是 <span className="highlight">Coco</span>
      </h1>
      <p className="hero-description">
        一名热爱用户体验的产品经理，专注于将复杂问题转化为简洁优雅的产品方案。
        擅长需求分析、产品设计与跨团队协作，致力于打造有价值的数字产品。
      </p>
      <div className="hero-stats">
        <div className="stat">
          <span className="stat-number">5+</span>
          <span className="stat-label">年产品经验</span>
        </div>
        <div className="stat">
          <span className="stat-number">20+</span>
          <span className="stat-label">已上线产品</span>
        </div>
        <div className="stat">
          <span className="stat-number">100万+</span>
          <span className="stat-label">用户覆盖</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
