
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