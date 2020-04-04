import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import Template from '../templates/moreInfoPages'
import Illustration from '../components/svg/webdev'

export default () => {
  const intl = useIntl()
  console.log(intl.formatMessage({ id: 'designFeature1' }))
  return (
    <Template
      title={intl.formatMessage({ id: 'developmentPage' })}
      h1={intl.formatMessage({ id: 'developmentPage' })}
      info={intl.formatMessage({ id: 'webdevContent' })}
      featureColor={'#4797B0'}
      feature1={intl.formatMessage({ id: 'developmentFeature1' })}
      feature2={intl.formatMessage({ id: 'developmentFeature2' })}
      feature3={intl.formatMessage({ id: 'developmentFeature3' })}
      illustration={<Illustration />}
    />
  )
}
