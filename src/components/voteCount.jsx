import React, { useState } from "react";

const VoteCount = () => {
    const CandidateData = JSON.parse(localStorage.getItem("candidateData")) || [];

    const removeCandidate = (index) => {
        const updatedCandidates = CandidateData.filter((_, i) => i !== index);
        localStorage.setItem("candidateData", JSON.stringify(updatedCandidates));
        window.location.reload(); // Refresh to reflect changes
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                Candidate Vote Count
            </h1>
            {CandidateData.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {CandidateData.map((candidate, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center border rounded-lg bg-white shadow-lg p-4">
                            <img
                                src={candidate.image}
                                alt={`${candidate.name}'s profile`}
                                className="w-32 h-32 object-cover rounded-full border mb-4"
                            />
                            <h2 className="text-xl font-bold text-gray-700">
                                {candidate.name}
                            </h2>
                            <p className="text-sm text-gray-500">{candidate.post}</p>
                            <p className="mt-3 text-blue-600 font-medium text-lg">
                                Votes: {candidate.voteCount}
                            </p>
                            <button
                                onClick={() => removeCandidate(index)}
                                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
                                Remove Candidate
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600 text-center">
                    No candidates found. Please add some candidates to view their vote counts.
                </p>
            )}
        </div>
    );
};

export default VoteCount;
