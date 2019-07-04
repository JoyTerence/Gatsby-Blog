import React from "react"

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

import { IconContext } from "react-icons"
import { DiGithub } from "react-icons/di"

class ProjectCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hover : false }
    }

    onHoverStart = () => {
        console.log("Here")
        this.setState({ hover: true })
    }

    onHoverEnd = () => {
        console.log("end")
        this.setState({ hover: false })
    }

    render() {
        const node = this.props.project;
        return (
            <div key={node.id} style={{flex: 1}}>
                <Card border="primary" className="projectCard" onMouseEnter={this.onHoverStart} onMouseLeave={this.onHoverEnd}>
                        <Card.Header className="projectName">{node.Name}</Card.Header>
                        <Card.Text className="projectDescription">{node.Description}</Card.Text>
                        <a href={node.Link} className="projectLink">
                            <Button variant="link" size="sm">
                                <IconContext.Provider value={{color: this.state.hover === true ? `blue`: `black`, size: this.state.hover === true ? `2.25em` : `2em`}}>
                                    <span>< DiGithub /></span>
                                </IconContext.Provider>    
                            </Button>
                        </a>
                </Card>
            </div>
        )
    }
}

export default ProjectCard