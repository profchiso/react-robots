import React from 'react';
import Card from './Card' ;


const CardList =({robot})=>{
  const allcard = robot.map((each,i)=>{
    return(<Card 
    key={i} 
    id={each.id}
    name={each.username}
     email={each.email}
     />);
  })
  console.log(allcard);
  return(
    <div className="tc">
      {allcard}
    </div>
  );
}
export default CardList; 