import React from 'react';

const DeviceDetail = (props) => {
    return (
        <div style={{ border: '2px solid red', margin: '5px' }}>
            <p>Price: {props.price}</p>
        </div>
    );
};

export default DeviceDetail;