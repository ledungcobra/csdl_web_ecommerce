import React from 'react';
import PropTypes from 'prop-types';

const Message = ({show, message, variant}) => {
    return (
        <div>
            {show && <span className={variant}>{message}</span>}
        </div>
    );
};


export default Message;
