import React from 'react'
import _ from './style.module.css'
import Icon from '../Icon'
import HeroImg from '../../public/hero-img.svg'
import Link from 'next/link'

const Hero = () => (
  <section className={_.hero}>
    <div>
      <h1>Let’s Code</h1>
      <p>My name is Shawn Rossouw, a front-end web developer passionate about web design and the code that brings them to life.</p>
      <button><Link href="/#portfolio"><a>View Projects</a></Link></button>
      <aside>
        <Link href='https://www.linkedin.com/in/shawnrossouw/'><a><Icon name='linkedin' /></a></Link>
        <Link href='https://twitter.com/ShawnRossouw'><a><Icon name='twitter' /></a></Link>
        <Link href='https://github.com/shawnrossouw'><a><Icon name='github' /></a></Link>
        <Link href='https://codepen.io/shawnrossouw'><a><Icon name='codepen' /></a></Link>
      </aside>
    </div>
    <figure>
      <HeroImg />
    </figure>
  </section>
)
export default Hero