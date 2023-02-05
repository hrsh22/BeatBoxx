import React from 'react';

const BrowsePage = () => {
  return (
    <div className='w-screen -z-10 fixed scrollbar-hide'>
     <iframe className='w-full h-[127vh] -mt-64 ' src="https://dashradio.com/genres"></iframe>
    </div>
  );
}

export default BrowsePage;
