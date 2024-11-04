import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';


function Notifications(){
    const handleCloseButtonClick = () => {
        console.log('Close button has been clicked');
    };

    return(
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <button
                onClick={handleCloseButtonClick}
                style={{ 
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    cursor: 'pointer'
                 }}
                aria-label='close'
            >
                <img src={closeIcon} alt="Close icon" width={10} height={10} />
            </button>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}/>
            </ul>
        </div>
    )
}

export default Notifications;