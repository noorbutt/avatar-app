import React,{Component} from 'react';
// import { Header, Logo } from './components/Header'
// import Footer from './components/Footer'
//  import BasicTextFields from './components/TextField'
 import './App.css';
 import Child from './components/Child.js'
 //import Practice from  './components/Practice'





// class App extends React.Component{ 
//   render(){
//     let firstname = "Ghous";
//     let lastName = "Ahmed";
//     let arr = [1,2,3,4,5,6,7]
//     return(
//       <div>
//         <h1>{`${firstname} ${lastName}`}</h1>
//         <h2>{arr}</h2>
//       </div>
//     )
    
//   }
// } 

// export default App;



// class App extends React.Component{ 
//   render(){
//   let todos = [
//     {text :"ghous"}, 
//     {text:"basit"}
//   ];

//     return(
//       <div>
//         <ul>
//           {todos.map((item,index)=>{
//           return <li key={index}> {item.text}</li>
//           })

//           }
//         </ul>
//       </div>
//     )
    
//   }
// } 




// class Header extends Component {
//   render(){
//     return(
//  <div className ="header">
//  <h1>Header</h1>
// </div>

//     )
//   }
// }




// class Footer extends Component {
//   render(){
//     return(
//       <div className="Footer">
//       <h1>Footer</h1>
//     </div>
//     )
//   }
// }




// class App extends Component {

//   // State using in Component

//   constructor() {
//     super()
//    this.state = {
//      name: "Noor Butt",
//      email:"noorbutt706@gmail.com",
//      value: ""
//    }

//   // bind function 
//   //  this.set_name = this.set_name.bind(this)  

//   }



// //  set_name = () => {
// //    console.log(this.state.email,this.state.name)
// //  }

// set_value(e){
// this.setState({
//   [e.target.name]:e.target.value
// })

// // console.log(e.target.name)
// // console.log(e.target.value)

// }





//  set_name = ()=>{

//    this.setState({
//      name: this.state.value
//     })
//    //console.log(this.state.email)
// }


// get_name = ()=>{
//   console.log(this.state.name)
// }


// get_props = (props)=>{
//   console.log(props)
// }


//   render(){
//     return(
//       <div>
    
//     <Header get_props={this.get_props} email={this.state.email}  /> 
//      <br/>
    
//      {/* get state  */}
//     <h2>This is my name {this.state.name} </h2> 
//       <br/>

//      <h2> This is my email  {this.state.email}</h2>

//      <br/>
//     <input name="name" onChange= {(e)=> this.set_value(e)}type="text" placeholder="enter you name"/> <br/>
//     <input name="email"  onChange= {(e)=> this.set_value(e)}type="text" placeholder="enter you Email"/>
//     <button onClick ={this.set_name}>Set Name</button>
//     <button onClick={this.get_name}>Get Name</button>
 
//    <br/>
//    <br/>

//  <Footer />
//  </div>

//     )
//   }
// }


// export default App;




// <Logo />
// <h1 style={{color: 'red',fontSize: '70px' , textAlign :"center" }}>Main Component</h1>
// {/* <h1 style={{textAlign:'center'}}>Excellence come from success </h1> */}
// <button type="button" className="btn btn-primary">Primary</button>
//  <br/>

//    <BasicTextFields /> 



//last step


//  class App extends Component{
  
//    get_data(data) {
//     console.log(data)
//   }


//   render(){
    
//     return(
//        <div>
//            <h1 className="parent">Parent component</h1>
//             <img src="https://joeschmoe.io/api/v1/Noor" alt=""/>
//      <Child    get_data={this.get_data}   name="Car" price="10000"/>
//      <Child    name="Watch"   price="1000"  />
//      <Child    name="bangle"  price="200"  />
//      <Child    name=" bike"   price="7000"  />
//       </div>
//      )
  
//    }

//  }



//  export default App; 




// // const Avatar = () =>{

//    return( 
//        <div className="Avatarstyle">  
//       <img src="https://joeschmoe.io/api/v1/random" alt="Avatar"/>
//       <h1>Noor butt</h1>
//        </div>
  
//    )

//    }
  



//    export default Avatar;
  
  
  //  class Avatar  extends Component{
  //  render(){
  //    return (
   

  //      <div className="Avatarstyle">  

  //      <img src="https://joeschmoe.io/api/v1/Asfamairabutt" alt=""/>
     
  //          </div>

  //  )

  //  }
  

  //  }
  
  //  export default Avatar;
  
  
  


