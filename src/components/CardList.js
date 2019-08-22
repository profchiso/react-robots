import React from 'react';
import Card from './Card' ;
//import {Robot} from '../robots';

const CardList =({robot})=>{
  const allcard = robot.map((each,i)=>{
    return <Card id={robot[i].id} name={robot[i].username} email={robot[i].email}/>
  })
  return(
    <div className="tc">
      {allcard}
    </div>
  );
}
export default CardList; 