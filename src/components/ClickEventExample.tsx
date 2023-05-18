type handleProps = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: Number) => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement>, id:Number) => void
}

export default function ClickEventExample(props: handleProps) {
  return (
    <>
     <button onClick={e => props.handleClick(e,1)}>ClickEventExample</button>
    <input type="text" onChange={(e) => props.handleChange(e,1)} />
    </>
   
  )
}
