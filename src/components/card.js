import React from "react"

import { Col } from "react-bootstrap"
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
        this.setState({ hover: true })
    }

    onHoverEnd = () => {
        this.setState({ hover: false })
    }

    render() {
        const node = this.props.project;
        return (
            <Col key={node.id} style={{padding: `1em`}}>
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
            </Col>
        )
    }
}

export default ProjectCard