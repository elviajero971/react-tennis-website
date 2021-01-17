import React, {useState} from 'react';
import './NavBar.css';
import NavItem from '../navitem/NavItem';

const NavBar = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    props.callback(selectedIndex);

    const myNavItem = [
        "Home",
        "Club",
        "Booking",
        "Competition"
    ];

    const changeIndexCallback = (newIndex) => {setSelectedIndex(newIndex)};

    const myNavItemDisplay = myNavItem.map(
        (value,index) => 
            <NavItem
                text= {value}
                selected = {index === selectedIndex}
                index = {index}
                callback = {changeIndexCallback}
            />
    )
    return (
        <div className="NavBar">
            <ul className="NavBar-ul">
                {myNavItemDisplay}
            </ul>
        </div>
    );
};

export default NavBar;