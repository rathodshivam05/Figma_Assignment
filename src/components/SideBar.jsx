
import React, { useState } from 'react';
import Icons from './Icons';

const SideBar = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    return (
        <div onClick={handleShow} className="d-flex flex-column shadow-sm gap-3 align-items-start justify-content-start hover_blue">
            {<Icons />}
        </div>
    );
}

export default SideBar;