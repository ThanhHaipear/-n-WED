import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ padding: 20 }}>
            <h1>Trang chủ</h1>
            <p>Chào mừng bạn đến với website của mình!</p>
            <Link to="/contact"> Đi đến trang Liên hệ</Link>
        </div>
    );
};

export default Home;
