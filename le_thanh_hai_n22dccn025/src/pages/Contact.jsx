import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div style={{ padding: 20 }}>
            <h1>Liên hệ</h1>
            <p>Email: thanhhai@gmail.com</p>
            <p>Điện thoại: 0123 456 789</p>
            <Link to="/"> Trở về trang chủ</Link>
        </div>
    );
};

export default Contact;
