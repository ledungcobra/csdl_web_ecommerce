import React from 'react';

const Loader = ({loading}) => {
    return (
        <div>
            {loading && (
                <div className="spinner-grow text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )}
        </div>

    );
};

export default Loader;
