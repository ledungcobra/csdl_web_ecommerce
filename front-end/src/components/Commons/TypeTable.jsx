import React, {useEffect, useState} from "react";
import SplitButton from "react-bootstrap/SplitButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {Dropdown, DropdownButton} from "react-bootstrap";



const TypeTable = ({data}) => {
    const [isShow, setIsShow] = useState();
    const showItem = (isShow)=>{
        setIsShow(true)
    }

    const hiddenItem = (isShow)=>{
        setIsShow(false);
    }
    useEffect(()=>{

    }, []);
    return (
        <DropdownButton
            as={ButtonGroup}
            key={'right'}
            id={`dropdown-button-drop-${'right'}`}
            drop={'right'}
            variant="secondary"
            title={`${data.TG_Name}`}
            className="w-100"
            show ={isShow}
            href ={`${data.TG_URL}`}
            onMouseEnter={()=>showItem(isShow)}
            onMouseLeave={()=>hiddenItem(isShow)}
        >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
    )

}

export default TypeTable;
