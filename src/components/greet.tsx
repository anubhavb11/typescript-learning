type GreetProps = {
    name: string,
    // we can make a prop optional
    messageCount?: number 
}


function Greet(props: GreetProps) {
  // default value if nothing is passed
  const {messageCount = 0} = props
  return <div>{props.name} you have {messageCount} unread messages</div>;
}

export default Greet;
