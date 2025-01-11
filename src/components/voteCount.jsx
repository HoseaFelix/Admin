import React, {useState} from 'react';

const VoteCount = () => {
    const CandidateData = JSON.parse(localStorage.getItem("candidateData")) || [];
    

    const removeCandidate = (index) => {
        const updatedCandidates = CandidateData.filter((_, i) => i !== index);
        localStorage.setItem("candidateData", JSON.stringify(updatedCandidates));
        window.location.reload(); // Refresh to reflect changes
    };

    return (
        <div className="flex flex-col w-full gap-4 p-4">
            {CandidateData.map((candidate, index) => (
                <div
                    key={index}
                    className="flex items-center border rounded-lg p-4 bg-white shadow-md">
                    <img
                        src={candidate.image}
                        alt={`${candidate.name}'s profile`}
                        className="w-24 h-24 object-cover rounded-full border mr-4"
                    />
                    <div className="flex flex-col flex-1">
                        <h2 className="text-lg font-bold text-gray-800">{candidate.name}</h2>
                        <p className="text-sm text-gray-600">{candidate.post}</p>
                        <p className="mt-2 text-sm font-medium text-blue-600">Vote Count: {candidate.voteCount}</p>
                        <button
                            onClick={() => removeCandidate(index)}
                            className="mt-2 text-sm text-red-600 hover:underline">
                            Remove Candidate
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VoteCount;
