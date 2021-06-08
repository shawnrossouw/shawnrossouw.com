import React from 'react'
import _ from './style.module.css'

const menu = [
  {
    name: 'Work',
    link: '/'
  },
  {
    name: 'About',
    link: '/'
  },
  {
    name: 'Contact',
    link: '/'
  }
]

const Navigation = () => (
  <nav className={_.navigation}>
    <ul>
      {menu.map((item, k) => (
        <li key={k}><a href={item.link}>{item.name}</a></li>
      ))}
    </ul>
  </nav>
)
export default Navigation