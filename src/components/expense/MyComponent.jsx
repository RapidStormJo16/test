import React from 'react';
import TotalAmount from './TotalAmount';
import React from 'react';


const MyComponent = (userId) => {
//   const userId = localStorage.getItem('user'); // Assuming you retrieve the userId from localStorage

  return (
    <div>
      <TotalAmount userId={userId} />
    </div>
  );
};

export default MyComponent;