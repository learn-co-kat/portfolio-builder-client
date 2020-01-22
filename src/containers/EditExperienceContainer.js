import React, { Component } from 'react'
import experienceCards from '../components/EditExperienceCard'
import experienceForm from '../components/EditExperienceForm'
import EditExperienceForm from '../components/EditExperienceForm'

// send state to App.js in order to update the user's details 
// --> addExperienceHandler(experience)
// state will be sent up from EditExperienceForm? 

class EditExperienceContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            editing: false,
            newExperience: []
        }
    }

    // App.js props --> "experiences"
    mapThroughExperience = () => {
        return this.props.experiences.map((experience, index) => {
            return <EditExperienceCard key={index} experience={experience} newExperienceClick={this.newExperienceClick} editExistingExperience={this.editExistingExperience} />
        }) 
    }

    // function that will be called when user clicks existing skill's edit button 
    // update state with experience and toggle editing to "true" in order to trigger prepopulated form to render
    editExistingExperience = (experience) => {
        this.setState({
            editing: true,
            newExperience: experience
        })
    }

    // function that will be called when user clicks on button that will add a new skill
    // setting state to empty string as it shouldn't populate with any existing data in EditExperienceForm
    newExperienceClick = () => {
        this.setState({
            editing: true,
            newExperience: ""
        })
    }

    onEditForm = newSkillObj => {

    }

    render() {
        let isEditing = this.state.editing

        return (
            <div>
                <div>
                    <h3>Experience</h3>
                    {this.mapThroughExperience()} 
                </div>
                <div>
                    {
                        isEditing ? <EditExperienceForm experience={this.state.newExperience} onEditForm={this.onEditForm} /> : null 
                    }
                </div>
            </div>
        )
    }
}

export default EditExperienceContainer;