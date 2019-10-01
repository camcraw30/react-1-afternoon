import React, {Component} from "react";

export default class FilterObject extends Component {
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userinput) }> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify (this.state.filteredEmployees, null, 10) }</span>
            </div>
        )
    }
    constructor() {
        super();

        this.state = {
            employees: [
                {
                    name: "Jimmy Joe",
                    title: "Hack0r",
                    age: 12,
                },
                {
                    name: "Jeremy Schrader",
                    age: 24,
                    hairColor: "brown"
                },
                {
                    name: "Carly Armstrong",
                    title: "CEO",
                }
            ],

            userInput: '',
            filteredEmployees: []
        }
    }
}
