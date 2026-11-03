import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCalendar, FiUser, FiClock, FiArrowUpRight, FiSearch, FiCheck } from 'react-icons/fi'
import { FaQuoteLeft, FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'
import PageBanner from '../components/PageBanner'
import { Reveal, WipeImg } from '../components/motion'
import { posts, services } from '../data'

const comments = [
  { name: 'Jenny Wilson', img: '/images/testi1.jpg', date: '2 days ago', text: 'Really useful article — I had no idea how much regular maintenance could save.' },
  { name: 'Cody Fisher', img: '/images/testi2.jpg', date: '5 days ago', text: 'Great tips. Booked my laptop in for a check-up after reading this!' },
]

export default function BlogDetails() {
  const { slug } = useParams()
  const [sent, setSent] = useState(false)
  const p = posts.find((x) => x.slug === slug)
  if (!p) return <Navigate to="/" replace />
  const recent = posts.filter((x) => x.slug !== slug)

  return (
    <>
      <PageBanner title="Blog Details" img={p.img} crumbs={[{ label: 'Blog' }]} />
      <section className="section">
        <div className="container blog-details-grid">
          <article className="article">
            <WipeImg src={p.img} alt={p.title} className="article-img" />
            <Reveal className="article-meta">
              <span className="post-cat static">{p.cat}</span>
              <span><FiCalendar /> {p.date}</span>
              <span><FiUser /> {p.author}</span>
              <span><FiClock /> {p.read}</span>
            </Reveal>
            <Reveal as="h2" className="article-title">
              {p.title}
            </Reveal>
            {p.body.slice(0, 2).map((t, i) => (
              <Reveal as="p" key={i} className="article-p">
                {t}
              </Reveal>
            ))}
            <Reveal className="article-quote">
              <FaQuoteLeft />
              <blockquote>{p.quote}</blockquote>
              <cite>— {p.author}</cite>
            </Reveal>
            {p.body.slice(2).map((t, i) => (
              <Reveal as="p" key={i} className="article-p">
                {t}
              </Reveal>
            ))}
            <div className="article-imgs">
              <WipeImg src="/images/why.jpg" alt="Technician at work" />
              <WipeImg src="/images/cta.jpg" alt="Phone board repair" delay={0.2} />
            </div>
            <Reveal className="article-foot">
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="share">
                Share:
                <a href="#" aria-label="Share on Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Share on X"><FaXTwitter /></a>
                <a href="#" aria-label="Share on LinkedIn"><FaLinkedinIn /></a>
              </div>
            </Reveal>

            <Reveal as="h3" className="details-subhead">
              {comments.length} Comments
            </Reveal>
            {comments.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.1} className="comment">
                <img src={c.img} alt={c.name} />
                <div>
                  <h5>
                    {c.name} <small>{c.date}</small>
                  </h5>
                  <p>{c.text}</p>
                </div>
              </Reveal>
            ))}

            <Reveal className="comment-form-wrap">
              <h3 className="details-subhead">Leave a Comment</h3>
              {sent ? (
                <motion.p className="form-note" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <FiCheck /> Thanks! Your comment is awaiting moderation.
                </motion.p>
              ) : (
                <form
                  className="light-form"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                >
                  <input required placeholder="Your Name" />
                  <input required type="email" placeholder="Email Address" />
                  <textarea required rows="5" placeholder="Write your comment" />
                  <button className="btn btn-primary" type="submit">
                    Post Comment <FiArrowUpRight />
                  </button>
                </form>
              )}
            </Reveal>
          </article>

          <aside className="sidebar">
            <Reveal from="right" className="widget">
              <h4 className="widget-title">Search</h4>
              <form className="search-box" onSubmit={(e) => e.preventDefault()}>
                <input placeholder="Search articles…" />
                <button aria-label="Search">
                  <FiSearch />
                </button>
              </form>
            </Reveal>
            <Reveal from="right" delay={0.1} className="widget">
              <h4 className="widget-title">Recent Posts</h4>
              {recent.map((r) => (
                <Link to={`/blog/${r.slug}`} className="recent-post" key={r.slug}>
                  <img src={r.img} alt="" />
                  <div>
                    <small>
                      <FiCalendar /> {r.date}
                    </small>
                    <strong>{r.title}</strong>
                  </div>
                </Link>
              ))}
            </Reveal>
            <Reveal from="right" delay={0.2} className="widget">
              <h4 className="widget-title">Services</h4>
              <ul className="service-list">
                {services.map((x) => (
                  <li key={x.slug}>
                    <Link to={`/services/${x.slug}`}>
                      <span>
                        {x.icon} {x.title}
                      </span>
                      <FiArrowUpRight />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal from="right" delay={0.3} className="widget">
              <h4 className="widget-title">Tags</h4>
              <div className="tags">
                {['Phone', 'Laptop', 'Battery', 'Recovery', 'Tips', 'Screen', 'Business'].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  )
}
