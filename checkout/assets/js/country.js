document.addEventListener('DOMContentLoaded', function() {
   
    const apiUrl = 'https://restcountries.com/v3.1/all'; 

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                
                throw new Error('Network response was not ok');
            }
            return response.json();  
        })
        .then(countries => {
            
            console.log('Countries data:', countries);
            const countrySelect = document.getElementById('country');
            const defaultOption = document.createElement('option');
            defaultOption.textContent = 'Select a Country / Region';
            defaultOption.disabled = true;
            defaultOption.selected = true;
            countrySelect.appendChild(defaultOption);
            countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country.name.common; 
                option.textContent = country.name.common;  
                countrySelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching country data:', error);
        });
});



