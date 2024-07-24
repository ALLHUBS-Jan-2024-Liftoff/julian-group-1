import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Children = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [memories, setMemories] = useState([]);

    useEffect(() => {
        const storedMemories = localStorage.getItem("memories");
        if (storedMemories) {
            setMemories(JSON.parse(storedMemories));
        }
    }, []);

    const handleMemoryClick = (memoryId) => {
        navigate(`/memory/${memoryId}`);
    };

    const fetchUserNameByEmail = async (email) => {
        const response = await fetch(`api/users?email=${encodeURIComponent(email)}`);
        const user = await response.json();
        return user.name || "Unknown User";
    };

    const getRandomGreeting = async (email) => {//gives a personalized  random greeting
        const name = await fetchUserNameByEmail(email);
        const greetings = ["Hello", "Hi", "Hey", "Greetings"];
        const greeting = greetings[Math.floor(Math.random() * greetings.length)];
        return `${greeting}, ${name}`;
    };
    const handleInputChange = async (e) => {
        const email = e.target.value;
        const name = await fetchUserNameByEmail(email);
        setUserName(name);
    };


    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div style={{ border: "none", padding: "10px", position: "relative" }}>
            <div style={{ border: "none", margin: "10px" }}>
                <h2>Welcome {userName}</h2>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "stretch" }}>
                {memories.length > 0 ? (
                    memories.map((memory, index) => (
                        <div
                            key={index}
                            style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}
                            onClick={() => handleMemoryClick(memory.id)}
                        >
                            <div className="box">
                                <img src={memory.file} alt={memory.title} className="image" />
                                <p>{memory.title}</p>
                            </div>
                            <div style={{ textAlign: "center" }}>{memory.title}</div>
                        </div>
                    ))
                ) : (
                    <>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                            <div className="box">
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/7d4f/457b/dff23a4136c54d4e977e1e0709a57bac?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GArexYRSPOQzltVl5ddc5xVQS-yxxwV~v5tc~8QhM2pGYhEzwXmdezGK4-7GGEXBTCLQic4SjBmwdXtHU79KXY69vPm5PfrXMh~es6i~kxFraC~alWvjgwxWwd4mDjhvWjdvp6UZoG9ymbCoZ2QDdfLRvV8F1gVh51sPw1-oRHYuZveoKIVERKWbDRgluE8NX0lUXnbJER4F~IAHNF35UzCgbkSEujpsS4smz8Zb4JPswptCqrZCFz5M0Awklh1u7XtsUUp0pp7nYbxfeCNJKc68GBh1JzS60NDgLC~BwjLIwqBT1v7tiWF8kqOaF7r2HUVpLwc9Qabpubg-IDKxRQ__"
                                    alt="Child 1"
                                    className="image"
                                />
                                <p>Paige</p>
                            </div>
                            <div style={{ textAlign: "center" }}>Child 1</div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                            <div className="box">
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/285f/0e60/b00cbfb8cdb8e524aea2dfefdbfa570d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MaJgsJyYrsnWJdYHo-54XcXb3wL1-cGlvCENEMj~q7nIDvJt6MhI82v9vXyqdKqOmzhYvalArnomq-Eq-FooEK22z25AW10jiL2NgNgdzSdEDfFxiNvapI5Zs9H3DsbgcTTkgU4TRpt6vWvGYcRVrumMbIPNaRMexnnV87U~mfmgb51zl7ECnFruh1TsYUj7LUdjLkjL6JcAQ4bUmXJh6T8IFeNbnBomlvw7ASqpNPA~hmuKl8uxLUGeLJUWPRUwQBecuuPY4E3fRTkE3KLjZxt9lUvTJvWUzqhzVlhINBa39MWA89BgiIicGcuqJ13MAJnJrI6BNn9vDvYh8qv1xA__"
                                    alt="Child 2"
                                    className="image"
                                />
                                <p>Conner</p>
                            </div>
                            <div style={{ textAlign: "center" }}>Child 2</div>
                        </div>
                    </>
                )}
            </div>
            <button
                style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "blue",
                    color: "white",
                    border: "none",
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                    cursor: "pointer"
                }}
                onClick={() => navigate("/memories")}
            >
                +
            </button>
            <button
                style={{
                    width: "100px",
                    height: "40px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    cursor: "pointer"
                }}
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
};

export default Children;