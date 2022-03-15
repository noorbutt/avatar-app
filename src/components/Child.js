
 import React from 'react'

  class Child extends React.Component{
     render(){

    return(
      <div> 
       <h1>noor butt</h1>
     <h1  className="child" >{this.props.name}</h1>
     <h4   className="child"> {this.props.price}  </h4>

   <button onClick={()=>this.props.get_data("noor butt")}>Send Data</button>

     </div>
   )

     } 
  }


  export default Child;

























 