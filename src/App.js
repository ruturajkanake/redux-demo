import React from 'react';
import { Provider, connect } from 'react-redux'

const ADD = 'ADD'
const addMessage = (message)=>{
  return {
    type: ADD,
    message: message
  }
}

class Presentational extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(e){

    this.setState({
      input: e.target.value
    })
  }
  submitMessage(e){
    e.preventDefault();

    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: '',
    })
    
  }
  render(){
    return (
      <>
        <h4>Enter value</h4>
        <form onSubmit={this.submitMessage}>
          <input type = "text" value = {this.state.input} onChange = {this.handleChange}/><br/>
          <button>Add</button>
        </form>
        <ul>
          {this.props.messages.map((message, idx)=>{
            return ( <li key = {idx}>{message}</li> )
          })}
        </ul>
      </>
    )
  }
}

const mapStateToProps = (state) =>{
  return {messages: state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)

class AppWrapper extends React.Component{
  render(){
    return (
      <Provider store = {this.props.store}>
        <Container />
      </Provider>
    )
  }
}

export default AppWrapper;
