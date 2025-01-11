import React, { useState, useEffect } from "react";

const Voter = () => {
    const [candidateData, setCandidateData] = useState(JSON.parse(localStorage.getItem("candidateData")) || []);
    const currentPasskey = localStorage.getItem("currentPasskey"); // Fetch logged-in user's passkey

    useEffect(() => {
        if (!currentPasskey) {
            alert("Unauthorized access! Please log in.");
            window.location.href = "https://admin-steel-iota.vercel.app/"; // Redirect to login page if no passkey
        }
    }, [currentPasskey]);

    const handleVote = (candidate, post) => {
        // Prevent voting multiple times for the same post
        const credentials = JSON.parse(localStorage.getItem("credential")) || [];
        const currentCredential = credentials.find((cred) => cred.passkey === currentPasskey);

        if (!currentCredential) {
            alert("Unauthorized access! Invalid credentials.");
            return;
        }

        if (currentCredential.votedFor && currentCredential.votedFor.includes(post)) {
            alert(`You have already voted for the ${post} position.`);
            return;
        }

        // Update vote count for the selected candidate
        const updatedCandidates = candidateData.map((c) => {
            if (c.name === candidate.name && c.post === post) {
                return { ...c, voteCount: (c.voteCount || 0) + 1 };
            }
            return c;
        });

        // Save updated candidates
        setCandidateData(updatedCandidates);
        localStorage.setItem("candidateData", JSON.stringify(updatedCandidates));

        // Mark post as voted for in credentials
        currentCredential.votedFor = [...(currentCredential.votedFor || []), post];
        localStorage.setItem("credential", JSON.stringify(credentials));

        alert(`You voted for ${candidate.name} as ${post}.`);
    };

    return (
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
    );
};

export default Voter;
