import React from "react";
import Button from "./Button";

function Navbar() {
    return (
        <div className="max-w-screen-lg mx-auto py-4 flex items-center justify-between border-b-[1px] border-zinc-800">
            <div className="nav-left flex items-center">
                <img
                    src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
                    alt=""
                />
                <div className="links flex gap-8 ml-24 font-[satoshi] font-regular">
                    {["Home", "Work", "About", "", "News"].map((elem, index) =>
                        elem.length === 0 ? (
                            <span key={index} className="w-[2px] h-5 bg-zinc-800"></span>
                        ) : (
                            <a key={index} href="#" className="text-sm flex items-center gap-1">
                                {index == 1 && (
                                    <span
                                        style={{ boxShadow: "0 0 0.30em #00FF19" }}
                                        className="inline-block w-1 h-1 rounded-full bg-[#00E716]"
                                    ></span>
                                )}
                                {elem}
                            </a>
                        )
                    )}
                </div>
            </div>
            <Button title={"Start a Project"} />
        </div>
    );
}

export default Navbar;
