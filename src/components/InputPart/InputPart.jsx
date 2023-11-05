import styles from './InputPart.module.css';
import img from '../../assets/images/icon-arrow.svg';
import cn from 'classnames'
const InputPart = ({change,calculateAge,required,valid}) =>{

    const rmsg = <label className = {styles.error}>This field is required</label>;

    const valid_day = <label className = {styles.error}>Must be a valid day</label>
    const valid_month = <label className = {styles.error}>Must be a valid month</label>
    const valid_year = <label className = {styles.error}>Must be in the past</label>



    return(
        <>
            <div className={styles.inputsWrapper}>
                <div className={styles.inputField}>
                    <label className = {cn((required.rdays || !valid.vdays) && styles.textError)} >DAY</label>
                    <input className = {cn(styles.input, (required.rdays || !valid.vdays) && styles.inputError)} 
                        type='text' 
                        placeholder= 'DD'  
                        data-input = 'DAY'
                        onChange={(e) => change(e)}
                        />
                    {required.rdays && rmsg}
                    {!valid.vdays && valid_day}
                </div>

                <div className={styles.inputField}>
                    <label className = {cn((required.rmonths || !valid.vmonths) && styles.textError )} >MONTH</label>
                    <input className = {cn(styles.input, (required.rmonths || !valid.vmonths) && styles.inputError)} 
                        type='text' 
                        placeholder = "MM"  
                        data-input = 'MONTH'
                        onChange={(e) => change(e)}
                        />
                    {required.rmonths && rmsg}
                    {!valid.vmonths && valid_month}
                </div>

                <div className={styles.inputField}>
                    <label className = {cn((required.ryears || !valid.vyears) && styles.textError)} >YEAR</label>
                    <input className = {cn(styles.input, (required.ryears || !valid.vyears) && styles.inputError)} 
                            type='text' 
                            placeholder = "YYYY"  
                            data-input = 'YEAR'
                            onChange={(e) => change(e)}
                            />
                    {required.ryears && rmsg}
                    {!valid.vyears && valid_year}
                </div>

            </div>    

            <div className={styles.btnWrapper}>
                <div className={styles.line}></div>
                <button className = {styles.btn} onClick={calculateAge}>
                    <img src ={img}/>
                </button>
            </div>


        </>
    )
}


export default InputPart;