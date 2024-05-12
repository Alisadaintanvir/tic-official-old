import React from 'react';
import { API } from '../config';

const eventsApi = () => {
    const getEvent = ()=>{
        return fetch(`${API}/event`)
        .then(res=>res.json())
    }
    return{getEvent}
};

export default eventsApi;