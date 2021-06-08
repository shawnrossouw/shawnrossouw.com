import React from 'react'
import _ from './style.module.css'
import Navigation from '../Navigation'
import Link from 'next/link'

const Header = () => (
  <header className={_.header}>
    <Link href="/">
      <a><img src="../logo.svg" alt="logo" /></a>
    </Link>
    <Navigation />
  </header>
)
export default Header