import './App.css';
import Container2 from './Components/Container2/Container2';
import SideBar from './Components/SideBar/SideBar'
import TestPage from './Pages/TestPage/TestPage';
import Modal from './Modal/Modal'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import {SetProducts} from './Redux/Products/ProductsActions'


var App = ({modal,SetProducts})=> {

  useEffect(() => {
    //CDM
    SetProducts();
  }, [])

  return (
    <div className="container">
      {modal.active ? <Modal/> : null}
      <SideBar/>
      <Container2/>
      {/* <TestPage/> */}
    </div>
  );
}

var mapState = (state) => {
  return {
    modal : state.modal
  }
}

var actions = {
  SetProducts
}

export default connect(mapState,actions)(App);
