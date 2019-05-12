import React from 'react';
import {connect} from 'react-redux';
import walkSprite from './walkSprite.png'
import handleMovement from './movement';

function Player(props) {
        return (
        <div
        style={{
            position: `absolute`,
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url('${walkSprite}')`,
            backgroundPosition: props.spriteLocation,
            width: '40px',
            height: '40px',
}}
        />
        )
}

function mapStateToProps(state) {
    return {
        ...state.player, //spread all ...
    }
}



export default connect(mapStateToProps)(handleMovement(Player));
// connector is a function return a function
// it is return a new function and it gonna be passing player into it