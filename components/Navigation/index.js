import React from 'react'
import Link from 'next/link'
import _ from './style.module.css'

const menu = [
  {
    name: 'Work',
    link: '/#portfolio'
  },
  {
    name: 'About',
    link: '/#intro'
  },
  {
    name: 'Contact',
    link: '/#contact'
  }
]

const Navigation = () => {

  return (
    <nav className={_.navigation}>
      <ul>
        {menu.map((item, k) => (
          <li key={k}><Link href={item.link}><a>{item.name}</a></Link></li>
        ))}
      </ul>
    </nav>
  )
}
export default Navigation