import React from 'react';

class NameForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Form Submitted. Will write to database")
        console.log("My local state is: ", this.state);
    }

    handleNameChange(event) {
        let theName = event.target.value;
        this.setState({ name: theName})
    }

    handleColorSelection(event) {
        console.log("in handleColorSelection:", event)
        console.log("choose: ", event.target.value);


        let chosenColor = event.target.value;
        this.setState({ color: chosenColor })
    }




    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>
                    Name:
                    <input type="text" onChange={(event) => this.handleNameChange(event)} />
                </label>
                <br />
                <label>
                    Favorite Color:
                    <select onChange={(event) => this.handleColorSelection(event)}>
                        <option>Red</option>
                        <option>Blue</option>
                    </select>
                </label>
                <br />
                <input type="submit" value="Submit Data" />
            </form>
        )
    }
}



export default NameForm