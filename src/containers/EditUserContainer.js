import React, { Component } from 'react'


export default class EditUserContainer extends Component {


    //User is form only
    //EditUserForm is in components folder if you want to render the component separately
    //on submit, callback to App to save user info

    render() {
        return (
            <div>
                Hello from User Container.
                {console.log("here's what's passed into User container", this.props)}
            </div>
        )
    }
}
