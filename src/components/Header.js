import React from "react";

const Header = ({ handleToggeleDrakMode }) =>{
    return(
        <div className="header">
            <h1>
                Notes
            </h1>
            <button onClick={() =>
                
                handleToggeleDrakMode (
                    (previousDarkmode) => !previousDarkmode
                )
            } 

                className="save">
                Toggle Mode
            </button>
        </div>
    );
};

export default Header;