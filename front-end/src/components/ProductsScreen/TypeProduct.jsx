import SingleProductItem from "./SingleProductItem";
import {Col} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import axios from "axios";

const TypeProducts = ({url}) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {


        axios.get(url).then(r => {
            {
                setProduct(r.data)
            }
        }).catch(e => console.log(e))
    }, []);
    return (
        <div>
            {product.map((dataProd) => {
                return (
                    <SingleProductItem
                        key={dataProd.Id_GD}
                        product={dataProd}/>
                )
            })}
        </div>
    )


}

export  default TypeProducts