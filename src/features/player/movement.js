import store from '../../config/store';
import {SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT} from '../../config/constants'



export default function handleMovement(player){
    function getNewPosition(oldPos, direction){   
        switch(direction){
            case 'WEST':
                return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
            case 'EAST':
                return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
            case 'NORTH':
                return [oldPos[0], oldPos[1] - SPRITE_SIZE];
            case 'SOUTH':
                return [oldPos[0], oldPos[1] + SPRITE_SIZE];

        }
        

    }

    function getSpriteLocation(walkIndex, direction){
        switch(direction){
            case 'EAST':
                return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*1}px`
            case 'SOUTH':
                return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*0}px`
            case 'WEST':
                return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*2}px`
            case 'NORTH':
                return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*3}px`
        }
    }

    function observeBoundaries(oldPos, newPos){
        return (newPos[0] >= 0 && newPos[0]<= MAP_WIDTH) && (newPos[1] >= 0 && newPos[1]<= MAP_HEIGHT);
    }

    function observeImpassable(oldPos, newPos){
        const tiles = store.getState().map.tiles;
        const y = newPos[1] / SPRITE_SIZE;
        const x = newPos[0] / SPRITE_SIZE;
        const nextTile = tiles[y][x]
        return nextTile < 5;

    }

    function getWalkIndex(){
        const walkIndex = store.getState().player.walkIndex;

        return walkIndex >=  7 ? 0 : walkIndex + 1;
    }

    function directionMove(direction, newPos){

        const walkIndex = getWalkIndex();

        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: newPos,
                direction,
                walkIndex,
                spriteLocation: getSpriteLocation(walkIndex, direction),
            }
        });
    }

    function attemptMove(direction){
        const oldPos = store.getState().player.position;
        const newPos = getNewPosition(oldPos, direction);

        if(observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos)){
            directionMove(direction, newPos);
        }

    }

    function handleKeydown(e){
        e.preventDefault();
        switch(e.keyCode){
            case 37:
                return attemptMove('WEST');
            case 38:
                return attemptMove('NORTH');
            case 39:
                return attemptMove('EAST');
            case 40:
                return attemptMove('SOUTH');
            default:
                console.log(e.keyCode);
        }
    }

    window.addEventListener('keydown', (e)=>{
handleKeydown(e);
    })
    return player;
}

