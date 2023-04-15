import { Fragment } from "react"
import "./Model.css"
import  ReactDOM  from "react-dom"
const Backdrop = (props) => {

    return (
        <div className="backdrop"/>
    )

}

const ModelOverlay =( props) => {
    return (
        <div className="modal">
            <div className="content">{props.children}</div>
        </div>
    )

}
const PortalElement = document.getElementById('overlays')
const Model =( props )=>{

   return( <Fragment>
     {ReactDOM.createPortal(<Backdrop />, PortalElement)}
     {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, PortalElement)}
    </Fragment>)

}
export default Model