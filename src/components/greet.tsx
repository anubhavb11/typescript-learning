type GreetProps = {
    name: string,
    messageCount: number 
}


function Greet(props: GreetProps) {
  return <div>{props.name} you have {props.messageCount} unread messages</div>;
}

export default Greet;
