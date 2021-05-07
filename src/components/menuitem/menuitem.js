import './menuitem.css';

function Menuitem(props) {
    const {text, setComponent} = props;

    return (
      <div className="menuitem-container" onClick={setComponent}>
        <div className="menuitem-text">{text}</div>
      </div>
    );
}
  
export default Menuitem;