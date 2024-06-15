import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Comment1 = () => {
    const [xs,setx] = useState()
    let x = useNavigate();

    useEffect(() => {
        x(xs)
    },[xs])
    
    return (
        <div>
            {/* <button onClick={() => {
                setx(1)
            }}>Add id</button> */}
        </div>
    );
}

export default Comment1;
