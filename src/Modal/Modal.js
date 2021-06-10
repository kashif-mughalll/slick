import { connect } from 'react-redux'
import {HideModal} from '../Redux/Modal/ModalActions'
import './Model.css'

var Modal = ({modal,HideModal})=> {
    let ModalComponent = modal.component;
    return (
        <div className="model flex" onClick={(e)=>{
            if(e.target.classList.contains("model")) HideModal();
        }}>
            {ModalComponent ? <ModalComponent/> : null}
        </div>
    )
}

var mapState = (state) => {
    return {
      modal : state.modal
    }
}

var actions = {
    HideModal
}

export default connect(mapState,actions)(Modal);
