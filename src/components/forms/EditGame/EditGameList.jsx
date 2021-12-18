import React from 'react';
import Games from 'pages/Games';

const EditGameList = () => {
  return (
    <>
      {
        <Games edit={true} />
      }
    </>
  );
};

export default EditGameList;