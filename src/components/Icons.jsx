import { MdOutlineHome, MdOutlinePaid, MdOutlineInsights, MdOutlinePeople, MdOutlineSettings, MdOutlineAccountBalanceWallet, MdOutlinePolicy, MdOutlineLiveHelp, MdOutlineLogout, MdOutlineStorefront, MdOutlineExplore, MdOutlineFormatShapes } from "react-icons/md";
import Nav from 'react-bootstrap/Nav';



const Icons = () => {
    return (
        <>
            <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/b9/6f/1c/b96f1c4a-06e7-25d6-9399-2dde1a09ef35/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/256x256bb.jpg" alt="" height="30px" width="30px" />
            <Nav variant="pills" className="flex-column w-25">
                <Nav.Link eventKey="a"><MdOutlineHome className="icon" /></Nav.Link>
                <Nav.Link eventKey="b"><MdOutlinePaid className="icon" /></Nav.Link>
                <Nav.Link eventKey="c"><MdOutlineInsights className="icon" /></Nav.Link>
                <Nav.Link eventKey="d"><MdOutlinePeople className="icon" /></Nav.Link>
                <Nav.Link eventKey="e"><MdOutlineSettings className="icon" /></Nav.Link>
                <Nav.Link eventKey="f"><MdOutlineAccountBalanceWallet className="icon" /></Nav.Link>
                <Nav.Link eventKey="g"><MdOutlinePolicy className="icon" /></Nav.Link>
                <Nav.Link eventKey="h"><MdOutlineLiveHelp className="icon" /></Nav.Link>
                <Nav.Link eventKey="i"><MdOutlineLogout className="icon" /></Nav.Link>
                <Nav.Link eventKey="j"><MdOutlineStorefront className="icon" /></Nav.Link>
                <Nav.Link eventKey="k"><MdOutlineExplore className="icon" /></Nav.Link>
                <Nav.Link eventKey="l"><MdOutlineFormatShapes className="icon" /></Nav.Link>
            </Nav>
        </>
    )
}

export default Icons
