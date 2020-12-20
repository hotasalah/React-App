import React from 'react';
import Card from './Card.js';


function CardList(props) {

  const { robots } = props;

  const card = robots.map((user, i) => {
  	return(
  	  <Card
  		key={i}
  		id={robots[i].id}
  		name={robots[i].name}
  		email={robots[i].email}
  	  />
  	);
  })

  return (
    <div>
      {card}
    </div>
  );
}

export default CardList;
