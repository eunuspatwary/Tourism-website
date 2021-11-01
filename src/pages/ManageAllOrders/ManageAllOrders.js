import React, { useEffect, useState } from 'react';


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://frozen-refuge-76569.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            {
                orders.map(order => <div className='bg-secondary'>

                    <h3>{order.name}</h3>
                    <p>{order.email}</p>
                    <p>{order.adress}</p>
                    <p>{order.Phonenumber}</p>
                </div>)
            }
        </div>
    );
};

export default ManageAllOrders;