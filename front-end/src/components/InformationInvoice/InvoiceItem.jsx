import {Card} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import axios from "axios";



const InvoiceItem = ({InvoiceItem})=>{
    console.log(InvoiceItem)

    const {cartItems, totalPrice} = useSelector(state => state.cart);
    const [invoice, setInvoice] = useState([]);

    useEffect(() => {
        axios.get('/api/users/invoice/cart/?invoiceID=' + InvoiceItem.Id_Invoice).then(r => {
            setInvoice(r.data.result)

        }).catch(e => console.log(e));

    }, []);

    return (
        <div>
            <table className="timetable_sub">
                <thead>
                <tr>
                    <th>ID Product</th>
                    <th>Product Name</th>
                    <th>Quality</th>
                    <th>Price</th>
                    <th>Supplier Name</th>

                </tr>
                </thead>
                <tbody>
                {
                    invoice.map((data, index)=>{
                        return(
                            <tr>
                                <td>
                                    {data.Id_GD}
                                </td>

                                <td>
                                    {data.GD_Name}
                                </td>

                                <td>
                                    {data.GI_Number}
                                </td>

                                <td>
                                    {data.GD_Price}
                                </td>

                                <td>
                                    {data.Supplier_Name}
                                </td>
                            </tr>


                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default InvoiceItem;
