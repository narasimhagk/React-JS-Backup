import React from "react";
const Hello=()=>{
    // return (
    //     <div className="dummyclass">
    //         <h1>Hello! Techno World</h1>     // This is the JSX version of Hello Component
    //     </div>
    // )
    return React.createElement('div', {id:1,name:'Mikey',className:'dummy vaue'}, React.createElement('h1',null,'Hello! Techno World'))    // Now rewriting the component without using JSX
    // Here second parameter is simply an Object of key pair values
}
export default Hello 