import React, {Component} from 'react'

class PersonCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            age : this.props.age
        }
    }
    
    handleClick = ()=> {
        this.setState({age:this.state.age + 1})
    }
    render(){
        return(
            <div>
                <h1>{this.props.last_name}, {this.props.first_name}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair color: {this.props.hair_color}</p>
                <button onClick = {this.handleClick}>Birthday button for {this.props.first_name} {this.props.last_name}</button>
            </div>
        )
    }
}

export default PersonCard