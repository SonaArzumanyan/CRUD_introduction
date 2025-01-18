//fetch POST

async function fetchData() {
    try {
        console.log("Sending POST request...");
        const response = await fetch("http://localhost:3001", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: 'Arman',
            surname: "Vardanyan"
             })
        });
        
        if(!response.ok) {
            throw new Error(`HTTP error:${response.status}`);
        }
        // console.log(response);
        
        console.log('Response received...', response);
        const json = await response.json();
        console.log(JSON.stringify(json));
        console.log(json);
    } catch (error) {
        console.error('Error', error);
    }
}
fetchData();