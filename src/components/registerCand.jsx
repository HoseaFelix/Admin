import React, { useState } from "react";

const RegisterCand = () => {
    const CandidateData = JSON.parse(localStorage.getItem("candidateData")) || [];

    const [candidateImage, setCandidateImage] = useState("");
    const [candidateData, setCandidateData] = useState({
        name: "",
        party: "",
        image: "",
        post: "",
        voteCount: 0,
    });

    // Handler for Candidate Name and Post
    const handleChange = ({ target: { name, value } }) => {
        setCandidateData({ ...candidateData, [name]: value });
    };

    // Handler for Image Upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCandidateImage(reader.result); // Store the base64 string of the image
                setCandidateData({ ...candidateData, image: reader.result }); // Update the image in candidateData
            };
            reader.readAsDataURL(file);
        }
    };

    // Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();

        CandidateData.push(candidateData);

        // Store the updated candidate data array in local storage
        localStorage.setItem("candidateData", JSON.stringify(CandidateData));

        alert("Candidate data saved successfully!");

        // Reset the form
        setCandidateData({
            name: "",
            party: "",
            image: "",
            post: "",
        });
        setCandidateImage("");
    };

    return (
        <div className="font-general bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Register a Candidate</h2>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                {/* Candidate Name */}
                <label className="block">
                    <span className="text-gray-700">Candidate Name:</span>
                    <input
                        type="text"
                        name="name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        placeholder="Enter candidate's name"
                        value={candidateData.name}
                        onChange={handleChange}
                        required
                    />
                </label>

                {/* Candidate Party */}
                <label className="block">
                    <span className="text-gray-700">Candidate Party:</span>
                    <input
                        type="text"
                        name="party"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        placeholder="Enter candidate's party"
                        value={candidateData.party}
                        onChange={handleChange}
                        required
                    />
                </label>

                {/* Upload Image */}
                <label className="block">
                    <span className="text-gray-700">Upload Image:</span>
                    <input
                        type="file"
                        name="image"
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        onChange={handleImageChange}
                        required
                    />
                    {candidateImage && (
                        <img
                            src={candidateImage}
                            alt="Candidate Preview"
                            className="mt-4 w-24 h-24 object-cover rounded-full"
                        />
                    )}
                </label>

                {/* Choose Post */}
                <label className="block">
                    <span className="text-gray-700">Choose Post:</span>
                    <select
                        value={candidateData.post}
                        name="post"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a position</option>
                        <option value="President">President</option>
                        <option value="Vice President">Vice President</option>
                        <option value="Governor">Governor</option>
                    </select>
                </label>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Save Candidate
                </button>
            </form>
        </div>
    );
};

export default RegisterCand;
