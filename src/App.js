import React, { Component } from 'react'
import './styling.css'
import Employeedata from './Employeedata'

class App extends Component {

  state = {
    name: "",
    department: "",
    rating: "",
    employee: [],
    show: true
  }

  Whenclick = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
goback = () => {
    this.setState({
      show: !this.state.show
    })
  }
  OnSubmit(event) {
    event.preventDefault();

    const Obj = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
      show: this.state.show
    }

    const tempArr = this.state.employee;
    tempArr.push(Obj)
    this.setState({ employee: tempArr, show: !this.state.show });
  }

  

  render() {
    return (
      <>
        {this.state.show ? (
          <div className='main'>
            <h1>EMPLOYEE   FEEDBACK   FORM</h1><br></br>
            <form action="">
              <label for="name">Name = </label>
              <input type="text" id="name" name="name" value={this.state.name} onChange={this.Whenclick}  />
              <label for="department">Department = </label>
              <input type="text" id="department" name="department" value={this.state.department} onChange={this.Whenclick}  />
              <label for="rating">Rating = </label>
              <input type="number" id="rating" name="rating" value={this.state.rating} onChange={this.Whenclick}  />
            </form>
            <button type="submit" onClick={this.OnSubmit.bind(this)}>Submit</button>
          </div>) : (
          <Employeedata feedback={this.state.employee} back={this.goback} />
        )}
      </>
    )
  }
}

export default App