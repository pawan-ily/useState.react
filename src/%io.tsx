import React, { useState } from 'react'

export default function Io() {
  const [value,setValue] =useState<Array<string | null >>(Array(9).fill(1));
  function handleclick(){
  
       const nextSquares = value.slice();
       nextSquares[0]='x'
       ;
       setValue(nextSquares);
    return (
    <>
    <button onClick={()=>handleclick(0)}>
        {value}
        </button>
    </>
    
  )
}
