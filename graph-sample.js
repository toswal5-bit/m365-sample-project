// Sample Microsoft Graph API call using JavaScript (Node.js)
const fetch = require('node-fetch');

async function getUserProfile(token) {
    const response = await fetch('https://graph.microsoft.com/v1.0/me', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    console.log(data);
}

// Note: Replace 'token' with a valid OAuth token before running
