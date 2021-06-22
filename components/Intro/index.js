import React, { useState } from 'react'
import _ from './style.module.css'
import Icon from '../Icon'

const Intro = () => {

  const [readmore, setReadmore] = useState(false);

  const more = <div className={_.more}>
    <p>I started working at Magnetic Creative in 2019 as a junior front-end web developer. The tech stack was primarily custom WordPress dockerized with PostCSS and ACF for customising the backend for customers and utilising version control with GitHub. The languages I worked with were PHP, HTML, PostsCSS, Javascript. I loved working in a team of amazing developers.</p>
    <p>In 2021 I took a break from agency life and joined a startup called Orderin as a front-end web developer. I developed valuable skills in REACT.js, working with Gatsby.js, next.js, storybook, and storyblok. The biggest project at orderin and the highlight were developing a design system for the company with REACT/next, typescript, and previewing with storybook. I was also introduced to working with Figma app which is an amazing design and collaboration tool. </p>
    <p>I'm always eager to learn and grow so watch this space for more developments and interesting side projects.</p>
  </div>

  return (
    <section className={_.intro} id='intro'>
      <h2>My front-end journey so far</h2>
      <p>I have always had an interest in websites, how they look and function. I have been freelancing since 2016 building basic WordPress websites on the side. It was until a couple of years ago that my front-end web developer journey skyrocketed when a friend, who is a senior developer started mentoring me and guided me in developing solid skills in HTML, CSS, and Javascript.
      </p>
      {readmore && more}
      <span>{readmore ? 'Read Less' : 'Read More...'}</span>
      <a className={`${readmore ? _.open : ''}`} onClick={() => { setReadmore(!readmore) }}><Icon name='arrowdown' /></a>
    </section>
  )
}
export default Intro