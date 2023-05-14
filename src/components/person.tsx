type PersonProps = {
    personName : {
        firstName: string,
        lastName: string
    }
}


function Person(props: PersonProps) {
  return (
    <div>{props.personName.firstName} {props.personName.lastName}</div>
  )
}

export default  Person;