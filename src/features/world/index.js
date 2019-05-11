import React from 'react';
import Map from '../../features/map'
import Player from '../../features/player'

function World() {
  return (
    <div
    style={{
        width : '800px',
        height:'400px',
        margin: '20px auto',
        position: 'relative'
    }}>
        <Map/>
        <Player/>
      </div>
  );
}

export default World;
