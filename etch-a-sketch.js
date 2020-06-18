const gridContainer = document.querySelector("#grid") ;
const restart = document.querySelector("#restart")
const reset = document.querySelector('#reset')

 let noOfCells;
 let cell;
 let newCell;
 let Input;
 let color;
 let red;
 let green;
 let blue;
 let newGridVal;
  
function randomColorVal(){ //get random values for setting random colors
   let colorValue = Math.floor(Math.random()*256);
   return colorValue;
    console.log(color)
} 


 console.log(red)
  function createCells(input){    //function for creating cells
    gridContainer.style.background = `${color}`
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${input},1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${input},1fr)`
      for(noOfCells=0; noOfCells<input**2;
      noOfCells++){
          cell = document.createElement('div');
          cell.classList.add('grid')
          //const pen = document.querySelector('div')
          cell.addEventListener('mouseover', (e)=>{  //detext mouse over to change color of cell
            red=randomColorVal();
            blue=randomColorVal();
            green=randomColorVal();
          e.target.style.backgroundColor=`rgb(${red},${green},${blue})`
          
          })
          gridContainer.appendChild(cell);
          
      }  
     newGridVal=input
  }
       
    createCells(16); //create default grid
    
    restart.addEventListener("click", (e)=>{     //create user customised grid
        const userInput =  prompt('How many squares on each axis','16' );
      createCells(userInput);
    newGridVal = userInput
    });

    reset.addEventListener('click',(e)=>{ //clear draeings on grid
    createCells(newGridVal);
    });
