import logo from './logo.svg';
import './App.css';
import FormComponent from './components/form/FormComponent';
import Contacts from './components/contacts/Contacts';
import { useState } from 'react';
import {addInfo} from './utils/functions'
const initialalues={username:"",phoneNumber:"",gender:""}
function App() {
  const [info,setInfo]=useState(initialalues)
  const handleFormSubmit=(e)=>{
    e.preventDefault();
   addInfo(info);
  }



  return (
    <div className="App">
    <FormComponent info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit}/>
    <Contacts/>
    </div>
  );
}

export default App;
