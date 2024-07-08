import fetch from "node-fetch"

/* 
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 */

export async function getCsrfToken(Cookie) {
    try {
        const response = await fetch(`https://auth.roblox.com/v2/logout`, {
            method: "POST",
            headers: {
                "Cookie": `.ROBLOSECURITY=${Cookie}`
            },
        });
        const csrfToken = response.headers.get('x-csrf-token');
        return csrfToken;
    } catch (error) {
        console.error("Error Getting X-CSRF-TOKEN:", error.message);
        return null;
    }  
}

export async function uploadGame(placeid, fileData, csrfToken, Cookie) {
    try {
        const response = await fetch(`https://data.roblox.com/Data/Upload.ashx?assetid=${placeid}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/xml",
                "Cookie": `.ROBLOSECURITY=${Cookie}`,
                "x-csrf-token": csrfToken
            },
            body: fileData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.text();
        console.log("Upload response:", result);
        return result;
    } catch (error) {
        console.error("Error Uploading Game:", error.message);
        return null;
    }
}
