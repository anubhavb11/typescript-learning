import React from 'react'
type headProps = {
    children: string
}

export default function HeadingNext(props: headProps) {
  return (
    <div>{props.children}</div>
  )
}
