import * as React from 'react'

interface LogoMainProps {
  className?: string
}

const LogoMain: React.FC<LogoMainProps> = ({ className }) => {
  return <img src="/logo.png" alt="logo" className={className} />
}

export default LogoMain
