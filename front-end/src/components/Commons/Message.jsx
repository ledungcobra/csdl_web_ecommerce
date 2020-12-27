import React from 'react';
import PropTypes from 'prop-types';

const Message = ({show, message, variant,ref}) => {
    return (
        <div>
            {show && <div style={{textAlign:"center"}} className={`${variant} py-5`}>{message}</div>}
        </div>
    );
};


export default Message;
