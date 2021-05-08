import './menuitem.css';

function Menuitem(props) {
    const {text, onClick, removeMenuItem, index, componentId} = props;
    return (
      <div className="menu-item-container">
        <div className={`menu-item-button ${componentId === index+1 ? "active" : ""}`} onClick={onClick}>
          <div className="menu-item-button-text">{text}</div>
        </div>
        <div className="menu-item-remove-button" onClick={removeMenuItem}>
          <div className="menu-item-remove-button-text">X</div>
        </div>
      </div>
    );
}
  
export default Menuitem;