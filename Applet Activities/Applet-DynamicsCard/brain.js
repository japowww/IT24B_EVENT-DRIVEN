class Restaurant {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.RESTO = [];
        this.init();
    }

    async init() {
        await this.fetchData();
        this.renderRestaurant(this.RESTO);
        this.bindSearchEvent();
    }

    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            this.RESTO = await response.json();
        } catch (error) {
            console.error(`Error ka dai:`, error);
        }
    }

   
    renderRestaurant(restos, container = document.getElementById('resList')) {
        container.style.display = 'flex';        
        container.style.flexDirection = 'column'; 
        container.style.alignItems = 'center'; 


        container.innerHTML = restos.map(restaurant => `
            <button class="btn btn-primary" style="margin-top: 15px; width: 25rem; background-color: white;  color: Black;    border: #373A42;  box-shadow: #373A42;"  >
                <strong>Name:</strong> ${restaurant.restaurant_name}<br>
         <strong>Location:</strong> ${restaurant.restaurant_location}
        </button><br>
        `).join('');
    }

    bindSearchEvent() {
        const restaurantSearchBar = document.getElementById(`restaurantSearchBar`);
        const restaurantSearchListContainer = document.getElementById(`restaurantSearchList`);

        restaurantSearchBar.addEventListener(`input`, () => {
            this.filterrestaurant(restaurantSearchBar.value, restaurantSearchListContainer);
        });
    }

    filterRestaurant(query, restaurantSearchListContainer) {
        const filteredRestaurants = this.RESTO.filter(restaurant => {
            const restaurantName = `${restaurant.restaurant_name} ${restaurant.restaurant_location}`;
            return restaurantName.toLowerCase().includes(query.toLowerCase());
        });

        this.renderRestaurantlist(filteredRestaurants, restaurantSearchListContainer);
    }
}

const resList = new Restaurant(`jajs.json`);
