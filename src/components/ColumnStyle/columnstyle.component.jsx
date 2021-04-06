import React from 'react';
import './column.styles.css';
import {Cards} from '../card/card.component';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ColumnStyle =(props, handleNext, handleBack) => {
   return(
   
 <div className = 'col1' style ={{ marginLeft : '40px', backgroundColor : 'white' , marginTop: '10px'}}>
     <h1>{props.title}</h1>
    {props.task.map(task => task.count === props.column && 
    (<Cards 
      hasNextButton = {props.hasNextButton} 
      hasPreviousButton = {props.hasPreviousButton}
      task = {task}  
      handleNext = {props.handleNext} 
      handleBack = {props.handleBack}
      />
    ))}
   
    
       </div>
   
   );

}