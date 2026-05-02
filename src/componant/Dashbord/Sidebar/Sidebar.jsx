import style from "./Sidebar.module.css";

function Sidebar() {

    const links = [
        {icon: "fa-chart-line", title:"Status" },
        {icon: "fa-users", title:"User Management" },
        {icon: "fa-building", title:"Projects Management" },
        {icon: "fa-building", title:"Developers Management" },
        {icon: "fa-globe", title:"Website CMS" },
        {icon: "fa-message", title:"Live Chat" },
    ];

  return (
    <aside className={`${style.sidebar} min-vh-100 py-4`}>
        <div>
            Dashboard
        </div>
          <nav>
              {links.map((item, index) => (
                  <div className="navItem" key={index}>
                      <i className={`fa-solid ${item.icon}`}></i>
                      <span className="title">{item.title}</span>
                  </div>
              ))}

          </nav>
    </aside>
  );
}

export default Sidebar;