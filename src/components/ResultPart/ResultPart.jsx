import styles from './ResultPart.module.css';

const ResultPart = ({age}) =>{

    const {years,months,days} = age;

    return(
        <div className = {styles.results} >
            <div><span>{years}</span> years</div>
            <div><span>{months}</span> months</div>
            <div><span>{days}</span> days</div> 
        </div>
    )
}

export default  ResultPart;