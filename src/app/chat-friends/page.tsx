'use client'
import React, { useState } from 'react';

type MessageProps = {
    user: string;
    message: string;
    createdAt: string;
    receiver: string;
    emoji: string;
    reply: string;
};

export default function ChatFriends({ user, message, createdAt, receiver, emoji, reply }: MessageProps) {
    const [data, setData] = useState<MessageProps>({
        user,
        message,
        createdAt,
        receiver,
        emoji,
        reply,
    });
    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSend = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log(result); // Handle the response as needed
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <div>
                <p>User: {data.user}</p>
                <p>Message: {data.message}</p>
                <p>Created At: {data.createdAt}</p>
                <p>Receiver: {data.receiver}</p>
                <p>Emoji: {data.emoji}</p>
                <p>Reply: {data.reply}</p>
            </div>
            <button onClick={handleSend}>Send</button>
        </div>
    );
}
