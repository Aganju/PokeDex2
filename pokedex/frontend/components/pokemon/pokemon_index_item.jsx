import React from 'react';
import { Link } from 'react-router-dom';

export default (props) =>  {
  return (
    <li>
      <Link to={`/pokemon/${props.poke.id}`}>
          { props.poke.id }
          <img src={props.poke.image_url} />
          { props.poke.name }
      </Link>
    </li>
  );
};
