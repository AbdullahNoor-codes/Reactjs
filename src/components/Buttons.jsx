/* eslint-disable react/prop-types */
import classes from "./Buttons.module.css";

export default function Buttons(props) {

  function insertValHandler(){
    props.InputValueHandler(props.name)
    
  }
  function clearValHandler(){
    props.clearInputHandler(props.name)
    
  }
  return (
    <>
      <button className={`${classes.btn} ${props.cln === 'clearbtn'? classes.cl:""}`}  onClick={props.cln === 'clearbtn'? clearValHandler: insertValHandler}>{props.name}</button>
    </>
  );
}
