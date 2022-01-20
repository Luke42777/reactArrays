
const Item = (props) => {
    return(
        <li>{`fruit: ${props.content}`}</li>
    )
}

class ListItems extends React.Component {

    state = {
        items: ["apple", "pear", "prune"],
    }

    
    render() {
        const Items = this.state.items.map(item => <Item key={item} content={item}/>);
        return (
            <ul>  
                {Items}
            </ul>
        )
    }
}







ReactDOM.render(<React.StrictMode><ListItems /></React.StrictMode>, document.getElementById("root"));