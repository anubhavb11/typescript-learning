import React from 'react'
type ContainerProps = {
    styles: React.CSSProperties
}

export default function Container(props: ContainerProps) {
  return (
    <div 
        // style={{ border: '1px solid black', padding: '10px' }}
        style={props.styles}
    >
        <div>Container</div>
    </div>
    
  )
}
