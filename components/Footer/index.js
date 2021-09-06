import React from 'react'
import _ from './style.module.css'
import Link from 'next/link'
import Icon from '../Icon'
import Waves from '../Waves'

const Footer = () => {
  return (
    <footer className={_.footer} id='contact'>
      <section>
        <Link href="#">
          <a className={_.logo}><img src="../logo.svg" alt="logo" /></a>
        </Link>
        <ul>
          <li><Link href="/#portfolio"><a>Work</a></Link></li>
          <li><Link href="/#intro"><a>About</a></Link></li>
        </ul>
      </section>
      <article>
        <h2>Get In Touch</h2>
        <div>
          <Link href='https://www.linkedin.com/in/shawnrossouw/'><a><Icon name='linkedin' /></a></Link>
          <Link href='https://twitter.com/ShawnRossouw'><a><Icon name='twitter' /></a></Link>
          <Link href='https://github.com/shawnrossouw'><a><Icon name='github' /></a></Link>
          <Link href='https://codepen.io/shawnrossouw'><a><Icon name='codepen' /></a></Link>
        </div>
        <span><Link href="mailto:shawnrossouw@gmail.com"><a>LET'S COLABORATE</a></Link></span>
      </article>
      <Waves />
    </footer>
  )
}
export default Footer