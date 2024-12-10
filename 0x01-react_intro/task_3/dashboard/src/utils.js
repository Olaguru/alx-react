
export function getFullYear() {
    const d = new Date();
    let year = d.getFullYear();
    return (year);
}

export function getFooterCopy(isIndex) {
    if (isIndex) {
        return ('ALX');
    }
    else {
        return ('ALX main dashboard');
    }
   
}

export function getLatestNotification() {
    return ('<strong>Urgent requirement</strong> - complete by EOD');
}
