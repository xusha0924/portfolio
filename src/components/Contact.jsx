import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">联系我</h2>
      <p className="section-subtitle">有合作想法？欢迎随时联系</p>
      <div className="contact-links">
        <a href="mailto:hello@example.com" className="contact-item">
          <span className="contact-icon">&#9993;</span>
          <span>hello@example.com</span>
        </a>
        <a href="https://github.com/coco" target="_blank" rel="noopener noreferrer" className="contact-item">
          <span className="contact-icon">&#128187;</span>
          <span>GitHub</span>
        </a>
        <a href="https://linkedin.com/in/coco" target="_blank" rel="noopener noreferrer" className="contact-item">
          <span className="contact-icon">&#128100;</span>
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  )
}

export default Contact
