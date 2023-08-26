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
        console.log(">> click me my button");

        //merge State => react class

        this.setState({
            name: 'Min Min',
            age: Math.floor((Math.random() * 100) + 1)
        })

        // this.setState({

        // })

    }

    handleOnMouseOver(event) {
        // console.log(event.pageX)

    }
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })


    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    //JSX
    render() {
        return (

            <div>

                My name is {this.state.name}  I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>

            </div>

        );

    }
}

export default MyComponent;
