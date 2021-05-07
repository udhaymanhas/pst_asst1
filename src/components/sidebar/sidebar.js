import './sidebar.css';

import Menuitem from "./../menuitem/menuitem"

function Sidebar(props) {
    const {setComponent} = props;
    return (
      <div className="sidebar-container">
        <Menuitem text="Component 1" setComponent={() => setComponent(1)}/>
        <Menuitem text="Component 2" setComponent={() => setComponent(2)}/>
        <Menuitem text="Component 3" setComponent={() => setComponent(3)}/>
      </div>
    );
}
  
  export default Sidebar;