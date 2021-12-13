import React from 'react';
import GameList from 'components/GameList';
import Games from 'pages/Games';

const EditGameList = () => {
  return (
    <>
      {
        <Games edit={true}/>
      }
    </>
  );
};

export default EditGameList;