// class component
// funciton component

import React from "react";
class MyComponent extends React.Component {

    state = {
        name: 'Spring IT SEO',
        address: 'Ok Vip',
        age: 26
    };

    handleClick(event) {
        console.log(">> click me my button")
        console.log("My name is", this.state.name)

    }

    handleOnMouseOver(event) {
        console.log(event.pageX)

    }
    //JSX
    render() {
        return (

            <div>

                My name is {this.state.name}  I'm from {this.state.address}
                <button onMouseOver={this.handleOnMouseOver}>Meow me</button>
                <button onClick={this.handleClick}>Click me</button>

            </div>

        );

    }
}

export default MyComponent;
