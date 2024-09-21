async function add(event)
{
    event.preventDefault();
    let item=document.querySelector("#addItem").value; 
    console.log(item);

    try {
        const response = await fetch('/number', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ number: numberToSend })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        let newData = JSON.stringify(data);
         
        document.querySelector("#digitMessage").style.color="green";
        document.querySelector("#digitMessage").innerHTML = `Response from server is ${data.number}`
    } catch (error) {
        console.error('Error:', error);
    }

}

document.querySelector("#seller").addEventListener("submit", add);