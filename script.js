let mainVar='O';
let mainCount=0;
let winBool=false;
const elem=document.querySelectorAll('.box');
elem.forEach((value)=>{
  value.innerText='';
})
elem.forEach((value)=>{
  value.addEventListener('click',()=>{
    const turnVar=document.querySelector('.whoseTurn');
    if(winBool===false)
    {
      turnVar.innerText=`Turn Of ${mainVar}`;
    }
    else
    {
      turnVar.innerText=`Game Over`;
    }
    if(value.innerText==='' && winBool===false)
    {
      checkMove();
      value.innerText=mainVar;
      mainCount++;
      win(mainCount); 
    }  
      
  });
})

function checkMove()
{
  if(mainVar==='X')
  {
    mainVar='O';
  }
  else
  {
    mainVar='X';
  }
}


function reset()
{
  document.querySelector('.reset-button').addEventListener('click',()=>{
    const element=document.querySelectorAll('.box');
    element.forEach((value,ind)=>{
      value.innerText='';
    })
    const image=document.querySelector('.dance');
    image.classList.remove('start-dance');
    const turnVar=document.querySelector('.whoseTurn');
    turnVar.innerText=`Turn Of ${mainVar}`;
    checkMove();
    mainCount=0;
    document.querySelector('.result').innerText=``;
    winBool=false;
  });
  
};


function win(mainCount)
{
  let boardArr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  
  if(winBool===false)
  {
    let varWin=document.querySelectorAll('.box');
    boardArr.forEach((value,index)=>{
      if((varWin[value[0]].innerText===varWin[value[1]].innerText) &&(varWin[value[1]].innerText===varWin[value[2]].innerText) && varWin[value[0]].innerText!=='' )
      {
        winBool=true;
        document.querySelector('.result').innerText=`${varWin[value[0]].innerText} Won The Game !!
        Play Again`;

        const turnVar=document.querySelector('.whoseTurn');
        turnVar.innerText=`Game Over`;

        const image=document.querySelector('.dance');
        image.classList.add('start-dance');
      };
    })
  }

  if(mainCount==9 && winBool===false){
    document.querySelector('.result').innerText=`Match is draw !!
    Play Again`;
    const image=document.querySelector('.dance');
    image.classList.add('start-dance');

    const turnVar=document.querySelector('.whoseTurn');
    turnVar.innerText=`Game Over`;
  }
}

reset();

