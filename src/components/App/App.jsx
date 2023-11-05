import styles from './App.module.css';
import Wrapper from '../Wrapper/Wrapper';
import { useState } from 'react';




function App() {


  const [inputDate,setInputDate] = useState({days: '', months: '', years: ''});
  const [age,setAge] = useState({years: '- -',months: '- -',days: '- -'});
  const [required,setRequired] = useState({rdays: false, rmonths: false, ryears: false});
  const [valid,setValid] = useState({vdays: true, vmonths: true, vyears: true})



  const change = (e) => {

    switch(e.target.dataset.input) {

        case 'DAY':
          if(e.target.value === '' || (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 31)){

            setValid(prev =>({
              ...prev,
              vdays: true
            }));

            setInputDate(prevInputDate => ({
              ...prevInputDate,
              days: e.target.value, 
            }));

          }
          else {

            setInputDate(prevInputDate => ({
              ...prevInputDate,
              days: '', 
            }));

            setValid(prev =>({
              ...prev,
              vdays: false
            }));

            setRequired(prev =>({
              ...prev,
              rdays:   false,
            }));
            

          }
          
          break;


        case 'MONTH':
          if(e.target.value === '' || parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 12){  

            setValid(prev =>({
              ...prev,
              vmonths: true
            }));

            setInputDate(prevInputDate => ({
              ...prevInputDate,
              months: e.target.value, 
            }));
          }
          else{
            setInputDate(prevInputDate => ({
              ...prevInputDate,
              months: '',
            }));

            setValid(prev =>({
              ...prev,
              vmonths: false
            }));

            setRequired(prev =>({
              ...prev,
              rmonths:  false,
            }));
          }
          break;


        case 'YEAR':
          if(e.target.value === '' || parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= new Date().getFullYear()){       

            setValid(prev =>({
              ...prev,
              vyears: true
            }));

            setInputDate(prevInputDate => ({
              ...prevInputDate,
              years: e.target.value, 
            }));
          }
          else {
            
            setInputDate(prevInputDate => ({
              ...prevInputDate,
              years: '', 
            }));

            setValid(prev =>({
              ...prev,
              vyears: false
            }));

            setRequired(prev =>({
              ...prev,
              ryears:   false,
            }));
          }
          
          break;
    
    }
  }




  const calculateAge = () => {

    const currentDate = new Date();
    const {days,months,years} = inputDate;

    setValid(prev =>({
      ...prev,
      vdays:   true,
      vmonths: true,
      vyears:  true 
    }));

    if(days === '' || months === '' || years === ''){
        console.log("requierd");
        setRequired(prev =>({
          ...prev,
          rdays:  ! days   ? true : false,
          rmonths:! months ? true : false,
          ryears: ! years  ? true : false
        }));
        setAge(prev =>({
          ...prev,
          years: '- -',
          months: '- -',
          days:  '- -'
        }));
        return;
    } 

    setRequired(prev =>({
      ...prev,
      rdays:   false,
      rmonths: false,
      ryears:  false
    }));

    
    const cyears = currentDate.getFullYear();
    const cmonths = currentDate.getMonth() + 1;
    const cdays = currentDate.getDate(); 

    const ageYears = cyears - parseInt(years);
    const ageMonths = cmonths > parseInt(months) ?  cmonths - parseInt(months) : parseInt(months) - cmonths;
    const ageDays = cdays > parseInt(days) ? cdays - parseInt(days) : parseInt(days) - cdays;

    setAge(prev => ({
      ...prev,
      years: ageYears.toString(),
      months: ageMonths.toString(),
      days:  ageDays.toString()
    }));

  }


  console.log(inputDate);
 /*  console.log(age); */
  console.log(required)
  console.log(valid)



  return (
    <div className={styles.container}>
        <Wrapper  
              change = {change} 
              calculateAge = {calculateAge} 
              age = {age}
              required = {required}
              valid = {valid}
              />
    </div>
  )
}

export default App
