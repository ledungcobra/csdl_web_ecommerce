import SingleProductItem from "./SingleProductItem";
import {Col} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Pagination} from "@material-ui/lab";

const TypeProducts = ({url,page}) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(url+page).then(r => {
            {
                setProduct(r.data)
            }
        }).catch(e => console.log(e))
    }, []);
    return (
        <div>
            {product.map((dataProd) => {
                return (
                    <div><SingleProductItem
                        key={dataProd.Id_GD}
                        product={dataProd}/>
                    </div>

                )
            })}
        </div>
    )


}

export default TypeProducts