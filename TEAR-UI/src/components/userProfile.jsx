import React from 'react';
import { useAuth } from './authContext';

const UserProfile = () => {
    const { user } = useAuth();

    if (!user) {
        return <div>Please log in.</div>;
    }

    return (
        <div>
            <h1>Welcome, {user.name}!</h1>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserProfile;