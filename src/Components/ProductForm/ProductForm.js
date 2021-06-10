import React ,{useEffect,useState} from 'react'
import './ProductForm.css'
import Close from '../../Assets/icons/CloseFilled.svg'
import Coin from '../../Assets/icons/Coin.svg'
import axios from 'axios';
import { connect } from 'react-redux';
import {HideModal} from '../../Redux/Modal/ModalActions'


var ProductForm = ({update,imageURL,category,price,productName,_id,saveBtnHandler,HideModal})=> {
    const [Categories, setCategories] = useState([]);
    const [URL, SetURL] = useState(imageURL ? imageURL : '');
    const [Name, SetName] = useState(productName ? productName : '');
    const [Category, SetCategory] = useState(category ? category : '');
    const [Price, SetPrice] = useState(price ? price : '');

    useEffect(async () => {
        try{
            console.log("Fetching all categories data from api");
            var Obj = await axios.get("https://internship-slick-api.herokuapp.com/api/products/categories");
            var Data = Obj.data.data;
            Data.unshift({
                _id: "00",
                name: "Please select any category ..."
            });
            setCategories(Data);
            if(update) SetCategory(category);
        }
        catch(error) { console.error(error) }        
    }, [])


    return (
        <div className="product-form">

            <div className="product-form-top">
                <h4 className="product-form-top-label"> {update ? 'Update Existing Product' : 'Add New Product' } </h4>
                <img className="product-form-close-btn" alt="" src={Close} onClick={HideModal} />
            </div>

            <h4 className="product-form-label" > {update ? '' : 'ENTER '}IMAGE URL </h4>
            <input value={URL} className="input-box-style" placeholder="Enter image url here ..." 
                type="text" onChange={(e)=> SetURL(e.target.value)}/>
            
            <h4 className="product-form-label" >{update ? '' : 'SELECT '}CATEGORY</h4>            
            <div className="select-box-wrapper">
                <select value={Category} className="select-box" onChange={(e)=> SetCategory(e.target.value)}>                    
                    {Categories.map(element => (
                        <option key={element._id} value={element._id}> {element.name} </option>
                    ))}
                </select>
            </div>

            <h4 className="product-form-label" >PRODUCT NAME</h4>
            <input value={Name} className="input-box-style" maxLength="25" placeholder="Enter product name ..." 
                type="text" onChange={(e)=> SetName(e.target.value)} />
            
            <h4 className="product-form-label" >PRICE</h4>
            <div className="coin-wrapper-2">
                <input value={Price} className="input-box-style extra-padding" min="0" max="999999" placeholder="Price of product ..." type="number" onChange={(e)=> SetPrice(e.target.value)} />
                <img className="coin-class-2" alt="" src={Coin} />
            </div>
            <div className="flex"> <button className="save-btn-product-form" onClick={
                ()=>{

                    if(isEmpty(Name) || isEmpty(Category) || isEmpty(URL) || isEmpty(Price) || Category == "00"){
                        alert("Looks like input fields are still empty or formated badly try inputing correct data")
                        return;
                    }
                    var obj = {
                        name : Name,
                        category : Category,
                        image : URL,
                        price : Price,
                    }
                    if(update) obj._id = _id;
                    saveBtnHandler(obj);
                }
            } > Save </button> </div>
        </div>
    )
}

function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

let actions = {
    HideModal,
}

export default connect(null,actions)(ProductForm)













































































































































































































































































































