import React from "react"

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

import { IconContext } from "react-icons"
import { GoLogoGithub } from "react-icons/go"

var _ = require('lodash');

class ProjectCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hover : false }
    }

    render() {
        const node = this.props.project;
        return (
            <div key={node.id} style={{flex: 1}}>
                            <Card bg="light" border="primary" className="projectCard">
                                    <Card.Header className="projectName">{node.name}</Card.Header>
                                    <Card.Text className="projectDescription">{node.Description}</Card.Text>
                                    {console.log(node.Link)}
                                    <a href={node.Link} className="projectLink">
                                        <Button variant="link" size="sm">
                                            <IconContext.Provider value={{color:`black`, size: `2em`}}>
                                                <span>< GoLogoGithub /></span>
                                            </IconContext.Provider>    
                                        </Button>
                                    </a>
                            </Card>
                        </div>
        )
    }
}

export default ProjectCard