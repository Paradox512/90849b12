
const BASE_URL = "https://aircall-backend.onrender.com"

export async function getAllCalls() {
    try {
        const url = `${BASE_URL}/activities`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch(error) {
        console.error(error.message);
    }
}

export async function getCallById(id) {
    try {
        const url = `${BASE_URL}/activities/${id}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch(error) {
        console.error(error.message);
    }
}

export async function updateCallById(id, is_archived) {
    try {
        const url = `${BASE_URL}/activities/${id}`;
        const response = await fetch(url, {
            method: "PATCH",
            body: JSON.stringify({ is_archived }),
            headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
    } catch(error) {
        console.error(error.message);
    }
}

export async function resetAllCalls() {
    try {
        const url = `${BASE_URL}/reset`;
        const response = await fetch(url, { method: "PATCH" });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
    } catch(error) {
        console.error(error.message);
    }
}

export function getTimeOfDay(date) {
    let hour = date.getHours();
    let minute = date.getMinutes();
    let ampm = "AM";
    if(hour > 12){
        hour -= 12;
        ampm = "PM";
    }

    let formatted = `${hour}:`;
    if(minute < 10) formatted += "0";
    formatted += `${minute} ${ampm}`

    return formatted;
}

export function formatPhoneNumber(number) {
    number = number.toString();
    const length = number.length;
    if(length < 10) return number;
    let format = `${number.substring(length-4)}`;
    format = `${number.substring(length-4-3, length-4)} ${format}`;
    format = `(${number.substring(length-4-3-3, length-4-3)}) ${format}`;
    if(length > 10) {
        format = `+${number.substring(0, length-10)} ${format}`;
    }
    return format;
}

export function formatCallDuration(callDuration) {
    const seconds = callDuration % 60;
    callDuration = (callDuration - seconds) / 60;
    const minutes = callDuration % 60;
    callDuration = (callDuration - minutes) / 60;
    const hours = callDuration;

    let format = `${seconds} seconds`;
    if(minutes > 0) format = `${minutes} minutes, ${format}`;
    if(hours > 0) format = `${hours} hours, ${format}`;
    return format;
};

export function sameDayOfTheYear(date_a, date_b) {
    return date_a.getDate() !== date_b.getDate()
        || date_a.getMonth() !== date_b.getMonth()
        || date_a.getFullYear() !== date_b.getFullYear();
}

export function formateDate(date){
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    return date.toLocaleDateString("en-US", options);
}