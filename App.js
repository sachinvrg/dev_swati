                                                                         // customfunction
import React from 'react';
import useCustomCounter from "./coustum ";

const App =()=>{
    const data = useCustomCounter();
    const data1 = useCustomCounter();
    return(
<>
    <h1>count up:{data.count}</h1>
    <button type ="button" onClick={data.handleincrement}> coustum</button>

    <h1>count up:{data1.count}</h1>
    <button type ="button" onClick={data1.handleincrement}> coustum</button>
 </>
   );

};
export default App;
