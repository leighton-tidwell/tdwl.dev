import Head from 'next/head'
import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Work,
  Meta,
} from '../components/'

const Home = () => {
  return (
    <>
      <Meta title="TDWL Development" />
      <Header />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
