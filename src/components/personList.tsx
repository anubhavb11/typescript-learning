type PersonListProps = {
    nameList: 
        {
            firstName: string,
            lastName: string
        }[],

    status: 'loading'|'success'|'fail'
}





export default function PersonList(props: PersonListProps) {
  return (
    <div>{
        props.nameList.map((name) => {
            return <div>{name.firstName}
            {name.lastName}</div>
        })
    }
    {
        props.status === 'fail' ? "FAILED" : "Success/loading"
    }
    </div>
  )
}