import './contentbody.css';

function ContentBody(props) {
    return(
        <div style={{padding:20, width:'80%'}}>
            {props.children}
        </div>
    )
}
  
  export default ContentBody;