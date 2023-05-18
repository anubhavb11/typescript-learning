import React from 'react'
type HeadingProps = {
    children: string
}

export default function Heading(props: HeadingProps) {
  return (
    <h1 style={{color : 'blue'}}>{props.children}</h1>
  )
}
