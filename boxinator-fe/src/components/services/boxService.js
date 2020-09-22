export const boxService = {
    addBox,
    getAllBoxes
};

function addBox(box) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: box
    };
    console.log(box)
    return fetch('http://localhost:8090/box', requestOptions).then(handleResponse, handleError);
}

function getAllBoxes() {
    const requestOptions = {
        method: 'GET',
    }

    return fetch('http://localhost:8090/boxes', requestOptions).then(handleResponse, handleError);
}

function handleResponse(response) {
    return new Promise((resolve, reject) => {
        if(response.ok) {
            var contentType = response.headers.get("content-type");
            if(contentType && contentType.includes("application/json")) {
                response.json().then(json => resolve(json));
            } else {
                resolve();
            }
        } else {
            response.text().then(text => reject(text));
        } 
    });
}

function handleError(error) {
    return Promise.reject(error && error.message);
}