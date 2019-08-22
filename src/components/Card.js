import React from 'react';

const Card =(props) =>{
  const {name,email,id} = props
    return(
      <div className="bg-light-green dib br3 br3 ma2 grow tc bw2 shadow-5">
          <img  src={`https://robohash.org/${id}?200X200`} alt='rob0t'/>
          <div>
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
      </div>
    ); 
}
export default Card;