import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import Template from '../templates/moreInfoPages'
import Illustration from '../components/svg/design'

export default () => {
  const intl = useIntl()
  console.log(intl.formatMessage({ id: 'designFeature1' }))
  return (
    <Template
      title={intl.formatMessage({ id: 'designPage' })}
      h1={intl.formatMessage({ id: 'designPage' })}
      info={intl.formatMessage({ id: 'designContent' })}
      featureColor={'#378663'}
      feature1={intl.formatMessage({ id: 'designFeature1' })}
      feature2={intl.formatMessage({ id: 'designFeature2' })}
      feature3={intl.formatMessage({ id: 'designFeature3' })}
      illustration={<Illustration />}
    />
  )
}
