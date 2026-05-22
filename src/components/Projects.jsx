import './Projects.css'

const projects = [
  {
    title: '智能客服平台',
    description: '从0到1搭建AI驱动的智能客服系统，日均处理10万+用户咨询，客服效率提升60%。',
    tags: ['AI', 'B2B', 'SaaS'],
    link: '#',
  },
  {
    title: '电商会员体系',
    description: '设计并落地完整会员成长体系，会员留存率提升35%，复购率提升28%。',
    tags: ['电商', '增长', '用户运营'],
    link: '#',
  },
  {
    title: '数据可视化平台',
    description: '为内部团队打造数据看板工具，支持自定义报表，覆盖50+业务指标。',
    tags: ['数据', '内部工具', 'B2B'],
    link: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">项目经历</h2>
      <p className="section-subtitle">以下是我参与主导的部分项目</p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
