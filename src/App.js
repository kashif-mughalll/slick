import './App.css';
import Container2 from './Components/Container2/Container2';
import SideBar from './Components/SideBar/SideBar'
import TestPage from './Pages/TestPage/TestPage';

var App = ()=> {
  return (
    <div className="container">
      <SideBar/>
      <Container2/>
    </div>
  );
}

export default App;
