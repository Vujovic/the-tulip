import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Services from '../components/services'
import Team from '../components/team'
import Contact from '../components/contact'

export default () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO lang={Intl.locale} title={intl.formatMessage({ id: 'home' })} />
      <Hero />
      <Services />
      <Team />
      <Contact />
    </Layout>
  )
}
