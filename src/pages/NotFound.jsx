import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

export default function NotFound() {
  return (
    <section className="not-found">
      <motion.h1 initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 120 }}>
        404
      </motion.h1>
      <h3>Looks like this page needs a repair.</h3>
      <p>The page you’re looking for doesn’t exist or has moved.</p>
      <Link to="/" className="btn btn-primary">
        Back To Home <FiArrowUpRight />
      </Link>
    </section>
  )
}
