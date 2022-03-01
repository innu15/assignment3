import React, { Component } from 'react'
import './styling.css'

class Employeedata extends Component {

    render() {

        return (
            <div className='feedback'>
                <h1 id="heading">EMPLOYEE FEEDBACK DATA</h1>
                <br></br>
                <div id="feed">
                    {this.props.feedback.map((value, index) => {
                        return (
                            <p id="details">
                                'Name'= {value.name} ------'Department'={value.department}------'Rating'={value.rating}
                            </ p>
                        )
                    })}
                </div>
                <div className="back">
                    <button id="backk" onClick={() => this.props.back()}>Go Back</button>
                </div>
            </div>
        )
    }
}

export default Employeedata