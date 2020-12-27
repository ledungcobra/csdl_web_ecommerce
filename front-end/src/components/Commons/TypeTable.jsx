import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import Button from "@material-ui/core/Button";



const TypeTable = ({data}) => {
    const [isShow, setIsShow] = useState();
    const showItem = (isShow)=>{
        setIsShow(true)
    }
    const history = useHistory()
    const reload = ()=>{
        history.go(0)
    }

    const hiddenItem = (isShow)=>{
        setIsShow(false);
    }

    return (
        <Button
            key={'right'}
            className="w-100"
            show ={isShow}
            onMouseEnter={()=>showItem(isShow)}
            onMouseLeave={()=>hiddenItem(isShow)}
            onClick={()=>{
                history.replace({pathname: '/types/'+ data.TG_URL})
                reload();
            }}
        >
            {data.TG_Name}
        </Button>
    )

}

export default TypeTable;
