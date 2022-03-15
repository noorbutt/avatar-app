import React from 'react';


const AvatraList = (props)=> {

return ( 

    <div className="Avatarstyle ma4  bg-light-cream  dib pa4  tc br3   grow shadow4"  >  

    
    <img src={`https://joeschmoe.io/api/v1/Asfamairabutt ${props.name}`} alt=""/> 

    <h1>{props.name} </h1>
    <p>{props.work}</p>

    </div>
    
     )



}


export default AvatraList;













