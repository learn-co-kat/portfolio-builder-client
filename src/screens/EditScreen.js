import React, { Component } from 'react'
import EditProjectsContainer from '../containers/EditProjectsContainer.js'
import EditEducationContainer from '../containers/EditEducationContainer.js'
import EditSkillsContainer from '../containers/EditSkillsContainer.js'
import LoginHOC from '../HOCs/LoginHOC'
import User from '../containers/EditUserContainer'
import EditExperienceContainer from '../containers/EditExperienceContainer'
import EditAccoladesContainer from '../containers/EditAccoladesContainer'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

class EditScreen extends Component {


// 2 buttons at bottom!!! 1 will be button to SAVE the data(although we are already saving it) and other must be a 'Link' to '/portoflio/:id'
// Do we still need two buttons? Components look like they are saving data independently so all should be updated?

    portfolioLink = `/portfolio/${this.props.user.id}`

    render() {
        console.log("these are the props in Edit Screen", this.props)
        return (
            <div>
                <NavBar  user={this.props.user} logout={this.props.logout}/>
                <User user={this.props.user} editUserInfo={this.props.editObj}/>
                <EditProjectsContainer userInfo={this.props.user} addObj={this.props.addObj} deleteObj={this.props.deleteObj} editObj={this.props.editObj} projects={this.props.projects} ></EditProjectsContainer>
                <EditEducationContainer userInfo={this.props.user} addObj={this.props.addObj} deleteObj={this.props.deleteObj} editObj={this.props.editObj} education={this.props.education} ></EditEducationContainer>
                <EditSkillsContainer userInfo={this.props.user} addObj={this.props.addObj} deleteObj={this.props.deleteObj} editObj={this.props.editObj} skills={this.props.skills} ></EditSkillsContainer>
                <EditExperienceContainer experiences={this.props.experiences} user={this.props.user} addObj={this.props.addObj} editObj={this.props.editObj} deleteObj={this.props.deleteObj} />
                <EditAccoladesContainer accolades={this.props.experiences} user={this.props.user} addObj={this.props.addObj} editObj={this.props.editObj} deleteObj={this.props.deleteObj} />
                <div>
                    <br/>
                    <Link to={this.portfolioLink}>
                        <button><h4>Build Portfolio!</h4></button>
                    </Link>
                    <br/>
                </div>
            </div>
        )
    }
}


export default LoginHOC(EditScreen)
