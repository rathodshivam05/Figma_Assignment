import Column2 from './components/Column2';
import Header from './components/Navbar';
import SideBar from './components/SideBar';
import Tab from 'react-bootstrap/Tab';

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid mt-1 p-0">
        <div className="row m-0 p-0">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="col-1 m-0 p-0" style={{ width: "5.5%" }}>
              {<SideBar />}
            </div>
            <div className="col-3 border shadow-sm">
              <Column2 />
            </div>
          </Tab.Container>
          <div className="col-8">
            Column
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
