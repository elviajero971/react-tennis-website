import './NavItem.css';

const NavItem = (props) => {
    return (
        <li 
            className= {props.selected ? "NavItem NavItemSelected" : "NavItem"}
            onClick ={()=>{props.callback(props.index)}}
        >
            {props.text}
        </li>
    );
};

export default NavItem;