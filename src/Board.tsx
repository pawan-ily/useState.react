import React,{useState} from 'react'
function Square( { value,squareClick } ){
    return(
    <>
    <button  onClick={squareClick}>{value}</button>
    </>
)
}
export default function Board(){
 const[value,setValue] = useState<Array<string |  null>>(Array(9).fill(null)); 
 const[next,setNext] =useState<boolean>(true);
 function handleclick(i:number){
    if (calculateWinner(value) || value[i] ){
        return ;
    }
        const nextSquares= value.slice();
    if (next) {
        nextSquares[i]="X" ;
    } 
    else{
        nextSquares[i] = "O";
    }
    setValue(nextSquares);
    setNext(!next);

 }
 const winner  = calculateWinner(value);
 let status;
 if(winner){
status ='Winner: ' + winner;
 }
 else{
status ='Next player: ' + (next ? 'X' : 'O');
 }
  return(
  <>
  <p>{status}</p>
    <div className="board-row" style={{display:'flex',flexDirection:'row'}} >
        <Square value={value[0]}  squareClick={()=>handleclick(0)} />
        <Square value={value[1]} squareClick={()=>handleclick(1)}/>
        <Square value={value[2]}squareClick={()=>handleclick(2)} />
        
    </div>
  
    <div className="board-row">
        <Square value={value[3]}  squareClick={()=>handleclick(3)} />
        <Square value={value[4]} squareClick={()=>handleclick(4)}/>
        <Square value={value[5]}squareClick={()=>handleclick(5)} />
        
    </div>
  
    <div className="board-row">
        <Square value={value[6]}  squareClick={()=>handleclick(6)} />
        <Square value={value[7]} squareClick={()=>handleclick(7)}/>
        <Square value={value[8]}squareClick={()=>handleclick(8)} />
        
    </div>
  
  
  
  

  </>)
}
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }