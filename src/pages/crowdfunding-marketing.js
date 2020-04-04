import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import Template from '../templates/moreInfoPages'
import Illustration from '../components/svg/crowdfundingMarketing'

export default () => {
  const intl = useIntl()
  console.log(intl.formatMessage({ id: 'designFeature1' }))
  return (
    <Template
      title={intl.formatMessage({ id: 'cmPage' })}
      h1={intl.formatMessage({ id: 'cmPage' })}
      info={intl.formatMessage({ id: 'socialContent' })}
      featureColor={'#F97C7C'}
      feature1={intl.formatMessage({ id: 'cmFeature1' })}
      feature2={intl.formatMessage({ id: 'cmFeature2' })}
      illustration={<Illustration />}
    />
  )
}
