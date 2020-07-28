import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay'
import {IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
const SwipeButtons = () => {
    return (
        <div className="swipe-buttons">
            
     <IconButton ><ReplayIcon className="swipe-buttons__repeat" fontSize="large" /></IconButton>
     <IconButton ><CloseIcon className="swipe-buttons__left" fontSize="large" /></IconButton>
     <IconButton ><StarRateIcon className="swipe-buttons__star" fontSize="large" /></IconButton>
     <IconButton ><FavoriteIcon className="swipe-buttons__right" fontSize="large" /></IconButton>
     <IconButton ><FlashOnIcon className="swipe-buttons__lightning"  fontSize="large" /></IconButton>
            
            
        </div>
    )
}

export default SwipeButtons
