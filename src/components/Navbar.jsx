import React from "react";

const Navbar = () => {
    return (
        <div className="main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#264653] py-4 shadow-md sticky top-0">
            <div className="left flex items-center space-x-3 justify-center">
                <img className="w-11"
                    src="https://bigaircinema.com/wp-content/uploads/2018/08/movies-circle.png"
                    alt="img"
                />
                <h2 className="font-bold text-2xl text-white">MovieWorld</h2>
            </div>
            <div className="right">
                <ul className="flex space-x-4 font-bold text-1xl text-white justify-center">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
