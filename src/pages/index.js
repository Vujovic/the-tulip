import React from 'react'
import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-intl'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO lang={Intl.locale} title={intl.formatMessage({ id: 'title' })} />
      <h1>
        <FormattedMessage id="header" />
      </h1>
      <p>
        <FormattedMessage id="header-p1" />
      </p>
      <p>
        <FormattedMessage id="header-p2" />
      </p>
    </Layout>
  )
}
