import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">

      <section>
        <main>
          <h1>Free to try, simple, daycare charting app for iPhone and iPad.</h1>
          <h1>Email or Message a PDF to a parent or guardian.</h1>
          <button><a href='www.apple.com'>START NOW FOR FREE</a></button>
        </main>
        <aside>
        <StaticImage
          alt="Look At Me Daycare running on iPhone"
          src="../images/iphone-running-app.png"
        />
        </aside>
      </section>

      <section>
        <h1>Press Kit</h1>
        <h4>Learn More!</h4>
        <button><a href='/downloads/presskit.zip'>DOWNLOAD</a></button>
      </section>



    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
