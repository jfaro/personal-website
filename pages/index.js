import Head from 'next/head'
import Layout from '../components/Layout'
import Landing from '../components/Landing'
import ContactBar from '../components/ContactBar'
import { Projects } from '../components/Projects'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Julien Faro</title>
        <meta name="description" content="Julien Faro's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />

      <h1 id="projects">Projects</h1>
      <Projects />

      <ContactBar />
    </Layout>
  )
}
