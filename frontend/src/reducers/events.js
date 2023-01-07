/* import { createSlice } from '@reduxjs/toolkit';

const events = createSlice({
  name: "events",
  initialState: {
    items: [],
    error: null,
  },
  reducers: {
    setItems: (store, action) => {
      store.items = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
  },
});

export default events; */

import {
  EVENTS_UPDATE_REQUEST,
  EVENTS_UPDATE_SUCCESS,
  EVENTS_UPDATE_FAIL,
  EVENTS_CREATE_FAIL,
  EVENTS_CREATE_REQUEST,
  EVENTS_CREATE_SUCCESS,
  EVENTS_DELETE_FAIL,
  EVENTS_DELETE_REQUEST,
  EVENTS_DELETE_SUCCESS,
  EVENTS_LIST_FAIL,
  EVENTS_LIST_REQUEST,
  EVENTS_LIST_SUCCESS,
} from "../constants/eventConstants";

export const eventListReducer = (state = { events: [] }, action) => {
  switch (action.type) {
    case EVENTS_LIST_REQUEST:
      return { loading: true };
    case EVENTS_LIST_SUCCESS:
      return { loading: false, events: action.payload };
    case EVENTS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const eventCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENTS_CREATE_REQUEST:
      return { loading: true };
    case EVENTS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case EVENTS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const eventDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENTS_DELETE_REQUEST:
      return { loading: true };
    case EVENTS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case EVENTS_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const eventUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENTS_UPDATE_REQUEST:
      return { loading: true };
    case EVENTS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case EVENTS_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};