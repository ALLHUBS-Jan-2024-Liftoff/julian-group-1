import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MemoryDetail = () => {
    const { id } = useParams();
    const [memory, setMemory] = useState(null);

    useEffect(() => {
        const storedMemories = localStorage.getItem('memories');
        const memories = storedMemories ? JSON.parse(storedMemories) : [];
        const memory = memories.find(memory => memory.id === parseInt(id));
        setMemory(memory)
    }, [id]);
        // Fetch memory details using the id
        // Example: const memory = fetchMemoryById(id);
    

    // Fetch memory details using the id
    // Example: const memory = fetchMemoryById(id);

    if (!memory) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{memory.title}</h2>
            <img src={memory.file} alt={memory.title} />
            <p>{memory.description}</p>
        </div>
    );
};

export default MemoryDetail;