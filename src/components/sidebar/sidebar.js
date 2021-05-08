import './sidebar.css';

import Menuitem from "../menuitem/Menuitem"

function Sidebar(props) {
    const {menuItems, removeMenuItem, setComponentId, componentId} = props;
    return (
      <div className="sidebar-container">
        {menuItems.map((item, index) => 
          <Menuitem 
            key={index} 
            index={index} 
            text={item.text} 
            onClick={() => setComponentId(index+1)} 
            removeMenuItem={() => removeMenuItem(item.id)}
            componentId={componentId}
          />
        )}
      </div>
    );
}
  
  export default Sidebar;