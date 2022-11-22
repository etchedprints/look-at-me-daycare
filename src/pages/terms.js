import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const TermsPage = () => {
  return (
    <Layout pageTitle="Terms">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Terms" />

export default TermsPage
