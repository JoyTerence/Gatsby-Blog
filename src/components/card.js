import React from "react"

import { Col } from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

import { IconContext } from "react-icons"
import { FaGithubAlt } from "react-icons/fa"

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
                <div role="button" className="projectCard" onMouseEnter={this.onHoverStart} onMouseLeave={this.onHoverEnd} tabIndex={0}>
                        <Card.Header className="projectName">{node.Name}</Card.Header>
                        <Card.Text className="projectDescription">{node.Description}</Card.Text>
                        <a href={node.Link} className="projectLink">
                            {
                                this.state.hover === true ? 
                                    <Button size="sm"> GitHub Link </Button> :
                                    <IconContext.Provider value={{ size: `1.5em`}}>
                                        <span>< FaGithubAlt /></span>
                                    </IconContext.Provider>
                            }
                        </a>
                </div>
            </Col>
        )
    }
}

export default ProjectCard