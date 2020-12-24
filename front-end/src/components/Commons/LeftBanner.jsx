import React, {useState} from 'react'
import SplitButton from "react-bootstrap/SplitButton";
import {Button, Dropdown} from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import  './LeftBanner.css';

const LeftBanner = () => {



    const [isHover,setIsHover] = useState(false);

    return (

        <div className="w3l_banner_nav_left">
            <nav className="navbar nav_bottom">
                <div style={{minWidth: "100%"}} >
                    <Button
                        className='btn-hover'
                        style={{minWidth: "100%"}}
                    >spanType</Button>
                </div>
            </nav>
        </div>

    )
}

export default LeftBanner
