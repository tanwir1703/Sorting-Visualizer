import React from 'react';
import './SortingVisualizer.css';
import { getMergeSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import { getQuickSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import { getBubbleSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import { getHeapSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import { Completed } from '../sortingAlgorithms/sortingAlgorithms.js';

const NumberOfBars = 100;

const ANIMATION_SPEED = 5;
// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            array: [], 
        };

    }




componentDidMount() { 
    this.resetArray();
}

resetArray() {
    document.getElementById("changeSize").disabled = false;
    document.getElementById("reset").disabled = false;
    const array = [];
    for(let i=0; i<50; i++)
    {
        array.push(randomNumbersBetween(5, 730));
    }
    document.getElementById("changeSpeed").value = 100;
    document.getElementById("changeSize").value = 50;
    this.setState({array});
    let a = document.getElementsByClassName("array-bar");
    for(let i=0; i<a.length ; i++)
    {
        a[i].style.width = "8px";
        a[i].style.backgroundColor = PRIMARY_COLOR;
    }
}

handleChange(evt) {
    const array = [];
    let x = parseInt(evt.target.value);
    let y = Math.round(200 / x);
    for(let i=0; i<x; i++)
    {
        array.push(randomNumbersBetween(5, 730));
        
    }
    this.setState({array});
    let a = document.getElementsByClassName("array-bar");
    for(let i=0; i< a.length; i++)
    {
        a[i].style.width = `${y}px`;
    }
    this.setState({array});
}

 mergeSort() {
    document.getElementById("changeSize").disabled = true;
    document.getElementById("reset").disabled = true;
    document.getElementById("reset").style.background = "red" ;
    const SPEED = 1000 / document.getElementById("changeSpeed").value ;
    const animations = getMergeSortAnimations(this.state.array);
    let c = 0; 
    let sum = 0;
    for(let i=0; i < animations.length; i++)
    {
        
        const arrayBars = document.getElementsByClassName('array-bar');

        if(i % 3 === 0)
        {
            sum = sum + i*SPEED;
           const [barOneIdx, barTwoIdx] = animations[i];
           const barOneStyle = arrayBars[barOneIdx].style;
           const barTwoStyle = arrayBars[barTwoIdx].style;
           setTimeout(() => {
            
            barOneStyle.backgroundColor = "red";
            barTwoStyle.backgroundColor = "purple";

           }, i*SPEED);
        } 
        else if(i % 3 ===1)
        {
            sum = sum + i*SPEED;
            const [barOneIdx, barTwoIdx] = animations[i];
           const barOneStyle = arrayBars[barOneIdx].style;
           const barTwoStyle = arrayBars[barTwoIdx].style;
           setTimeout(() => {
            
            barOneStyle.backgroundColor = PRIMARY_COLOR;
            barTwoStyle.backgroundColor = PRIMARY_COLOR;

           }, i*SPEED);
        }
        else{
            sum = sum + i*SPEED;
            setTimeout(() => {
                const [barIdx, newHeight] = animations[i];
                const barStyle = arrayBars[barIdx].style;
                barStyle.height = `${newHeight / 1.1}px` ;

            }, i*SPEED);
        
        }
    c++;
    }
    if(c === animations.length)
    {
        setTimeout(() => {
       
         document.getElementById("reset").disabled = false;   
         document.getElementById("reset").style.background = "#03a9f4" ;

         const a = document.getElementsByClassName("array-bar");
        for(let i=0;i< a.length; i++)
       {
         
        a[i].style.backgroundColor = "#03f43f";
        
        setTimeout(() =>{
            a[i].style.backgroundColor = PRIMARY_COLOR;
        }, 500);
        }
      
        }, sum *(2/animations.length) );
        
        
    }


  }

  quickSort() {
      
    document.getElementById("changeSize").disabled = true;
    document.getElementById("reset").disabled = true;
    document.getElementById("reset").style.background = "red" ;
    const SPEED = 1000 / document.getElementById("changeSpeed").value ;
    const animations = getQuickSortAnimations(this.state.array);
    let c=0;
    let sum=0;

    
    for(let i=0; i < animations.length; i++)
    {
        
        const arrayBars = document.getElementsByClassName('array-bar');

        const [barOneIdx, barTwoIdx] = animations[i];
           const barOneStyle = arrayBars[barOneIdx].style;
           const barTwoStyle = arrayBars[barTwoIdx].style;
        if(i % 3 === 0)
        { 
            sum = sum + i*SPEED;
           setTimeout(() => {
            
            barOneStyle.backgroundColor = "red";
            barTwoStyle.backgroundColor = "purple";

           }, i*SPEED);
        } 
        else if(i % 3 ===1)
        {
            sum = sum + i*SPEED;
            setTimeout(() => {

                barOneStyle.backgroundColor = PRIMARY_COLOR;
                barTwoStyle.backgroundColor = PRIMARY_COLOR;
            }, i*SPEED);
        }
        else{
            sum = sum + i*SPEED;
            setTimeout(() => {

                const tempheight = barOneStyle.height;
                barOneStyle.height = barTwoStyle.height;
                barTwoStyle.height = tempheight;

            }, i*SPEED);
        }
       
        c++;

    }
    if(c === animations.length)
    {
        setTimeout(() => {
       
         document.getElementById("reset").disabled = false;   
         document.getElementById("reset").style.background = "#03a9f4" ;

         const a = document.getElementsByClassName("array-bar");
        for(let i=0;i< a.length; i++)
       {
         
        a[i].style.backgroundColor = "#03f43f";
        
        setTimeout(() =>{
            a[i].style.backgroundColor = PRIMARY_COLOR;
        }, 500);
        }
      
        }, sum *(2/animations.length) );
        
        
    }
  }
 
  heapSort() {
    document.getElementById("changeSize").disabled = true;
    document.getElementById("reset").disabled = true;
    document.getElementById("reset").style.background = "red" ;
    document.getElementById("changeSize").disabled = true;
    const SPEED = 1000 / document.getElementById("changeSpeed").value ; 
    const animations = getHeapSortAnimations(this.state.array);

    let sum= 0;
    let c=0;

    for(let i=0; i < animations.length; i++)
    {
        
        const arrayBars = document.getElementsByClassName('array-bar');

        const [barOneIdx, barTwoIdx] = animations[i];
           const barOneStyle = arrayBars[barOneIdx].style;
           const barTwoStyle = arrayBars[barTwoIdx].style;
        if(i % 3 === 0)
        { 
            sum = sum + i*SPEED;
           setTimeout(() => {
            
            barOneStyle.backgroundColor = "red";
            barTwoStyle.backgroundColor = "purple";

           }, i*SPEED);
        } 
        else if(i % 3 ===1)
        {
            sum = sum + i*SPEED;
            setTimeout(() => {

                barOneStyle.backgroundColor = PRIMARY_COLOR;
                barTwoStyle.backgroundColor = PRIMARY_COLOR;
            }, i*SPEED);
        }
        else{
            sum = sum + i*SPEED;
            setTimeout(() => {

                const tempheight = barOneStyle.height;
                barOneStyle.height = barTwoStyle.height;
                barTwoStyle.height = tempheight;

            }, i*SPEED);
        }
        

        c++;
    }
    
    if(c === animations.length)
    {
        setTimeout(() => {
       
         document.getElementById("reset").disabled = false;   
         document.getElementById("reset").style.background = "#03a9f4" ;

         const a = document.getElementsByClassName("array-bar");
        for(let i=0;i< a.length; i++)
       {
         
        a[i].style.backgroundColor = "#03f43f";
        
        setTimeout(() =>{
            a[i].style.backgroundColor = PRIMARY_COLOR;
        }, 500);
        }
      
        }, sum *(2/animations.length) );
        
        
    }
  }


  bubbleSort() {
    document.getElementById("changeSize").disabled = true;
    document.getElementById("reset").disabled = true;
    document.getElementById("reset").style.background = "red" ;
    document.getElementById("changeSize").disabled = true;
    const SPEED = 1000 / document.getElementById("changeSpeed").value ; 
    const animations = getBubbleSortAnimations(this.state.array);

    let sum= 0;
    let c=0;

    for(let i=0; i < animations.length; i++)
    {
        
        const arrayBars = document.getElementsByClassName('array-bar');

        const [barOneIdx, barTwoIdx] = animations[i];
           const barOneStyle = arrayBars[barOneIdx].style;
           const barTwoStyle = arrayBars[barTwoIdx].style;
        if(i % 3 === 0)
        { 
            sum = sum + i*SPEED;
           setTimeout(() => {
            
            barOneStyle.backgroundColor = "red";
            barTwoStyle.backgroundColor = "purple";

           }, i*SPEED);
        } 
        else if(i % 3 ===1)
        {
            sum = sum + i*SPEED;
            setTimeout(() => {

                barOneStyle.backgroundColor = PRIMARY_COLOR;
                barTwoStyle.backgroundColor = PRIMARY_COLOR;
            }, i*SPEED);
        }
        else{
            sum = sum + i*SPEED;
            setTimeout(() => {

                const tempheight = barOneStyle.height;
                barOneStyle.height = barTwoStyle.height;
                barTwoStyle.height = tempheight;

            }, i*SPEED);
        }
        

        c++;
    }
    
    if(c === animations.length)
    {
        setTimeout(() => {
       
         document.getElementById("reset").disabled = false;   
         document.getElementById("reset").style.background = "#03a9f4" ;

         const a = document.getElementsByClassName("array-bar");
        for(let i=0;i< a.length; i++)
       {
         
        a[i].style.backgroundColor = "#03f43f";
        
        setTimeout(() =>{
            a[i].style.backgroundColor = PRIMARY_COLOR;
        }, 500);
        }
      
        }, sum *(2/animations.length) );
        
        
    }
  }

  render() {
      const {array} = this.state;
      
      return (

        <div className="array-container">
            <br></br>
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value / 1.1}px`,
                width: `${400 / array.length}px`,
              }}></div>
              
          ))}
        <br></br>
        <br></br>
        <div className="toolbar">
        <input
          id="changeSpeed"
          type="range"
          min="5"
          max="200"
          style={{background: "blue", color: "blue"}}
          onChange={this.handleSpeed}
          />
        <input
          id="changeSize"
          type="range"
          min="5"
          max="100"
          style={{background: "blue", color: "blue"}}
          onChange={this.handleChange}
          />
          <button id="reset" onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <button onClick={() => this.quickSort()}>Quick Sort</button>
          <button onClick={() => this.heapSort()}>Heap Sort</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        </div>
        </div>
      );
    }
  }
  

function randomNumbersBetween(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
