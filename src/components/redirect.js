import React from 'react'
import SEO from '../components/seo'

export default ({ intl }) => {
  return <SEO title={`${intl.formatMessage({ id: 'title' })}`} />
}
