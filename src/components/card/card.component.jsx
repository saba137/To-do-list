import React, { Component } from 'react';
import './card.styles.css';


export const Cards = (props) =>{
  
    
    return(
       
    <div className = 'card-container' style ={{ alignItems: 'center'}}>
        <h3>{props.task.title}</h3>
        <p>{props.task.desc}</p>
        <div className = "row" >   
            {props.hasPreviousButton && <button className = "btn btn-secondary btn-sm m-2" style ={{marginRight : '10px'}} onClick = {()=>props.handleBack(props.task)}>Back</button> }
            {props.hasNextButton && <button className = "btn btn-secondary btn-sm m-2" onClick = {()=>props.handleNext(props.task)}>Next</button> } 
        </div>
    </div>
    
    );
}