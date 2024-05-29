'use client'
import React, { useState } from 'react';

type UserProps = {
    name: string;
    email: string;
    password: string;
    birthday: string;
    city: string;
}

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState<UserProps>({
        name: '',
        email: '',
        password: '',
        birthday: '',
        city: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3000/create-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Corrected the header
                },
                body: JSON.stringify(formData),
            });
            // Handle response here
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <input
                type="date"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
            />
            <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default SignUp;
