import React from 'react';

const SecretDiv = ({ showSecretDiv, zoomClass, hideRain }) => {
  return (
    <div className={`absolute top-0 left-0 ${showSecretDiv ? 'flex' : 'hidden'} bg-[#6b4db2] justify-center items-center w-full h-full`}>
      <div className='w-full h-full relative flex items-start justify-center overflow-hidden'>
        <img src='./assets/pluie.gif' className={`h-full w-full z-10 absolute ${hideRain ? 'fade-out' : ''}`} alt='pluie' />
        <h1 className={`z-30 ${zoomClass} mt-20 text-4xl text-red`}>LA VALISE MOBILE</h1>
        <img src='/assets/valise.gif' className={`h-full z-25 absolute ${zoomClass}`} alt='valise' />
      </div>
    </div>
  );
};

export default SecretDiv;