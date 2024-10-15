// Fetch the addresses from the JSON file and display them
fetch('addresses.json')
    .then(response => response.json())
    .then(data => {
        const addressList = document.getElementById('address-list');
        data.forEach(address => {
            const addressDiv = document.createElement('div');
            addressDiv.classList.add('address');
            addressDiv.innerText = address;
            addressList.appendChild(addressDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching addresses:', error);
    });
