import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Gọi API GET
    useEffect(() => {
        fetch("http://localhost:3000/api/contacts")
            .then(res => res.json())
            .then(data => setContacts(data));
    }, []);

    // Gửi API POST
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/contacts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email })
        })
            .then(res => res.json())
            .then(newContact => {
                setContacts([...contacts, newContact]);
                setName('');
                setEmail('');
            });
    };

    // Xóa 1 liên hệ theo id
    const handleDeleteContact = (id) => {
        if (window.confirm("Bạn có chắc muốn xóa liên hệ này?")) {
            fetch(`http://localhost:3000/api/contacts/${id}`, {
                method: "DELETE"
            })
                .then(() => {
                    setContacts(contacts.filter(c => c.id !== id));
                })
                .catch(() => {
                    alert("Xóa thất bại. Kiểm tra lại backend.");
                });
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <div style={{ display: 'flex' }}>
                {/* LEFT - FORM & DANH SÁCH */}
                <div style={{ flex: 2, paddingRight: 40 }}>
                    <h1>Liên hệ</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Tên"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ marginLeft: 10 }}
                        />
                        <button type="submit" style={{ marginLeft: 10 }}>Gửi</button>
                    </form>

                    <h2>Danh sách liên hệ</h2>
                    <ul>
                        {contacts.map((c) => (
                            <li key={c.id}>
                                {c.name} - {c.email}
                                <button
                                    onClick={() => handleDeleteContact(c.id)}
                                    style={{
                                        marginLeft: 10,
                                        color: 'white',
                                        backgroundColor: 'red',
                                        border: 'none',
                                        padding: '3px 8px',
                                        borderRadius: 4,
                                        cursor: 'pointer'
                                    }}
                                >
                                    Xóa
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT - THÔNG TIN CÁ NHÂN */}
                <div style={{
                    flex: 1,
                    padding: 20,
                    border: '1px solid #ccc',
                    borderRadius: 8,
                    backgroundColor: '#f9f9f9',
                    height: 'fit-content'
                }}>
                    <h3>Thông tin của tôi</h3>
                    <p><strong>Họ tên:</strong> Lê Thành Hải</p>
                    <p><strong>MSSV:</strong> N22DCCN025</p>
                    <p><strong>Email:</strong> thanhhai@gmail.com</p>
                    <p><strong>SĐT:</strong> 0123-456-789</p>
                    <p><strong>Trường:</strong> Học viện Công nghệ Bưu chính Viễn thông</p>
                </div>
            </div>
            <div style={{ marginTop: 30 }}>
                <Link to="/">Trở về trang chủ</Link>
            </div>
        </div>
    );
};

export default Contact;
