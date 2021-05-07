import './menuitem.css';

function Menuitem(props) {
    const {text} = props;
    
    return (
      <div className="menuitem-container">
        <div className="menuitem-text">{text}</div>
      </div>
    );
  }
  
  export default Menuitem;