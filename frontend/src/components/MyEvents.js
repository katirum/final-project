import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import { Button, InnerWrapper } from '../utils/GlobalStyles'
import events from "reducers/events";
import { MainScreen } from './MainScreen'
import { API_URL } from '../utils/urls'


export const MyEvents = () => {

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
        fetch(API_URL("events"), options)
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
            </MainScreen>
        </InnerWrapper>
    )
}



