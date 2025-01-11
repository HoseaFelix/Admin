import React, { useState } from 'react';
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
        <div className="bg-white h-dvh w-dvw">
            <h1 className="special-font text-4xl font-zentry mx-auto w-max mt-10">
                Welcome to the Voters Admin Page
            </h1>
            <div className="grid h-full w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pt-10">
                {/* Sidebar */}
                <div className="h-full w-full flex flex-col pl-2">
                    <p
                        onClick={showRegister}
                        className="font-general text-xl cursor-pointer"
                    >
                        Register Candidate
                    </p>
                    <p
                        onClick={showVoteCount}
                        className="font-general text-xl cursor-pointer"
                    >
                        Check Vote Count
                    </p>
                </div>

                {/* Main Content */}
                <div className="md:col-span-2 lg:col-span-3">
                    {isRegisterVisible && <RegisterCand />}
                    {isVoteCountVisible && <VoteCount />}
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
