import React, { useState } from 'react';

const Voter = () => {
    const [votedCandidates, setVotedCandidates] = useState(JSON.parse(localStorage.getItem("votedCandidates")) || {});
    const [candidateData, setCandidateData] = useState(JSON.parse(localStorage.getItem("candidateData")) || []);

    const handleVote = (candidate, post) => {
        // Check if user already voted for this post
        if (votedCandidates[post]) {
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

        // Save updated data to localStorage
        setCandidateData(updatedCandidates);
        localStorage.setItem("candidateData", JSON.stringify(updatedCandidates));

        // Mark the user as having voted for this post
        const updatedVotedCandidates = { ...votedCandidates, [post]: candidate.name };
        setVotedCandidates(updatedVotedCandidates);
        localStorage.setItem("votedCandidates", JSON.stringify(updatedVotedCandidates));

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
                        <p className="mt-2 text-sm font-medium text-blue-600">Vote Count: {candidate.voteCount || 0}</p>
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
