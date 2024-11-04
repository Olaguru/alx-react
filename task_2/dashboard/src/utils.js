
export function getFullYear(){
    const date = new Date();
    const year = date.getFullYear();
    return year;
}

export function getFooterCopy(isIndex){
        const trueState = "Holberton School";
        const falseState = "Holberton School main dashboard";
        if (isIndex) {
        return (trueState);
        }
        else {
        return (falseState)
        }
}

export function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD';
}