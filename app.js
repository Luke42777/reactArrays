const data = {
    users: [
        {
            id: 1,
            age: 23,
            name: "Johan",
            sex: "male",
        },
        {
            id: 2,
            age: 43,
            name: "Theo",
            sex: "male",
        },
        {
            id: 3,
            age: 73,
            name: "Mirinda",
            sex: "female",
        },
        {
            id: 4,
            age: 33,
            name: "Carolina",
            sex: "female",
        }
    ]
}

const Item = ({user}) => {
    return (
        <div className="userInfo">
            <h1>{user.name}</h1>
            <p><strong>User inforamation:</strong></p>
            <p>{`Age: ${user.age}`}</p>
            <p>{`Sex: ${user.sex}`}</p>
            <br/>
        </div>
    )
}

class ListItems extends React.Component {
    state = {
        select: "all",
    }

    userList = () => {
        let users = this.props.data.users;
       
            switch(this.state.select) {
                case "all":
                   return users.map(user => <Item key={user.id} user={user} />);
                case "female":
                   users = users.filter(user =>  user.sex === "female");
                   return users.map(user => <Item key={user.id} user={user} />);
                case "male":
                    users = users.filter(user => user.sex === "male");
                    return users.map(user => <Item key={user.id} user={user} />);
              }
    }

    handleUsersFilter = (opt) => {
        this.setState({select: opt})
    }

    render() {
        
        return (
            <> 
            <button onClick={this.handleUsersFilter.bind(this,"male")}>Show male</button>
            <button onClick={this.handleUsersFilter.bind(this,"female")}>Show female</button>
            <button onClick={this.handleUsersFilter.bind(this,"all")}>Show all</button>
            {this.userList()}
            </>
        )
    }
}


ReactDOM.render(<React.StrictMode><ListItems data={data} /></React.StrictMode>, document.getElementById("root"));