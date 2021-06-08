import React from 'react'
import Link from 'next/link'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Intro from '../components/Intro'


export default function Home() {
  return (
    <div>
      <SEO title='Shawn Rossouw' description='Front End Web Developer' keywords='shawn rossouw web developer front-end css javascript html react next.js wordpress' />
      <Header />
      <Hero />
      <main>
        <Intro />
      </main>

      <footer>

      </footer>
    </div>
  )
}
