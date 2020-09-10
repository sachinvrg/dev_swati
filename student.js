                                                                           //  props
// import React,{Component} from "react";
//  import Pt from "prop-types";

// class Student extends Component{
//     render(){
//         return (
//             <div>
//                       <h1>Hello { this.props.name }</h1>
//                       <h2>your roll: {this.props.roll }</h2>
                
                
//                      </div>);
        
//     }
// }

                                                                         // typecheking

        //  Student.propTypes={
        //  name: Pt.string
        //  };
        //   default props    
        //  Student.defaultProps ={name: "geeky"};
// // const Student=(props)=>{
// //     return(<div>
// //          <h1>Hello {props.name }</h1>
// //          <h2>your roll: {props.roll }</h2>
// //     </div>);
// // }
// export default Student;

                                                                // Children props function

// import React from "react ";
//  const Student = props => {
//  return <h1>hello swati{props.children}</h1>;
//  }
//  export default Student;

                                                                            // Children props class

// class Student extends Component{
//     render(){
    
//     return    <h1> hello {this.props.children}  </h1>;
//     }
// }
// export default Student;

                                                                                   // state

// class Student extends Component{
//     state = {
//         name:"jay"
        
//     };
//     render(){return<h1>hello {this.state.name}</h1>; }
// }
// export default Student;

                                                                         //  event handling
    
// function Student(props){
//     function handleclicked(){
//         console.log("button clicked",this)
// } 
// return( <div>
//           <h1> hey {props.name}</h1>
//           <h1> your roll no: {props.roll}</h1>
//            <button onClick={handleclicked} > click me</button>
//         </div>);
// } 
// export default Student;
//                                             event handler
// function Student(props){
//     function handleclicked(e){
//         e.preventDefault();
//         console.log("button clicked",this)
// } 
// return( <div>
//           <h1> hey {props.name}</h1>
//           <h1> your roll no: {props.roll}</h1>
//            <a href = "http://www.geekyshows.com"onClick={handleclicked} > click me</a>
//            </div>);
// }     
// export default Student;
                                                                    //  update state using setState

// import React,{Component} from "react";
// class Student extends Component{
//     constructor(props){
//     super(props);
//     this.state ={
//         name:"chinu",
//         roll:this.props.roll
//     }
//     }
//     handleclick=()=> {
//         this.setState({name:"jay"});
//     };
//    render(){
    
//     return  ( <div>
//                 <h1> hello </h1>;
//                 <h1>hello{this.state.name} your roll no is{this.state.roll} </h1>
//                 <button onClick={this.handleclick} > click me</button>
//               </div>
//               )
//     }
// }
// export default Student ;
                                                                                    // passing argument
    
//  import React,{Component} from "react";
// class Student extends Component{
//      state ={
//         name:"swati",
//         id:1
        
//     };
      
//     handleclick =(id,e)=> {
//         // console.log("button clicked")
//         console.log(id)
//          console.log(e)

//     }
//      handleclickArg =(e)=>{
//          this.handleclick (this.state.id,e);
//      };

//     render(){
    
//             return  ( <div>
                       
//                         <h1>hello{this.state.name}  </h1>
//                         <button onClick={this.handleclickArg} > Delete</button>
//                       </div>
//                       )
//             }
//         }
//         export default Student ;
    
                                                                 //hookes [usestate]
    // import React,{useState} from "react";

    // function Student(){
    //           // const nameStateVariable = useState("swati");   
    //     const [name, setName] = useState("swati"); 
    //     const [roll, setRoll] = useState(102);              //after destucturing
    //               // const name =nameStateVariable[0]
    //     const handleclick =()=>{
    //      setName("chinu");
    //      setRoll(103);
    //        } ;
           
    // return (
    //  <>  
    //      <h1>Name:{name}</h1>
    //      <h1>Roll:{roll}</h1>
            
    //     <button type="button"onClick={handleclick}>change</button>
        
    //   </>);

    // }    
    // export default Student;

                                                             // use useEffect

import React ,{useState, useEffect} from 'react';
  
function Student(){
 const [count,setCount] = useState(0);
 const [count1,setCount1]=useState(50)
 const handleincrement =()=>{
   setCount (count+1);

 }
 useEffect( ()=>{
   console.log("called use effect")
 },[count]);
 
 const handledecrement =()=>{
  setCount1(count1-1);

}
 return(
 <>
   <h1>count up:{count}  </h1>
   <button type="button" onClick= {handleincrement }>count up</button>

   <h1>count down:{count1}  </h1>
   <button type="button" onClick= {handledecrement }>count down</button>

 </>
 )
}
export default Student;
