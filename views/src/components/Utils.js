import axios from "axios";

/**
 * Check if were at the root of the site
 */

export const isHome = window.location.pathname === '/'

/**
 * Redirect to the previous URL
 */

export const goBack = () => window.history.back()

/**
 * Redirect to the next URL
 */

export const goForward = () => window.history.forward()

/**
 * Add a body class
 * @param {*} className Class to add to body
 */

export const addBodyClass = (className) => {
    document.body.classList.add(className)
}

/**
 * Remove a body class
 * @param {*} className Class to remove from body
 */

export const removeBodyClass = (className) => {
    document.body.classList.remove(className)
}

/**
 * Replace first body class by the second
 * @param {*} classToAdd Class to add
 * @param {*} classToRemove Class to remove
 */

export const replaceBodyClass = (classToAdd, classToRemove) => {
    document.body.classList.add(classToAdd)
    document.body.classList.remove(classToRemove)
}

/**
 * If body class is active, removes it, else add it
 * @param {*} classToAdd Class to add or remove
 */

export const addAndRemoveBodyClass = (classToAdd) => {
    if (document.body.classList.contains(classToAdd)) {
        document.body.classList.remove(classToAdd)
    } else {
        document.body.classList.add(classToAdd)
    }
}

/**
 * Return the value of the required local storage key
 * @param {*} item Name of the storage item to get
 */

export const getStorage = (item) => {
    return localStorage.getItem(item)
}

/**
 * Sets the value of the pair identified by key to value
 * @param {*} item Name of the item
 * @param {*} value Value of the item
 */

export const setStorage = (item, value) => {
    return localStorage.setItem(item, value)
}

export const addLocalStorageArrayWithLimit = (item, newItems, limit) => {
    let isItem = JSON.parse(localStorage.getItem(item))

    if (!Array.isArray(isItem)) {
        localStorage.setItem(item, [])
    }

    if (isItem) {
        let store = JSON.parse(localStorage.getItem(item))
        if (store.length >= limit) {
            if (store.length > limit) {
                store.splice(0, limit - newItems.length)
                return localStorage.setItem(item, JSON.stringify([...store, ...newItems]))
            } else {
                let diff = newItems.length - store.length
                let newStore = store.splice(diff, store.length - 1)
                return localStorage.setItem(item, JSON.stringify([...newStore, ...newItems]))
            }
        } else {
            return localStorage.setItem(item, JSON.stringify([...store, ...newItems]))
        }
    } else {
        return localStorage.setItem(item, JSON.stringify(newItems))
    }
}

/**
 * Return a randam ID containing uppercases, lowercases, numbers and special chars.
 * @param {*} max Length of the required ID
 */

export const randomID = (max) => {
    const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"];
    const allUniqueChars = [..."~!@#$%^&*()_+-=[]\\{}|;:,./<>?"];
    const allNumbers = [..."0123456789"];

    const baseline = [...allCapsAlpha, ...allNumbers, ...allLowerAlpha, ...allUniqueChars];

    const generator = (base, len) => {
        return [...Array(len)]
            .map(i => base[Math.random() * base.length | 0])
            .join('');
    }

    return generator(baseline, max)
}

/**
 * Return a randam ID containing lowercases, and numbers.
 * @param {*} max Length of the required ID
 */

export const randomNbLtID = (max) => {
    const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"];
    const allNumbers = [..."0123456789"];

    const baseline = [...allNumbers, ...allLowerAlpha];

    const generator = (base, len) => {
        return [...Array(len)]
            .map(i => base[Math.random() * base.length | 0])
            .join('');
    }

    return generator(baseline, max)
}

/**
 * Return a randam ID containing numbers.
 * @param {*} max Length of the required ID
 */

export const randomNbID = (max) => {
    const allNumbers = [..."0123456789"];
    const baseline = [...allNumbers];

    const generator = (base, len) => {
        return [...Array(len)]
            .map(i => base[Math.random() * base.length | 0])
            .join('');
    }

    return generator(baseline, max)
}

/**
 * remove all special chars from string
 * @param {*} string String to remove special chars from
 */

export const removeSpecialChars = (string) => {
    const noSpecialChars = string.replace(/[^\w ]/g, ' ');
    return noSpecialChars
}

/**
 * Check if string contains only letters, spaces and dashes (-)
 * @param {*} string String to check
 */

export const onlyLettersSpacesAndDashes = (string) => {
    // eslint-disable-next-line
    const regexp = new RegExp(/^[A-Za-z\s\-]+$/)
    if (regexp.test(string)) return true
    else return false
}

/**
 * Check if string contains only letters, numbers and dashes (-)
 * @param {*} string String to check
 */

export const onlyLettersNumbersAndDashes = (string) => {
    const regexp = new RegExp(/^(\w|-)+$/)
    if (regexp.test(string)) return true
    else return false
}

/**
 * Check if string contains letter.
 * @param {*} string String to check
 */

export const containsAnyLetters = (string) => {
    const regexp = new RegExp(/[a-zA-Z]/)
    if (regexp.test(string)) return true
    else return false
}

/**
 * Check if string contains only letter.
 * @param {*} string String to check
 */

export const onlyLetters = (string) => {
    const regexp = new RegExp(/^[a-zA-Z]*$/)
    if (regexp.test(string)) return true
    else return false
}

/**
 * Check if string contains numbers.
 * @param {*} string String to check
 */

export const containsAnyNumbers = (string) => {
    const regexp = new RegExp(/[0-9]/)
    if (regexp.test(string)) return true
    else return false
}

/**
 * Check if string contains only numbers.
 * @param {*} string String to check
 */

export const onlyNumbers = (string) => {
    const regexp = new RegExp(/^[0-9]*$/)
    if (regexp.test(string)) return true
    else return false
}

/**
 * Remove choosen characters from string
 * @param {*} str String to remove from
 * @param {*} char Character to remove
 */

export const replaceStr = (str, char) => {
    const string = str.replace(char, '')
    return string
}

/**
 * Replace choosen characters to another in string
 * @param {*} str String to remove from
 * @param {*} char Character to replace
 * @param {*} newChar Character that replace
 */

export const replaceChar = (str, char, newChar) => {
    const string = str.replace(char, newChar)
    return string
}

/**
 * Check if a string includes one of the mentioned elements
 * @param {*} string String to check
 * @param {*} elements Elements to find
 */

export const doesStringIncludes = (string, elements) => {
    let isElement = false
    for (var i = 0; i < elements.length; i++) {
        if (string.indexOf(elements[i]) !== -1) {
            isElement = true;
            break;
        }
    }
    return isElement
}

/**
 * Check if a string includes one of the mentioned elements, return the first element matching
 * @param {*} string String to check
 * @param {*} elements Elements to find
 */

export const findFirstWordContained = (string, elements) => {
    let isElement
    for (var i = 0; i < elements.length; i++) {
        if (string.indexOf(elements[i]) !== -1) {
            isElement = elements[i]
            break;
        }
    }
    return isElement
}

/**
 * Check email validity.
 * @param {*} email Email to check
 */

export const isEmailValid = (email) => {
    // eslint-disable-next-line
    const regexp = new RegExp(/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i)
    if (regexp.test(email))
        return true
    else return false
}

/**
 * Check french phone validity.
 * @param {*} phone Phone number to check
 */

export const isPhoneValid = (phone) => {
    const regexp = new RegExp(/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/)
    if (regexp.test(phone))
        return true
    else return false
}

/**
 * Check theme and return choosen values.
 * @param {*} light Light class to return
 * @param {*} dark Dark class to return
 */

export const checkTheme = (light, dark) => {
    const theme = localStorage.getItem("theme")
    if (theme !== null && theme === "light")
        return light
    else return dark
}

/**
 * Return date formated : dd mon. YYYY (ex: 12 janv. 2020)
 * @param {*} num Date to convert
 */

export const dateParser = (num) => {
    let options = { year: "numeric", month: "short", day: "2-digit" }
    let timestamp = Date.parse(num)
    let date = new Date(timestamp).toLocaleDateString('fr-FR', options)
    return date.toString()
}

/**
 * Return date formated : dd mon. YYYY (ex: 12 janv.) without year.
 * @param {*} num Date to convert
 */

export const dateParserWithoutYear = (num) => {
    let options = { month: "short", day: "2-digit" }
    let timestamp = Date.parse(num)
    let date = new Date(timestamp).toLocaleDateString('fr-FR', options)
    return date.toString()
}

/**
 * Return date formated : dd mon. YYYY (ex: 12 janv. 2020)
 * @param {*} num Date to convert
 */

export const numericDateParser = (num) => {
    let options = { year: "2-digit", month: "2-digit", day: "2-digit" }
    let timestamp = Date.parse(num)
    let date = new Date(timestamp).toLocaleDateString('fr-FR', options)
    return date.toString()
}

/**
 * Convert ISO date to navigator date input format.
 * @param {*} date Date to convert
 */

export const ISOtoNavigatorFormat = (date) => {
    return date.substring(0, 10)
}

/**
 * Return the difference between two dates in days, the number is always positive.
 * @param {*} first 
 * @param {*} second 
 */

export const diffBetweenDates = (first, second) => {
    let date1 = new Date(first);
    let date2 = new Date(second);
    let diffTime = Math.abs(date2 - date1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays
}

/**
 * Return the difference between two dates in days, if second dates is before the first date, return a negative number.
 * Ex: first: 23janv, second: 15janv = -8
 * @param {*} first 
 * @param {*} second 
 */

export const diffBetweenDatesNegativeIfLess = (first, second) => {
    return Math.round((new Date(second) - new Date(first)) / (1000 * 60 * 60 * 24));
}

/**
 * Return hours only : hh:mm.
 * @param {*} date Date to convert
 */

export const getHourOnly = (date) => {
    const hours = date.getUTCHours();
    const minutes = date.getMinutes();
    return (1 + ((hours - 1))) + "h" + minutes.toString().padStart(2, "0");
}

/**
 * Return the difference between to hours
 * @param {*} prev Passed hour
 * @param {*} current Current hour
 */

export const getHoursDiff = (prev, current) => {
    let hourDiff = new Date(current.createdAt) - new Date(prev.createdAt)
    let prevTimeDiff = (hourDiff % 86400000) / 3600000
    return prevTimeDiff
}

/**
 * Add one day to a date
 * @param {*} date Date to incremente
 */

export function addOneDay(date) {
    let newDate = new Date(date)
    return new Date(newDate.setDate(newDate.getDate() + 1))
}

/**
 * Map an array and return an array containing new dates only and index of it.
 * @param {*} arrayToMap Array to map
 */

export const keepNewDateOnly = (arrayToMap) => {
    let array = []
    arrayToMap.map((element, key) => {
        return (
            array = [...array, {
                index: key,
                date: element.date.substring(0, 10)
            }]
        )
    })
    let filteredArray = []
    array.filter(item => {
        let i = filteredArray.findIndex(element => (element.date === item.date));
        if (i <= -1) {
            filteredArray.push(item)
        }
        return null;
    });
    return filteredArray
}

/**
 * Converte date to locale date
 * @param {*} date Date to convert
 */

export const convertToLocalDate = (date) => {
    let localDate = date.toLocaleDateString('fr-FR').split('/').reverse().join('-');
    return localDate
}

/**
 * Return all elements in array matching the selected date
 * @param {*} array Array to check in
 * @param {*} date Date to find
 */

export const bySelectedDate = (array, date) => {
    let localDate = date.toLocaleDateString('fr-FR').split('/').reverse().join('-');

    return array.filter(element => element.date.substring(0, 10) === localDate)
}

/**
 * Return array elements if element.date is less than 24 hours ago.
 * @param {*} array Array to check in
 */

export const thisDay = (array) => {
    return array.filter(element => element.date.substring(0, 10) === new Date().toISOString().substring(0, 10))
}

/**
 * Return array elements if element.date is between 24 and 48 hours ago.
 * @param {*} array Array to check in
 */

export const lastDay = (array) => {
    return array.filter(element => element.date.substring(0, 10) === new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toISOString().substring(0, 10))
}

/**
 * Return array elements between today and choosen date.
 * @param {*} array Array to check in
 * @param {*} date Max date
 */

export const timeBetween = (array, days) => {
    let currentDate = new Date();
    let currentDateTime = currentDate.getTime();
    let last30DaysDate = new Date(currentDate.setDate(currentDate.getDate() - days));
    let last30DaysDateTime = last30DaysDate.getTime();

    return array.filter(element => {
        const elementDateTime = new Date(element.date).getTime();
        if (elementDateTime <= currentDateTime && elementDateTime > last30DaysDateTime) {
            return true;
        }
        return false
    }).sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
}

/**
 * Add an item to an array
 * @param {*} array Array to add item in
 * @param {*} item Item to add
 */

export const addItemInArray = (array, item) => {
    return [...array, item]
}

/**
 * Add an item to an array
 * @param {*} array Array to add item in or remove item from
 * @param {*} item Item to add or remove
 * @param {*} key Item key
 */

export const addOrRemoveItem = (array, item, key) => {
    if (array.includes(item)) {
        let arr = [...array]
        arr.splice(key, 1)
        return arr
    } else {
        return [...array, item]
    }
}

/**
 * Remove choosen item from specified array
 * @param {*} array Array to remove from
 * @param {*} key Key of the element to remove
 */

export const deleteItemFromArray = (array, key) => {
    let arr = [...array]
    arr.splice(key, 1)
    return arr
}

/**
 * Check if an array includes one of the mentioned elements
 * @param {*} array Array to check
 * @param {*} elements Elements to find
 */

export const doesArrayIncludes = (array, elements) => {
    array.filter(el => elements.some(e => e === el))
}

/**
 * Check if all arrays in an array or an object contain at least one value
 * @param {*} element Element of typeof object or array than contain the arrays
 */

export const doesAllArraysInElementContainValues = (element) => {
    let state = false
    if (typeof element === 'object') {
        for (let i = 0; i < Object.keys(element).length; i++) {
            if (Object.values(element)[i].length === 0) {
                state = false
                break;
            } else if (i === Object.keys(element).length - 1) {
                state = true
                break;
            }
        }
    }
    else if (Array.isArray(element)) {
        for (let i = 0; i < element.length; i++) {
            if (element[i].length === 0) {
                state = false
                break;
            } else if (i === element.length - 1) {
                state = true
                break;
            }
        }
    }
    return state
}

/**
 * Keep only unique objects in array based on a property value.
 * Ex: [{ a: '1' }, { b: '1' }] => [{ a: '1' }]
 * @param {*} array Array to filter
 * @param {*} props Object property to filter
 */

export const keepUniqueObjectsOnlyBasedOnValue = (array, props) => {
    return [...new Map(array.map(item => [item[props], item])).values()]
}

/**
 * Return a random item from array
 * @param {*} array Array to choose in
 */

export const randomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)]
}

/**
 * Return random item from an array with no repetitions
 * @param {*} array Array to choose in
 */

export const randomizedArrayNoRepeats = (array) => {
    let copy = array.slice(0)
    return function () {
        if (copy.length < 1) {
            copy = array.slice(0)
        }
        let index = Math.floor(Math.random() * copy.length)
        let item = copy[index]
        copy.splice(index, 1)
        return item
    }
}

/**
 * Return a random color class
 */

export const randomColor = randomizedArrayNoRepeats(['blue', 'light-blue', 'turquoise', 'green', 'purple-light', 'red-light', 'yellow', 'orange'])

/**
 * Return a random background-color class
 */

export const randomBgColor = randomizedArrayNoRepeats(['xbg-blue', 'xbg-light-blue', 'xbg-turquoise', 'xbg-green', 'xbg-purple-light', 'xbg-red-light', 'xbg-orange'])

/**
 * Return a random color class
 */

export const randomBgAndColor = randomizedArrayNoRepeats(['blue xbg-blue', 'light-blue xbg-light-blue', 'turquoise xbg-turquoise', 'green xbg-green', 'purple-light xbg-purple-light', 'red-light xbg-red-light', 'orange xbg-orange'])

/**
 * Reverse array order.
 * @param {*} array Array to reverse
 */

export const reverseArray = (array) => {
    return array.map(array.pop, [...array])
}

/**
 * Divide an array into multiple others
 * @param {*} array Array to divide
 * @param {*} parts Number of news arrays (divided parts numbers)
 */

export function divideArrayIntoParts(array, parts) {
    let copy = [...array]
    let result = [];
    for (let i = parts; i > 0; i--) {
        result.push(copy.splice(0, Math.ceil(copy.length / i)));
    }
    return result;
}

/**
 * Divide an array into multiple others width a certain number of elements in each array
 * @param {*} array Array to divide
 * @param {*} size Size of each new arrays
 */

export function divideArrayIntoSizedParts(array, size) {
    let copy = [...array]
    let result = [];
    for (let i = 0; i < copy.length; i += size) {
        result.push(copy.slice(i, i + size));
    }
    return result;
}

/**
 * Multiply the selected array. Ex: ([1, 2, 3], 3) = [1, 2, 3, 1, 2, 3, 1, 2, 3]
 * @param {*} array Array to multiply
 * @param {*} num Number of time to multiply
 */

export function multiplyArray(array, num) {
    var newArr = [];
    for (var i = 0; i < num; [i++].push.apply(newArr, array));
    return newArr;
}

/**
 * rRturn the array randomized
 * @param {*} array Array to suffle
 */

export const shuffleArray = (array) => {
    let copy = [...array]
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    return copy
}

/**
 * Group array values by parameter value. Return an array with nested arrays.
 * @param {*} array Original array
 * @param {*} parameter Parameter to group by
 */

export const groupBy = (array, parameter) => {
    let group = array.reduce((r, a) => {
        r[a[parameter]] = [...r[a.id] || [], a]
        return r
    }, {})

    return Object.values(group)
}

/**
 * Remove HTML markers (</>)
 * @param {*} html HTML to remove markers from
 */

export const removeHTMLMarkers = (html) => {
    let regex = /(<([^>]+)>)/ig
    return html.replace(regex, '')
}

/**
 * Converts a string to its html characters completely.
 */

export const stringToCharSet = (str) => {
    let buf = [];
    for (let i = str.length - 1; i >= 0; i--) {
        buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
    }
    return buf.join('')
}

/**
 * Converts an html characterSet into its original character.
 * @param {*} str 
 */

export const charSetToChar = (str) => {
    let txt = document.createElement("textarea")
    txt.innerHTML = str
    return txt.value
}

/**
 * Check if array, object or string is empty.
 * @param {*} value Array, object or string to check
 */

export const isEmpty = (value) => {
    return (
        value === undefined
        || value === null
        || (typeof value === "object" && Object.keys(value).length === 0)
        || (typeof value === "string" && value.trim().length === 0)
        || (typeof value === "number")
        || (value instanceof Array && value.length === 0)
    )
}

/**
 * Add full size background image
 * @param {*} img Image to add
 */

export const fullImage = (img) => {
    return ({
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
    })
}

/**
 * Check file extension
 * @param {*} file File to check
 */

export const isImage = (file) => {
    const types = ['image/jpg', 'image/jpeg', 'image/bmp', 'image/gif', 'image/png', 'image/svg+xml'];
    return types.some(el => file.type === el);
}

/**
 * Check if file is a video
 * @param {*} file File to check
 */

export const isVideo = (file) => {
    const types = ['video/mp4', 'video/webm', 'video/x-m4v', 'video/quicktime'];
    return types.some(el => file.type === el);
}

/**
 * Check file validity
 * @param {*} file File to check
 */

export const isFile = (file) => {
    const types = [
        '.7z', '.ade', '.mde', '.adp', '.apk', '.appx', '.appxbundle', '.aspx', '.bat',
        '.com', '.dll', '.exe', '.msi', '.cab', '.cmd', '.cpl', '.dmg', '.gz', '.hta',
        '.ins', '.ipa', '.iso', '.isp', '.jar', '.js', '.jse', '.jsp', '.lib', '.lnk',
        '.msc', '.msix', '.msixbundle', '.msp', '.mst', '.nsh', '.pif', '.ps1', '.scr',
        '.sct', '.wsc', '.shb', '.sys', '.vb', '.vbe', '.vbs', '.vxd', '.wsf', '.wsh', '.tar'
    ]
    return !types.some(el => file.name.endsWith(el))
}

/**
 * Check if string is an URL
 * @param {*} str String to check
 */

export const isURL = (str) => {
    // eslint-disable-next-line
    const regexp = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi)
    if (regexp.test(str)) {
        return true
    } else return false
}

/**
 * Check if string contains an URL
 * @param {*} text String to check in
 */

export const isURLInText = (text) => {
    const regexp = new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?([^ ])+")
    if (regexp.test(text)) {
        return true
    } else return false
}

/**
 * Return all URLs present in given text
 * @param {*} text Text to check in
 */

export const returnURLsInText = (text) => {
    const regexp = new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?([^ ])+")
    let txt = text
    let arr = []
    while (regexp.test(txt)) {
        let matched = regexp.exec(txt)[0]
        console.log(matched)
        arr.push(matched)
        txt = txt.replace(matched, '')
    }
    return arr
}

/**
 * Check if selected file is embeddable
 * @param {*} file File to check
 */

export const isEmbeddable = (file) => {
    const types = ['text/html']
    return !types.some(el => file.type === el)
}

/**
 * Add choosen class if condition matches
 * @param {*} state Condition required
 * @param {*} classe Class to add
 */

export const addClass = (state, classe) => {
    if (state) return classe
    else return 'un' + classe
}

/**
 * Reduce string between 0 and choosen length.
 * @param {*} string String to reduce
 * @param {*} maxLength Max length
 */

export const reduceString = (string, maxLength) => {
    if (string.length >= maxLength) {
        if (string.substring((maxLength - 1), maxLength) === " ") {
            let cleanSpaces = string.replace(string.substring((maxLength - 1), maxLength), "")
            string = cleanSpaces.substring(0, maxLength) + "..."
        }
        return string.substring(0, maxLength) + "..."
    } else return string
}

/**
 * Get différence between two number and add "+" before
 * @param {*} one First number
 * @param {*} two Second number
 */

export const getDifference = (one, two) => {
    return "+" + (two - one)
}

/**
 * Convert string in URL (remove accents, spaces and special chars)
 * @param {*} str String to convert
 */

export const convertStringToURL = (str) => {
    let URL = str.toLowerCase();
    URL = URL.charAt(0).toUpperCase() + URL.slice(1);
    URL = URL.replace(/[&#,+()$~%^.'":*?!;<>{}/\\\\]/g, " ")
    URL = URL.replace(/ +/g, " ")
    URL = URL.trim()
    URL = removeAccents(URL)
    URL = URL.replace(/ /g, "-")
    return URL
}

/**
 * Detect Enter key press.
 * @param {*} event 
 * @param {*} func Function to execute on ENTER key press
 */

export const handleEnterKey = (event, handler) => {
    if (event.key === 'Enter') {
        return handler()
    } else return
}

/**
 * Basique GeoJSON structure for leaflet.
 */

export const geoJSONStructure = (props) => {
    return {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": props
                }
            }
        ]
    }
}

/**
 * Split full geolocation ('43.2516, 5.23652') in latitude and longitude ['43.2516', '5.23652']
 * @param {*} string Geolocation to split
 */

export const geolocToFloat = (string) => {
    let lat = string.substr(0, string.indexOf(','))
    let lon = string.substr(string.indexOf(',') + 1, string.length)
    lat = parseFloat(lat)
    lon = parseFloat(lon)
    return [lat, lon]
}

/**
 * Download file function
 * @param {*} file File to download
 */

export const download = async (file) => {
    await axios({
        url: file.url,
        method: 'GET',
        responseType: 'blob'
    })
        .then(res => {
            const link = document.createElement('a')
            link.href = URL.createObjectURL(new Blob([res.data]))
            link.setAttribute('download', file.name)
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        })
}



let characterMap = {
    "À": "A",
    "Á": "A",
    "Â": "A",
    "Ã": "A",
    "Ä": "A",
    "Å": "A",
    "Ấ": "A",
    "Ắ": "A",
    "Ẳ": "A",
    "Ẵ": "A",
    "Ặ": "A",
    "Æ": "AE",
    "Ầ": "A",
    "Ằ": "A",
    "Ȃ": "A",
    "Ç": "C",
    "Ḉ": "C",
    "È": "E",
    "É": "E",
    "Ê": "E",
    "Ë": "E",
    "Ế": "E",
    "Ḗ": "E",
    "Ề": "E",
    "Ḕ": "E",
    "Ḝ": "E",
    "Ȇ": "E",
    "Ì": "I",
    "Í": "I",
    "Î": "I",
    "Ï": "I",
    "Ḯ": "I",
    "Ȋ": "I",
    "Ð": "D",
    "Ñ": "N",
    "Ò": "O",
    "Ó": "O",
    "Ô": "O",
    "Õ": "O",
    "Ö": "O",
    "Ø": "O",
    "Ố": "O",
    "Ṍ": "O",
    "Ṓ": "O",
    "Ȏ": "O",
    "Ù": "U",
    "Ú": "U",
    "Û": "U",
    "Ü": "U",
    "Ý": "Y",
    "à": "a",
    "á": "a",
    "â": "a",
    "ã": "a",
    "ä": "a",
    "å": "a",
    "ấ": "a",
    "ắ": "a",
    "ẳ": "a",
    "ẵ": "a",
    "ặ": "a",
    "æ": "ae",
    "ầ": "a",
    "ằ": "a",
    "ȃ": "a",
    "ç": "c",
    "ḉ": "c",
    "è": "e",
    "é": "e",
    "ê": "e",
    "ë": "e",
    "ế": "e",
    "ḗ": "e",
    "ề": "e",
    "ḕ": "e",
    "ḝ": "e",
    "ȇ": "e",
    "ì": "i",
    "í": "i",
    "î": "i",
    "ï": "i",
    "ḯ": "i",
    "ȋ": "i",
    "ð": "d",
    "ñ": "n",
    "ò": "o",
    "ó": "o",
    "ô": "o",
    "õ": "o",
    "ö": "o",
    "ø": "o",
    "ố": "o",
    "ṍ": "o",
    "ṓ": "o",
    "ȏ": "o",
    "ù": "u",
    "ú": "u",
    "û": "u",
    "ü": "u",
    "ý": "y",
    "ÿ": "y",
    "Ā": "A",
    "ā": "a",
    "Ă": "A",
    "ă": "a",
    "Ą": "A",
    "ą": "a",
    "Ć": "C",
    "ć": "c",
    "Ĉ": "C",
    "ĉ": "c",
    "Ċ": "C",
    "ċ": "c",
    "Č": "C",
    "č": "c",
    "C̆": "C",
    "c̆": "c",
    "Ď": "D",
    "ď": "d",
    "Đ": "D",
    "đ": "d",
    "Ē": "E",
    "ē": "e",
    "Ĕ": "E",
    "ĕ": "e",
    "Ė": "E",
    "ė": "e",
    "Ę": "E",
    "ę": "e",
    "Ě": "E",
    "ě": "e",
    "Ĝ": "G",
    "Ǵ": "G",
    "ĝ": "g",
    "ǵ": "g",
    "Ğ": "G",
    "ğ": "g",
    "Ġ": "G",
    "ġ": "g",
    "Ģ": "G",
    "ģ": "g",
    "Ĥ": "H",
    "ĥ": "h",
    "Ħ": "H",
    "ħ": "h",
    "Ḫ": "H",
    "ḫ": "h",
    "Ĩ": "I",
    "ĩ": "i",
    "Ī": "I",
    "ī": "i",
    "Ĭ": "I",
    "ĭ": "i",
    "Į": "I",
    "į": "i",
    "İ": "I",
    "ı": "i",
    "Ĳ": "IJ",
    "ĳ": "ij",
    "Ĵ": "J",
    "ĵ": "j",
    "Ķ": "K",
    "ķ": "k",
    "Ḱ": "K",
    "ḱ": "k",
    "K̆": "K",
    "k̆": "k",
    "Ĺ": "L",
    "ĺ": "l",
    "Ļ": "L",
    "ļ": "l",
    "Ľ": "L",
    "ľ": "l",
    "Ŀ": "L",
    "ŀ": "l",
    "Ł": "l",
    "ł": "l",
    "Ḿ": "M",
    "ḿ": "m",
    "M̆": "M",
    "m̆": "m",
    "Ń": "N",
    "ń": "n",
    "Ņ": "N",
    "ņ": "n",
    "Ň": "N",
    "ň": "n",
    "ŉ": "n",
    "N̆": "N",
    "n̆": "n",
    "Ō": "O",
    "ō": "o",
    "Ŏ": "O",
    "ŏ": "o",
    "Ő": "O",
    "ő": "o",
    "Œ": "OE",
    "œ": "oe",
    "P̆": "P",
    "p̆": "p",
    "Ŕ": "R",
    "ŕ": "r",
    "Ŗ": "R",
    "ŗ": "r",
    "Ř": "R",
    "ř": "r",
    "R̆": "R",
    "r̆": "r",
    "Ȓ": "R",
    "ȓ": "r",
    "Ś": "S",
    "ś": "s",
    "Ŝ": "S",
    "ŝ": "s",
    "Ş": "S",
    "Ș": "S",
    "ș": "s",
    "ş": "s",
    "Š": "S",
    "š": "s",
    "Ţ": "T",
    "ţ": "t",
    "ț": "t",
    "Ț": "T",
    "Ť": "T",
    "ť": "t",
    "Ŧ": "T",
    "ŧ": "t",
    "T̆": "T",
    "t̆": "t",
    "Ũ": "U",
    "ũ": "u",
    "Ū": "U",
    "ū": "u",
    "Ŭ": "U",
    "ŭ": "u",
    "Ů": "U",
    "ů": "u",
    "Ű": "U",
    "ű": "u",
    "Ų": "U",
    "ų": "u",
    "Ȗ": "U",
    "ȗ": "u",
    "V̆": "V",
    "v̆": "v",
    "Ŵ": "W",
    "ŵ": "w",
    "Ẃ": "W",
    "ẃ": "w",
    "X̆": "X",
    "x̆": "x",
    "Ŷ": "Y",
    "ŷ": "y",
    "Ÿ": "Y",
    "Y̆": "Y",
    "y̆": "y",
    "Ź": "Z",
    "ź": "z",
    "Ż": "Z",
    "ż": "z",
    "Ž": "Z",
    "ž": "z",
    "ſ": "s",
    "ƒ": "f",
    "Ơ": "O",
    "ơ": "o",
    "Ư": "U",
    "ư": "u",
    "Ǎ": "A",
    "ǎ": "a",
    "Ǐ": "I",
    "ǐ": "i",
    "Ǒ": "O",
    "ǒ": "o",
    "Ǔ": "U",
    "ǔ": "u",
    "Ǖ": "U",
    "ǖ": "u",
    "Ǘ": "U",
    "ǘ": "u",
    "Ǚ": "U",
    "ǚ": "u",
    "Ǜ": "U",
    "ǜ": "u",
    "Ứ": "U",
    "ứ": "u",
    "Ṹ": "U",
    "ṹ": "u",
    "Ǻ": "A",
    "ǻ": "a",
    "Ǽ": "AE",
    "ǽ": "ae",
    "Ǿ": "O",
    "ǿ": "o",
    "Þ": "TH",
    "þ": "th",
    "Ṕ": "P",
    "ṕ": "p",
    "Ṥ": "S",
    "ṥ": "s",
    "X́": "X",
    "x́": "x",
    "Ѓ": "Г",
    "ѓ": "г",
    "Ќ": "К",
    "ќ": "к",
    "A̋": "A",
    "a̋": "a",
    "E̋": "E",
    "e̋": "e",
    "I̋": "I",
    "i̋": "i",
    "Ǹ": "N",
    "ǹ": "n",
    "Ồ": "O",
    "ồ": "o",
    "Ṑ": "O",
    "ṑ": "o",
    "Ừ": "U",
    "ừ": "u",
    "Ẁ": "W",
    "ẁ": "w",
    "Ỳ": "Y",
    "ỳ": "y",
    "Ȁ": "A",
    "ȁ": "a",
    "Ȅ": "E",
    "ȅ": "e",
    "Ȉ": "I",
    "ȉ": "i",
    "Ȍ": "O",
    "ȍ": "o",
    "Ȑ": "R",
    "ȑ": "r",
    "Ȕ": "U",
    "ȕ": "u",
    "B̌": "B",
    "b̌": "b",
    "Č̣": "C",
    "č̣": "c",
    "Ê̌": "E",
    "ê̌": "e",
    "F̌": "F",
    "f̌": "f",
    "Ǧ": "G",
    "ǧ": "g",
    "Ȟ": "H",
    "ȟ": "h",
    "J̌": "J",
    "ǰ": "j",
    "Ǩ": "K",
    "ǩ": "k",
    "M̌": "M",
    "m̌": "m",
    "P̌": "P",
    "p̌": "p",
    "Q̌": "Q",
    "q̌": "q",
    "Ř̩": "R",
    "ř̩": "r",
    "Ṧ": "S",
    "ṧ": "s",
    "V̌": "V",
    "v̌": "v",
    "W̌": "W",
    "w̌": "w",
    "X̌": "X",
    "x̌": "x",
    "Y̌": "Y",
    "y̌": "y",
    "A̧": "A",
    "a̧": "a",
    "B̧": "B",
    "b̧": "b",
    "Ḑ": "D",
    "ḑ": "d",
    "Ȩ": "E",
    "ȩ": "e",
    "Ɛ̧": "E",
    "ɛ̧": "e",
    "Ḩ": "H",
    "ḩ": "h",
    "I̧": "I",
    "i̧": "i",
    "Ɨ̧": "I",
    "ɨ̧": "i",
    "M̧": "M",
    "m̧": "m",
    "O̧": "O",
    "o̧": "o",
    "Q̧": "Q",
    "q̧": "q",
    "U̧": "U",
    "u̧": "u",
    "X̧": "X",
    "x̧": "x",
    "Z̧": "Z",
    "z̧": "z",
};

let chars = Object.keys(characterMap).join('|')
let allAccents = new RegExp(chars, 'g')

/**
 * Remove all accents from string
 * @param {*} string String to remove accents from
 */

export const removeAccents = (string) => {
    return string.replace(allAccents, (match) => {
        return characterMap[match];
    })
}