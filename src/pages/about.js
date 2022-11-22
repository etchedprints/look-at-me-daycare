import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <h4>How this project started.</h4>
      <section>
        <StaticImage
          alt="Image of Look At Me Daycare App running on an iPad"
          src="../images/ipad-running-app.png"
        />
        <main>
          <h2>History</h2>
          <p>In 2017 my daughter started daycare. I was surprised at how much time went into handwriting notes on all the children's activities during each day. I also thought it was a lot of paper being used for each child. So I started creating this app, and I hope other parents and daycares find it useful. I hope this app can be used for the day to day sharing of all the steps of development and day to day needs within daycares operations.</p>
        </main>
      </section>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage
