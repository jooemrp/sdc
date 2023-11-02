export function getRandomColor() {
    const arr = ['sips-orange', 'sips-navy', 'sips-green', 'sips-maroon'];

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

export function truncateString(str, n) {
    return str.length > n ? str.slice(0, n - 1) + '...' : str;
}

export function removeTags(str) {
    if (str === null || str === '') return false;
    else str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/gi, '');
}

export function formatDate(inputDate) {
    // Parse the input date string
    const date = new Date(inputDate);

    // Define arrays for day and month names
    const dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    // Get day name, month name, day, and year
    const dayName = dayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    // Assemble the formatted date string
    const formattedDate = `${dayName}, ${day} ${monthName} ${year}`;

    return formattedDate;
}
