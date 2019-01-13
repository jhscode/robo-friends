import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((robot, i) => {
          return (
            <Card 
              key={i} 
              id={robots[i].id} 
              name={robots[i].firstName} 
              email={robots[i].email}
            />
          );
        })
      }        
    </div>    
  );
}

export default CardList;