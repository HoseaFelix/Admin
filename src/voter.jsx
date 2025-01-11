import React, { useState, useEffect } from "react";

const Voter = () => {
    const [candidateData, setCandidateData] = useState(JSON.parse(localStorage.getItem("candidateData")) || []);
    const [isAuthorized, setIsAuthorized] = useState(false); // Track authorization
    const currentPasskey = localStorage.getItem("currentPasskey");

    useEffect(() => {
        // Check if currentPasskey exists and is valid
        if (currentPasskey) {
            console.log("Retrieved passkey:", currentPasskey);

            const credentials = JSON.parse(localStorage.getItem("credential")) || [];
            const matchingCredential = credentials.find((cred) => cred.passkey === currentPasskey);

            if (matchingCredential) {
                setIsAuthorized(true); // Authorize user
            } else {
                alert("Unauthorized access! Invalid credentials.");
                window.location.href = "/login.html"; // Redirect to login page
            }
        } else {
            alert("Unauthorized access! Please log in.");
            window.location.href = "/login.html"; // Redirect to login page
        }
    }, [currentPasskey]);

    const handleVote = (candidate, post) => {
        if (!isAuthorized) return; // Prevent voting if unauthorized

        // Validate and update voting logic here...
    };

    return isAuthorized ? (
        <main className="relative min-h-screen w-screen overflow-x-hidden bg-gray-100 flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Cast Your Vote</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {candidateData.map((candidate, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                        <img
                            src={candidate.image}
                            alt={`${candidate.name}'s profile`}
                            className="w-24 h-24 object-cover rounded-full border mb-4"
                        />
                        <h2 className="text-lg font-bold text-gray-800">{candidate.name}</h2>
                        <p className="text-sm text-gray-600">{candidate.post}</p>
                        <button
                            onClick={() => handleVote(candidate, candidate.post)}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Cast Vote
                        </button>
                    </div>
                ))}
            </div>
        </main>
    ) : null; // Render nothing if unauthorized
};

export default Voter;
