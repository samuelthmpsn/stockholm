export function refreshAccessToken() {
    const clientId = "1d3d22f7e84e437cacd79186c20d6ebd";
    const clientSecret = "18ca3ce00cfb4c63a0bb7cb0424c2568";
    const clientCreds = `${clientId}:${clientSecret}`;

    const encodedCredentials = btoa(clientCreds);

    const baseUrl = "https://accounts.spotify.com";
    const endpoint = "/api/token";

    return fetch(baseUrl + endpoint, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${encodedCredentials}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials'
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        })
        .then(data => `Bearer ${data.access_token}`)
        .catch(error => {
            throw new Error(error.message);
        });
}
