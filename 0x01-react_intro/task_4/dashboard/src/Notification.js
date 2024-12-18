import React from 'react';
import './Notifications.css';
import close from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
    return (
        <div className='Notifications'>
            <button onClick={() => {
                console.log('Close button has been clicked')}} aria-label='Close' style={{float: 'right'}}>
                <img src={close} alt='close logo' height={'8px'} />
                </button>
    
            <p>
            Here is the list of notifications
            </p>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification()}}></li>
            </ul>
        </div>
    );
}

export default Notifications;