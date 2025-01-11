import React, { useState } from "react";
import RegisterCand from "./registerCand.jsx";
import VoteCount from "./voteCount.jsx";

const AdminHome = () => {
    const [isRegisterVisible, setIsRegisterVisible] = useState(true);
    const [isVoteCountVisible, setIsVoteCountVisible] = useState(false);

    const showRegister = () => {
        setIsRegisterVisible(true);
        setIsVoteCountVisible(false);
    };

    const showVoteCount = () => {
        setIsRegisterVisible(false);
        setIsVoteCountVisible(true);
    };

    return (
        <div className="bg-gray-50 h-screen w-screen text-gray-800">
            {/* Header */}
            <header className="bg-blue-600 text-white py-6">
                <h1 className="text-center text-3xl font-semibold tracking-wide">
                    Voter Administration Portal
                </h1>
            </header>

            {/* Main Content */}
            <div className="grid h-full w-full grid-cols-1 md:grid-cols-4 gap-4 pt-6 px-4">
                {/* Sidebar */}
                <aside className="md:col-span-1 bg-blue-50 shadow-md rounded-lg p-6">
                    <nav className="flex flex-col space-y-4">
                        <button
                            onClick={showRegister}
                            className={`text-left px-4 py-3 rounded-lg transition-all ${
                                isRegisterVisible
                                    ? "bg-blue-600 text-white font-semibold"
                                    : "bg-white text-blue-600 hover:bg-blue-100"
                            }`}
                        >
                            Register a Candidate
                        </button>
                        <button
                            onClick={showVoteCount}
                            className={`text-left px-4 py-3 rounded-lg transition-all ${
                                isVoteCountVisible
                                    ? "bg-blue-600 text-white font-semibold"
                                    : "bg-white text-blue-600 hover:bg-blue-100"
                            }`}
                        >
                            View Vote Counts
                        </button>
                    </nav>
                </aside>

                {/* Main Section */}
                <main className="md:col-span-2 bg-white shadow-md rounded-lg p-6">
                    {isRegisterVisible && (
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                                Register a New Candidate
                            </h2>
                            <RegisterCand />
                        </section>
                    )}
                    {isVoteCountVisible && (
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                                Vote Count Summary
                            </h2>
                            <VoteCount />
                        </section>
                    )}
                </main>
            </div>

            {/* Footer */}
            <footer className="bg-blue-600 text-white py-4 mt-6">
                <p className="text-center text-sm">
                    © {new Date().getFullYear()} Voter Admin Portal. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default AdminHome;
