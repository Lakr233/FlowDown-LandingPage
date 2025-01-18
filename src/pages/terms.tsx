import { Container } from 'src/components/Container'
import React from 'react'
import { APP_NAME } from 'src/constants/app'

const privacy = () => {
  return (
    <Container
      title={`Terms and Conditions | ${APP_NAME}`}
      className="pb-20 max-w-[90rem] mx-auto"
      description={`Terms and Conditions at ${APP_NAME}`}
    >
      <div className="prose prose-sm mx-auto">
        <h2>
          <strong>Terms and Conditions</strong>
        </h2>
      </div>
    </Container>
  )
}

export default privacy
