
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