import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import { Button, InnerWrapper } from '../utils/GlobalStyles'
import events from "reducers/events";
import { MainScreen } from './MainScreen'
import { Card, Row, Col, Badge } from 'react-bootstrap'
import { API_URL } from '../utils/urls'
/* import events from '../data/events' 
import axios from "axios";*/

export const MyEvents = () => {

    /* const [events, setEvents] = useState([]) */

    /* const deleteHandler = (id) => {
        if(window.confirm('are you sure?')){

        }
    } */

    const eventItems = useSelector((store) => store.events.items);
    const dispatch = useDispatch();
    const accessToken = useSelector((store) => store.user.accessToken);
    const navigate = useNavigate();

    useEffect( () => {
        if (!accessToken) {
            navigate("/login");
        }
    }, [accessToken, navigate]);
    useEffect(() => {

        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": accessToken
            }
        }
        fetch('http://localhost:8080/events', options)
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    dispatch(events.actions.setItems(data.response));
                    dispatch(events.actions.setError(null));
                } else {
                    dispatch(events.actions.setItems([]));
                    dispatch(events.actions.setError(data.response));
                }
            })
    }, [accessToken, dispatch]);


   /*  const fetchEvents = async() => {
      const { data } = await axios.get('API_URL');
      setEvents(data);
    } 

    console.log(events);

    useEffect(() => {
      fetchEvents();
    }, [])*/

    return (
        <InnerWrapper>
        <MainScreen title="Welcome back!" >
        <Link to="create-event">
                <Button>
                    Create New Event
                </Button>
            </Link>

            <div>
                <h2 children='You are now logged in' />
                {eventItems.map((item) => {
                    return <p key={item._id}>{item.description}</p>
                })}
            </div> 

           {/* { <Row xs={1} md={2} className="g-4">
      {eventItems.map((item) => (
        <Col key={item._id}>
          <Card >
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <h4>
                    <Badge>
                        {item.language}
                    </Badge>
                    <Badge>
                        {item.city}
                    </Badge>
                </h4>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <Button href={`/event/${item._id}`}>Edit</Button>
              <Button onClick={() => deleteHandler(item._id)}>Delete</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>} */}
            </MainScreen>
        </InnerWrapper>
    )
}



