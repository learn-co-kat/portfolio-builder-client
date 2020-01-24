import React, { Component } from 'react'

//accepts props from parent of 1 skill obj, renders info for each attribute
//can be functional component if you want


export default class EditSkillCard extends Component {

    render() {
        return (
            <div className="card">
                    <div className="card-header">
                    <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <button onClick={e => this.props.changeEditing(e, this.props.cardDetails)} class="nav-link" >Edit</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={e => this.props.deleteObj('skill', this.props.cardDetails.id)} className="nav-link" >Delete</button>
                    </li>
                    </ul>
                </div>
                    <div class="card-body">
                        <h5 class="card-title">Name : {this.props.cardDetails.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Category : {this.props.cardDetails.category}</h6>
                        <p class="card-text">External Link : {this.props.cardDetails.link_url}</p>
                        <p class="card-text">Proficiency : {this.props.cardDetails.proficiency}</p>
                        <p class="card-text">Priority : {this.props.cardDetails.order}</p>
                    </div>
                </div>          
        )
    }
}
