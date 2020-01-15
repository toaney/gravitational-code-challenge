// TODO: implement moment.js for human-readable timespans
const getTimestamp = (timestamp) => {
    const currentTime = Math.round((new Date()).getTime() / 1000);
    let elapsed = currentTime - timestamp;
    if (elapsed > 259200){
        return "over 3 days ago"
    } else if (elapsed > 172800) {
        return "2 days ago"
    } else if (elapsed > 86400) {
        return "1 day ago"
    } else if (elapsed > 82800) {
        return "23 hours ago"
    } else if (elapsed > 79200) {
        return "22 hours ago"
    } else if (elapsed > 75600) {
        return "21 hours ago"
    } else if (elapsed > 72000) {
        return "20 hours ago"
    } else if (elapsed > 68400) {
        return "19 hours ago"
    } else if (elapsed > 64800) {
        return "18 hours ago"
    } else if (elapsed > 61200) {
        return "17 hours ago"
    } else if (elapsed > 57600) {
        return "16 hours ago"
    } else if (elapsed > 54000) {
        return "15 hours ago"
    } else if (elapsed > 50400) {
        return "14 hours ago"
    } else if (elapsed > 46800) {
        return "13 hours ago"
    } else if (elapsed > 43200) {
        return "12 hours ago"
    } else if (elapsed > 39600) {
        return "11 hours ago"
    } else if (elapsed > 36000) {
        return "10 hours ago"
    } else if (elapsed > 32400) {
        return "9 hours ago"
    } else if (elapsed > 28800) {
        return "8 hours ago"
    } else if (elapsed > 25200) {
        return "7 hours ago"
    } else if (elapsed > 21600) {
        return "6 hours ago"
    } else if (elapsed > 18000) {
        return "5 hours ago"
    } else if (elapsed > 14400) {
        return "4 hours ago"
    } else if (elapsed > 10800) {
        return "3 hours ago"
    } else if (elapsed > 7200) {
        return "2 hours ago"
    } else if (elapsed > 3600) {
        return "1 hour ago"
    } else {
        return "less than 1 hour ago"
    }
}

export default getTimestamp;