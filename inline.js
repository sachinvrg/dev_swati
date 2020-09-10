import React from 'react'

// export default  function Inline() {
//   const btnStyle ={
//       color:"blue" ,
//       backgroundColor:"orenge"

//   } 

//     return (
//         <div>
//             <button style={btnStyle}> button </button>
//         </div>
//     )
// }
  
 const Inline=()=> {
    const txtc={
        color:"red"
    };
    const txts={
        fontSize: "80px"
    }

      return(<h1 style={{...txtc, ...txts}}> hello world</h1>
        )  ;
      }  
      export default Inline;     