import './menuitem.css';

function Menuitem(props) {
    const {text, onClick} = props;

    return (
      <div className="menuitem-container" onClick={onClick}>
        <div className="menuitem-text">{text}</div>
      </div>
    );
}
  
export default Menuitem;