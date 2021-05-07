import './sidebar.css';

import Menuitem from "./../menuitem/menuitem"

function Sidebar(props) {
    const {setComponent} = props;
    return (
      <div className="sidebar-container">
        <Menuitem text="Component 1" onClick={() => setComponent(1)}/>
        <Menuitem text="Component 2" onClick={() => setComponent(2)}/>
        <Menuitem text="Component 3" onClick={() => setComponent(3)}/>
      </div>
    );
}
  
  export default Sidebar;