import React from 'react';

const BrowsePage = () => {
  return (
    <div className='w-screen -z-10 fixed scrollbar-hide'>
     <iframe className='w-full h-screen -mt-5 z-50' src="https://dashradio.com/genres"></iframe>
    </div>
  );
}

export default BrowsePage;
