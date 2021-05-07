import './sidebar.css';

import Menuitem from "./../menuitem/menuitem"

function Sidebar(props) {
    const {setComponent} = props;
    return (
      <div className="sidebar-container">
        <Menuitem text="Component 1" onClick={() => setComponent(1)}/>
        <Menuitem text="Component 2" setComponent={setComponent}/>
        <Menuitem text="Component 3" setComponent={setComponent}/>
      </div>
    );
}
  
  export default Sidebar;