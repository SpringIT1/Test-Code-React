// class component
// funciton component

import React from "react";
class MyComponent extends React.Component {

    state = {
        name: 'Spring IT SEO',
        address: 'Ok Vip',
        age: 26
    };

    //JSX
    render() {
        return (

            <div>

                My name is {this.state.name}  I'm from {this.state.address}
            </div>

        );

    }
}

export default MyComponent;
