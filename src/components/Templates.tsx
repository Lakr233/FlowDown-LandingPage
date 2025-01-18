import { templates } from 'src/constants/templates'
import React from 'react'

import { Template } from './Template'

export const Templates = () => {
  return (
    <div className="relative z-10">
      {templates.map((template, idx) => (
        <Template key={`template-${idx}`} template={template} />
      ))}
    </div>
  )
}
