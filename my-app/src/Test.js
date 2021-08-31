import axios from 'axios';
import {useCallback, useEffect, useState} from "react";

const change = (setCallback) => (e) => {
  setCallback(e.target.value);
};

export default () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [orders, setOrders] = useState([]);

    const onPost = () => {
        axios.post('http://localhost:3030/order', {
            name,
            phone,
            email
        })
            .then(() => {
                setEmail('');
                setName('');
                setPhone('');

                onGet();
            });
    };

    const onGet = () => {
        axios.get('http://localhost:3030/order')
            .then((data) => {
                setOrders(data.data);
            });
    }

    useEffect(() => {
        onGet();
    }, [])

    return <>
        <input name={'email'} onChange={change(setEmail)} type={'text'} value={email} placeholder={'email'} />
        <input name={'phone'} onChange={change(setPhone)} type={'text'} value={phone} placeholder={'phone'} />
        <input name={'name'} onChange={change(setName)} type={'text'} value={name} placeholder={'name'} />
        <button onClick={onPost}>POST</button>
        <button onClick={onGet}>GET</button>
        <ul>{orders.map(({ name, phone, email }, index) => <li key={index}>name: {name} | phone: {phone} | email: {email}</li>)}</ul>
    </>;
}
