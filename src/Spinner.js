import React from 'react';
import spinner from './spinner.gif'

const Spinner = () => {
    return (
        <div className="text-center">
            <img src={spinner}
                style={{ width: "200px", margin: "40px auto", display: "block" }}
                alt="Loading..." />
        </div>
    );
};

export default Spinner;