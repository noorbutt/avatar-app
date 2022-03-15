import React, { Component } from  'react'
import 'tachyons';
import AvatarList from './AvatarList';



//  class Practice extends React.Component{


//   render(){

//      return ( 
//    <div> 

//    <h1>Noor butt </h1>
//    </div>
//      )
//   }
   

//  }



//  export default Practice;




// class Avatar  extends Component{
//     render(){
//       return (
     
  
//         <div className="Avatarstyle">  
  
//          <img src="https://joeschmoe.io/api/v1/Asfa" alt=""/>
       
//             </div>
  
//       )
  
//     }
    
  
//     }
    
//     export default Avatar;

 
        ///end 

// const Avatar = (props) =>{
  


  class Avatar extends Component{
 
    constructor(){
    super();
    this.state = {
    name: "welcome to avatar world",

    }
     

    }

    namechange(){
      this.setState({
       name: "Thanks for Subcribe my  programming Channle"

      })
    }

    

    render(){
      
const avatraListarry=[


  {
      id: 1,
      name:"Noor Butt",  
      work:"Web developer"
  },



   { 
     id: 2,
     name:"Moin Butt",  
     work:"Database"
 },


{
  id: 3,
  name:" Hamza Ali",  
  work:"Frontend  Developer"
},



{
  id: 4,
  name:"Marium Butt ",  
  work:"BackEnd"
}
]

     return (
      
        
      <div>  

        <h1 className="heading" >{this.state.name}</h1>
         

        <AvatarList  id={avatraListarry[0].name} 
                       name={avatraListarry[0].name} 
                        work={avatraListarry[0].work}/>


          <AvatarList id={avatraListarry[1].name} 
                        name={avatraListarry[1].name} 
                        work={avatraListarry[1].work} />


           <AvatarList  id={avatraListarry[2].name} 
                         name={avatraListarry[2].name} 
                       work={avatraListarry[2].work}/>



           <AvatarList  id={avatraListarry[3].name} 
                         name={avatraListarry[3].name} 
                        work={avatraListarry[3].work} /> 

                                <div>   
                <button  style={{textAlign:'center'}}   className="btn" onClick={ ()=> this.namechange()}>Subcribe</button> 
                </div>
              

         </div>


      )
    }
   }
  
  export default Avatar;






// const avatraListarry=[
//   {
//       id: 1,
//       name:"Noor Butt",  
//       work:"Web developer"
//   },



//   {
//     id: 2,
//     name:"Moin Butt",  
//     work:"Database"
// },



// {
//   id: 3,
//   name:"Rubab Butt",  
//   work:"Frontend  Developer"
// },


// {
//   id: 4,
//   name:"Maryam Butt",  
//   work:"BackEnd"
// }
// ]


// const arryavatarcard = avatraListarry.map( (avatarcard,i) => {
//   return <AvatarList  id={avatraListarry[i].name} 
//     name={avatraListarry[i].name} 
//     work={avatraListarry[i].work}/>

// })


  //    return (
  //        <div>  
  //          <h1 className="heading" >Well come to Avatar World</h1>
         

                
  //          <AvatarList  id={avatraListarry[0].name} 
  //                          name={avatraListarry[0].name} 
  //                          work={avatraListarry[0].work}/>


  //            <AvatarList id={avatraListarry[1].name} 
  //                           name={avatraListarry[1].name} 
  //                         work={avatraListarry[1].work} />


  //            <AvatarList  id={avatraListarry[2].name} 
  //                          name={avatraListarry[2].name} 
  //                        work={avatraListarry[2].work}/>


  //            <AvatarList  id={avatraListarry[3].name} 
  //                          name={avatraListarry[3].name} 
  //                         work={avatraListarry[3].work} /> 
 
  //               <button>Subcribe </button>
  //          </div>

  //  )

  
  //  }
  
  //  export default Avatar;