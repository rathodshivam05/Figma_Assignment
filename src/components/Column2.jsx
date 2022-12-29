import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsTruck } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Column2 = () => {
    return (
        <>
            <Row>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="a">
                            Home
                        </Tab.Pane>
                        <Tab.Pane eventKey="b">
                            Payment
                        </Tab.Pane>
                        <Tab.Pane eventKey="c">
                            Dashboard Insights
                        </Tab.Pane>
                        <Tab.Pane eventKey="d">
                            Peoples
                        </Tab.Pane>
                        <Tab.Pane eventKey="e">

                            <h4 ClassName='fw-bold mt-5'>Setting</h4>
                            <Dropdown className='mt-5'>
                                <Dropdown.Toggle variant="none" id="dropdown-basic">
                                    <BsTruck /> Apps and Integrations
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#"><BsTruck /> Sales channel Apps</Dropdown.Item>
                                    <Dropdown.Item href="#"><BsTruck /> Shipping Apps</Dropdown.Item>
                                    <Dropdown.Item href="#"><BsTruck /> POS Apps</Dropdown.Item>
                                    <Dropdown.Item href="#"><BsTruck /> ERP Apps</Dropdown.Item>
                                    <Dropdown.Item href="#"><BsTruck /> SMS</Dropdown.Item>
                                    <Dropdown.Item href="#"><BsTruck /> Payments</Dropdown.Item>
                                    <Dropdown.Item href="#"><BsTruck /> WhatsApp Business</Dropdown.Item>
                                    <Dropdown.Item href="#"><BsTruck /> Other Apps</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" id="dropdown-basic">
                                    <BsTruck />  Hub Management
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#"><BsTruck /> Hubs</Dropdown.Item>
                                    <Dropdown.Item href="#"><BsTruck /> Locations</Dropdown.Item>
                                    <Dropdown.Item href="#"><BsTruck /> Locations</Dropdown.Item>
                                    <Dropdown.Item href="#"><BsTruck /> Bins</Dropdown.Item>
                                    <Dropdown.Item href="#"><BsTruck /> Consolidations area</Dropdown.Item>
                                    <Dropdown.Item href="#"><BsTruck /> Stations</Dropdown.Item>
                                    <Dropdown.Item href="#"><BsTruck /> Hub Settings</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                        </Tab.Pane>
                        <Tab.Pane eventKey="f">
                            Account
                        </Tab.Pane>
                        <Tab.Pane eventKey="g">
                            Policy
                        </Tab.Pane>
                        <Tab.Pane eventKey="h">
                            Help and support
                        </Tab.Pane>
                        <Tab.Pane eventKey="i">
                            Logout
                        </Tab.Pane>
                        <Tab.Pane eventKey="j">
                            store
                        </Tab.Pane>
                        <Tab.Pane eventKey="k">
                            Explore
                        </Tab.Pane>
                        <Tab.Pane eventKey="l">
                            Shapes
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>

        </>
    );
}


export default Column2
