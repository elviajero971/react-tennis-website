import React from 'react';
import './Content.css';
import Home from '../home/Home';
import Club from '../club/Club';
import Competition from '../competition/Competition';
import Booking from '../booking/Booking';

const Content = (props) => {

    let child;
    
    switch (props.index){
        case 0: 
            child = <Home/>; 
            break;
        case 1:
            child = <Club/>;
            break;
        case 2:
            child = <Booking/>;
            break;
        case 3:
            child = <Competition/>;
            break;
        default:
            child = <div></div>;
            break;
    };

    return (
        <div className="ContentDisplay">
            {child}
        </div>
    );
};

export default Content;