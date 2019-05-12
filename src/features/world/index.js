import React from 'react';
import Map from '../../features/map'
import Player from '../../features/player'
import store from '../../config/store'
import {tiles} from '../../data/maps/1'

function World(props) {
    store.dispatch({type: 'ADD_TILES', payload: {
        tiles,
    }})

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
