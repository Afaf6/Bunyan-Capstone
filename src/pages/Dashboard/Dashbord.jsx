import { useState } from "react"
import {Routes, Route} from 'react-router-dom';
import Navbar from "../../componant/Dashbord/Navbar/Navbar";
import Footer from "../../componant/Dashbord/Footer/Footer";
import Sidebar from "../../componant/Dashbord/Sidebar/Sidebar";
import HomeDashboard from "./HomeDashboard";
import Users from "./Users";
import Projects from "./Projects";
import Developers from "./Developers";
import Website from "./CMS";
import LiveChat from "./LiveChat";
import CMS from './CMS';
import TableDashboard from "../../componant/ui/TableDashboard/TableDashboard";
import FormDashboard from "../../componant/ui/FormDashboard/FormDashboard"


function Dashbord() {
    const [typingSection, setTypingSection] = useState("");

    return (
        <>
        <Navbar adminName="UserName"/>
        <div className="d-flex">
            <Sidebar typingSection={typingSection}/>
            <main className="flex-grow-1">
                 <Routes>
                    <Route path= "/" element={<HomeDashboard/>}/>

                    
                       <Route path= "/users" element={<Users/>}>
                       <Route index element={<TableDashboard title="Users" linkText="Add New User"/>}/>
                       <Route path="add" element={<FormDashboard onTyping={(val) => setTypingSection(val ? "users" : "")}/>} />
                       </Route>

                    <Route path= "/projects" element={<Projects/>}>
                     <Route index element={<TableDashboard title="Project" linkText="Add New Project"/>}/>
                       <Route path="add" element={<FormDashboard onTyping={(val) => setTypingSection(val ? "projects" : "")}/>} />
                       </Route>

                    <Route path= "/developers" element={<Developers/>}>
                     <Route index element={<TableDashboard title="Developers" linkText="Add New Developers"/>}/>
                       <Route path="add" element={<FormDashboard onTyping={(val) => setTypingSection(val ? "developers" : "")}/>} />
                       </Route>

                    <Route path= "/website" element={<CMS/>}/>
                    <Route path= "/chat" element={<LiveChat/>}/>
                 </Routes>
            </main>
        </div>
        <Footer/>
        </>
    );
}

export default Dashbord;