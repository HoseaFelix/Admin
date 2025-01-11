import React, { useState } from 'react';

const RegisterCand = () => {
    const CandidateData = JSON.parse(localStorage.getItem("candidateData")) || [];

    const [candidateImage, setCandidateImage] = useState('');
    const [candidateData, setCandidateData] = useState({
        name: '',
        party: '',
        image: '',
        post: '',
        voteCount: 0
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
        localStorage.setItem('candidateData', JSON.stringify(CandidateData));

        alert('Candidate data saved successfully!');

        // Reset the form
        setCandidateData({
            name: '',
            party: '',
            image: '',
            post: ''
        });
        setCandidateImage('');
    };

    return (
        <div className="font-general">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <label>
                    Candidate Name:
                    <input
                        type="text"
                        name="name"
                        className="form"
                        value={candidateData.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Candidate Party:
                    <input
                        type="text"
                        name="party"
                        className="form"
                        value={candidateData.party}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Upload Image:
                    <input
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                    />
                </label>
                <label>
                    Choose Post:
                    <select
                        value={candidateData.post}
                        name="post"
                        onChange={handleChange}
                    >
                        <option>President</option>
                        <option>Vice President</option>
                        <option>Governor</option>
                    </select>
                </label>
                <input
                    type="submit"
                    className="border w-max mx-auto px-5 rounded-lg cursor-pointer"
                />
            </form>
        </div>
    );
};

export default RegisterCand;
