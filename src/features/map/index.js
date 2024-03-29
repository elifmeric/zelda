import React from 'react';
import { SPRITE_SIZE } from '../../config/constants';
import './style.scss';
import {connect} from 'react-redux'

function getTileSprite(type) {
    switch(type) {
      case 0:
        return 'grass'
      case 3:
        return 'tree'
      case 4:
        return 'chest'
      case 5:
        return 'rock'
      case 6:
        return 'tree'
    }
  }

function MapTile(props){
    return <div className={`tile ${getTileSprite(props.tile)}`}
    style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
    }}
    >
    </div>
}

function MapRow(props){
    return <div className="row"
    style={{
        height: SPRITE_SIZE,
    }}
    >
{
    props.tiles.map(tile => <MapTile tile={tile} />)
}
    </div>
}

function Map(props) {
    return(
        <div
        style={{
            position: 'relative',
            top: '0px',
            left: '0px',
            width: '800px',
            height: '480px',
            border: '4px solid white',
            }}
        >
        {
        props.tiles.map(row => <MapRow tiles={row}/>)
        }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        tiles: state.map.tiles
    }
}

export default connect(mapStateToProps)(Map);