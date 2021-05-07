import './sidebar.css';

import Menuitem from "./../menuitem/menuitem"

function Sidebar() {
    return (
      <div className="sidebar-container">
        <Menuitem text="Component 1"/>
        <Menuitem text="Component 2"/>
        <Menuitem text="Component 3"/>
      </div>
    );
}
  
  export default Sidebar;