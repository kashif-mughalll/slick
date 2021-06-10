import React ,{useState} from 'react'
import Close from '../../Assets/icons/CloseFilled.svg'
import { connect } from 'react-redux';
import {HideModal} from '../../Redux/Modal/ModalActions'



var ModelForm = ({update,link,_id,HideModal,saveBtnHandler})=> {
    const [Link, setLink] = useState(link ? link : "");

    return (
        <div className="product-form">
            <div className="product-form-top">
                <h4 className="product-form-top-label"> {update ? 'Update Existing Banner' : 'Add New Banner' } </h4>
                <img className="product-form-close-btn" alt="" src={Close} onClick={HideModal} />
            </div>

            <h4 className="product-form-label" > {update ? '' : 'ENTER '}IMAGE URL </h4>
            <input value={Link} className="input-box-style" placeholder="Enter image url here ..." 
                type="text" onChange={(e)=> setLink(e.target.value)}/>


            <div className="flex"> <button className="save-btn-product-form" onClick={
                ()=>{
                    if(isEmpty(Link)){
                        alert('Please input appropriate url to continue...');
                        return;
                    }
                    var Obj = {
                        link : Link,
                    }
                    if(_id) Obj._id = _id;
                    saveBtnHandler(Obj);
                }
            } > Save </button> </div>
        </div>
    )
}

let actions = {
    HideModal,
}

export default connect(null,actions)(ModelForm)


function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}