import React from "react";
import { Link } from 'react-router-dom'
import { Button, InnerWrapper } from '../utils/GlobalStyles'
import { MainScreen } from './MainScreen'
import { Card, Row, Col, Badge } from 'react-bootstrap'
import events from '../data/events'

export const MyEvents = () => {
    const deleteHandler = (id) => {
        if(window.confirm('are you sure?')){

        }
    }
    return (
        <InnerWrapper>
        <MainScreen title="Welcome back Neah and Tika">
        <Link to="create-event">
                <Button>
                    Create New Event
                </Button>
            </Link>

            <Row xs={1} md={2} className="g-4">
      {events.map((event) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <h4>
                    <Badge>
                        {event.language}
                    </Badge>
                    <Badge>
                        {event.city}
                    </Badge>
                </h4>
              <Card.Title>{event.title}</Card.Title>
              <Card.Text>
                {event.content}
              </Card.Text>
              <Button href={`/event/${event._id}`}>Edit</Button>
              <Button onClick={() => deleteHandler(event._id)}>Delete</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

            </MainScreen>
        </InnerWrapper>
    )
}