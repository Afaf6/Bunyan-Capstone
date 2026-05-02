import Navbar from "../componant/Dashbord/Navbar/Navbar";
import Footer from "../componant/Dashbord/Footer/Footer";
import Sidebar from "../componant/Dashbord/Sidebar/Sidebar";

function Dashbord() {
    return (
        <>
        <Navbar adminName="UserName"/>
        <div className="d-flex">
            <Sidebar/>
            <main className="flex-grow-1">
                 <h1>Test Dashbord</h1>
            </main>
        </div>
        <Footer/>
        </>
    );
}

export default Dashbord;