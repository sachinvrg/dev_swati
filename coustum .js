import {useState}from "react";
  function useCustomCounter(){
const [count, setCount] = useState(0)
const handleincrement= () =>{
   setCount(count+1)};
return{
    count,
    handleincrement};
};
export default useCustomCounter;




