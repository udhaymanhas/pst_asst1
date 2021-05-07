import './contentbody.css';

import Component1 from "./../component1/component1"
import Component2 from "./../component2/component2"
import Component3 from "./../component3/component3"

function ContentBody(props) {
    // const {component} = props;
    // if (component === 1) {
    //     return <Component1/>;
    // } else if (component === 2) {
    //     return <Component2/>;
    // } else if (component === 3) {
    //     return <Component3/>;
    // } else 
    //     return <Component1/>;
    return(
        <div className="contentbody-container">
            content body
        </div>
    )
}
  
  export default ContentBody;