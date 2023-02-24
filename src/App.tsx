import React, {useState} from 'react';
import './App.css';
import s from './components/App.module.css'
import {Button} from "./components/Button";

function App() {
    const [value, setValue] = useState(0)



    const onIncHandler = () =>{
        setValue(value+1)

    }

    const onResetHandler = () =>{
     setValue(0)
    }


   return (
      <div className={s.app}>
    <div className={s.container}>

   <div className={s.indecator + (value >= 5 ? " " + s.red : "")}>
    <div className={s.input}> {value }</div>
       <div>
           <Button  name={'inc'} callback={()=>{onIncHandler()}} disabled={value >=5 }/>
           <Button name={'reset'} callback={()=>{onResetHandler()}} />
     </div>
   </div>

    </div>

      </div>
  );
}

export default App;
