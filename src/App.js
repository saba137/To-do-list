import React, {  Component } from 'react';
import './App.css';
import {ColumnStyle} from './components/ColumnStyle/columnstyle.component';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
    constructor(){
        super();
        this.state ={
            task : [
              {
                title:"Task 1",
                desc:"Task for Sign Up Page",
                count: 0        
               },
              {
                title:"Task 2",
                desc:"Task for Home Page",
                count: 0        
               },
              {
                title:"Task 3",
                desc:"Task for Profile Page",
                count: 0      
                }
           ]
          };
        };
          
         handleNext = (selectedCol) => {
       
            const _count = selectedCol.count !== 2 ? selectedCol.count + 1 : 0;
            this.setState({task: this.state.task.map(_task => _task.title === selectedCol.title ?
            {..._task, count: _count}: _task)});  
                
            };
        handleBack = (selectedCol) => {
            const _count = selectedCol.count !== 0 ? selectedCol.count - 1 : 2 ;
            this.setState({task: this.state.task.map(_task => _task.title === selectedCol.title ? 
            {..._task, count : _count} : _task) });
        
        }; 
        render(){
            return(
                <div className = "row1" >
                    <h3  style = {{color : 'white', marginLeft : '10px'}}>Trello Board</h3>
                
                    <ColumnStyle
                        task={this.state.task}
                        handleNext = {(count)=>this.handleNext(count)}
                        title='To-do'
                        column={0}
                        hasNextButton={true}
                        hasPreviousButton={false}
                    />
                    <ColumnStyle
                        task={this.state.task}
                        handleNext = {(count)=>this.handleNext(count)}
                        handleBack = {(count)=>this.handleBack(count)}
                        title='In Process'
                        column={1}
                        hasNextButton={true}
                        hasPreviousButton={true}
                    />
                    <ColumnStyle
                        task={this.state.task}
                        handleBack = {(count)=>this.handleBack(count)}
                        title='Done'
                        column={2}
                        hasNextButton={false}
                        hasPreviousButton={true}
                    />
                        
                </div>
            );
            }
    }
export default App;