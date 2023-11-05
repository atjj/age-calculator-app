import InputPart from '../InputPart/InputPart';
import ResultPart from '../ResultPart/ResultPart';


import styles from './Wrapper.module.css';


const Wrapper = ({change,calculateAge,age,required,valid}) => {
    
    return(
        <div className={styles.wrapper}>
            <InputPart  change = {change} calculateAge = {calculateAge} required = {required} valid = {valid}/>
            <ResultPart age = {age}/>
        </div>
    )
}

export default Wrapper;