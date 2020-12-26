import React, {useEffect, useState} from 'react'

import './LeftBanner.css';
import axios from "axios";
import TypeTable from "./TypeTable";


const LeftBanner = () => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        axios.post('/api/types', {}, config).then(r => setTypes(r.data)).catch(e => console.log(e));

    }, []);

    return (
        <div className="mb-2">
            {types.map((data, index) => {
                return (
                    <TypeTable
                        key={index}
                        data={data}/>)
            })}
        </div>
    )
}

export default LeftBanner
