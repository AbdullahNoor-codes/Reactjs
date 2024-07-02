import classes from './Input.module.css';
export default function Input(props){
    return (
        <>
        <div className={classes.inputcontainer}>
        <input type="text" className={classes.inp} value={props.val} disabled/>
        </div>
        </>
    );
}