import {Fragment} from "react";
import styles from './Modal.module.css';
import  ReactDOM from "react-dom"; 

 const BackDrop = (props) => {
  return  <div className={styles.backdrop} onClick = {props.onClose}/>
 }
 const ModalOverlay = props => {
   return( <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>
   )
 }

 const overlay = document.getElementById('overlays');
 const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onClose = {props.onClose}/>,overlay)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
            overlay)}
        </Fragment>
    )
}
export default Modal;