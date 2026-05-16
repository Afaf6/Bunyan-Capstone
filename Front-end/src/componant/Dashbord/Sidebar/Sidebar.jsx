import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

function Sidebar({ typingSection }) {

    const links = [
        {icon: "fa-chart-line", title:"Status", path: "/" },
        {icon: "fa-users", title:"User Management", path: "/users", section: "users" },
        {icon: "fa-building", title:"Projects Management", path: "/projects", section: "projects" },
        {icon: "fa-building", title:"Developers Management", path: "/developers", section: "developers" },
        {icon: "fa-globe", title:"Website CMS", path: "/website" },
        {icon: "fa-message", title:"Live Chat", path: "/chat" },
    ];

  return (
    <aside className={`${style.sidebar} min-vh-100 py-4`}>
        <div className= {`${style.title} fw-smiblod px-3 fs-4 mb-2`}>
            Dashboard
        </div>
          <nav>
              {links.map((item, index) => (
                  <NavLink 
                  to={item.path}
                  className= {`${style.navItem} d-flex align-items-center gap-3`} key={index}>
                      <i className={`fa-solid ${item.icon}`}></i>
                      <span className="fs-5">{item.title}</span>

                      {typingSection === item.section && (
                        <span 
                          className={style.dot}
                        >
                        </span>
                      )}
                  </NavLink>
              ))}

          </nav>
    </aside>
  );
}

export default Sidebar;