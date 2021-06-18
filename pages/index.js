import React from 'react'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Work from '../components/Work'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <SEO title='Shawn Rossouw' description='Front End Web Developer' keywords='shawn rossouw web developer front-end css javascript html react next.js wordpress' />
      <Header />
      <Hero />
      <main>
        <Intro />
        <Work />
      </main>
      <Footer />
    </div>
  )
}
