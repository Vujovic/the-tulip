import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import SEO from "../components/seo"

export default ({ intl }) => {
  return <SEO title={`${intl.formatMessage({ id: "title" })}`} />
}
