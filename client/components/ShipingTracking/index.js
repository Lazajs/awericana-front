import React from 'react';

export function TrackingComponent({ estado }){

  const seguimientoEnvioHeight = "285px";
  
  const containerStyle = {
    height: seguimientoEnvioHeight,
  };
  return (
    <div className="flex">
      <div>
        <div className="flex flex-col items-center content-start">
        <div className={`w-4 h-4 rounded-full bg-primary z-10`}></div>
        <div className={`-mt-1 w-2 h-32 bg-${estado === 'Empacando' ? 'grayish' : 'primary' }`}></div>
        <div className={`-mt-1 w-4 h-4 rounded-full bg-${estado === 'Empacando' ? 'grayish' : 'primary' } z-10`}></div>
        <div className={`-mt-2 w-2 h-32 bg-${estado === 'Recibido' ? 'primary' : 'grayish'}`}></div>
        <div className={`-mt-1 w-4 h-4 rounded-full bg-${estado === 'Recibido' ? 'primary' : 'grayish'} z-10`}></div>
      </div>
      </div>
      <div className="ml-4">
        <div className="flex flex-col items-center justify-between" style={containerStyle}>
          <p className="text-sm">Empacando</p>
          <p className="text-sm">En camino</p>
          <p className="text-sm">Recibido</p>
        </div>
      </div>
    </div>
  );
};
