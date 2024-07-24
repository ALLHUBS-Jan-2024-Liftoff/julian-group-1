import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MemoriesComponent = () => {
    const [memories, setMemories] = useState([]);
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storedMemories = localStorage.getItem("memories");
        if (storedMemories) {
            const memoriesArray = JSON.parse(storedMemories);
            setMemories(memoriesArray);

            const hasIdAndTitle = memoriesArray.some(memory => memory.id && memory.title);
            if (hasIdAndTitle) {
                console.log("There is at least one memory with both id and title properties.");
            } else {
                console.log("No memory with both id and title properties found.");
                const updatedMemories = memoriesArray.map((memory, index) => ({
                    ...memory,
                    id: index + 1,
                    title: memory.title || `Memory ${index + 1}`
                }));
                setMemories(updatedMemories);
                localStorage.setItem("memories", JSON.stringify(updatedMemories));
            }
        }
    }, []);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleAddMemory = () => {
        if (file && title && description) {
            const date = new Date().toLocaleString();
            const newMemory = {
                id: memories.length + 1, //add unique id//
                file: URL.createObjectURL(file), title,
                date, description
            };
            const updatedMemories = [...memories, newMemory];
            setMemories(updatedMemories);
            localStorage.setItem("memories", JSON.stringify(updatedMemories));
            setFile(null);
            setTitle("");
            setDescription("");
            navigate("/children"); // Navigate to children page
            console.log("Memory added:", newMemory);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <>
            <header>
                <h2>Add A Memory</h2>
                {(currentPage === "children" || currentPage === "memories") && (
                    <button onClick={handleLogout}>Logout</button>
                )}
            </header>
            <div>
                {currentPage === "form" ? (
                    <div className="form-box memories">
                        <form action="children" method="post" className="memory-form">
                            <div className="file-input-container">
                                <input type="file" accept="image/*" id="file" style={{display: "none"}}
                                       onChange={handleFileChange}/>
                                <label htmlFor="file">
                                    <svg width="200" height="200"
                                         style={{borderRadius: "50%", border: "1px solid black", cursor: "pointer"}}>
                                        <image
                                            href={file ? URL.createObjectURL(file) : 'https://s3-alpha-sig.figma.com/img/7d4f/457b/dff23a4136c54d4e977e1e0709a57bac?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GArexYRSPOQzltVl5ddc5xVQS-yxxwV~v5tc~8QhM2pGYhEzwXmdezGK4-7GGEXBTCLQic4SjBmwdXtHU79KXY69vPm5PfrXMh~es6i~kxFraC~alWvjgwxWwd4mDjhvWjdvp6UZoG9ymbCoZ2QDdfLRvV8F1gVh51sPw1-oRHYuZveoKIVERKWbDRgluE8NX0lUXnbJER4F~IAHNF35UzCgbkSEujpsS4smz8Zb4JPswptCqrZCFz5M0Awklh1u7XtsUUp0pp7nYbxfeCNJKc68GBh1JzS60NDgLC~BwjLIwqBT1v7tiWF8kqOaF7r2HUVpLwc9Qabpubg-IDKxRQ'}
                                            alt="Upload an image" width="200" height="200" x="0"
                                            preserveAspectRatio="xMidYMid slice"/>
                                    </svg>
                                </label>
                            </div>
                            <input
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={handleTitleChange}
                            />
                            <textarea
                                placeholder="Description"
                                value={description}
                                onChange={handleDescriptionChange}
                            />
                            <button type="button" onClick={handleAddMemory}>Add Memory</button>
                            <button type="button" onClick={handleLogout}>Logout</button>
                        </form>
                    </div>
                ) : (
                    <div className="children">
                        {memories.length > 0 ? (
                            memories.map(memory => (
                                <div key={memory.id}>
                                    <p>{memory.title}</p>
                                    <p>{memory.date}</p>
                                    <p>{memory.description}</p>
                                    <img src={memory.file} alt={memory.title} width="200" height="200"/>
                                </div>
                            ))
                        ) : (
                            <p>No memories found.</p>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};


export default MemoriesComponent;