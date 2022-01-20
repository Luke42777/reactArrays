const data = {
    users: [
        {
            id: 1,
            age: 23,
            name: "Johan"
        },
        {
            id: 2,
            age: 43,
            name: "Theo"
        },
        {
            id: 3,
            age: 73,
            name: "Mirinda"
        }
    ]
}


const Item = (props) => {
    return (
        <div>
            <h1>{`User: ${props.user.name}`}</h1>
            <h2>{`Age: ${props.user.age}`}</h2>
        </div>
    )
}

class ListItems extends React.Component {

    render() {
        
        const users = this.props.data.users;
        const Items = users.map(user => <Item key={user.id} user={user} />);
        return (
            <>
                {Items}
            </>
        )
    }
}







ReactDOM.render(<React.StrictMode><ListItems data={data} /></React.StrictMode>, document.getElementById("root"));