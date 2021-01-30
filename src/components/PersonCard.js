import React,{Component} from 'react';

class PersonCard extends Component {

    constructer(props){
        this.state = {
            clickAge: props.age
        }
    }
    clickHandler = () => {
        this.setState({
            clickAge: this.state.clickAge + 1
        })
    }
    render() {
        return (
            <div>
                <h1>{ this.props.lastName}, {this.props.firstName }</h1>
                <h4>Age { this.props.age}</h4>
                <h4>{ this.props.hairColor}</h4>
                <button onClick={this.clickHandler}>Birthday button for {'lastName'}, {'firstName'}</button>
                 </div>
)
    }
}
export default PersonCard;
