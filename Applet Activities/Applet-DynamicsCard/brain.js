class Restaurantlist {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.restaurant = [];
        this.init();
    }

    async init() {
        await this.fetchData();
        this.renderRestaurantlist(this.restaurant);
        this.bindSearchEvent();
    }

    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            this.restaurant = await response.json();
        } catch (error) {
            console.error(`Error ka dai:`, error);
        }
    }

    renderRestaurantlist(resto, container) {
        if (!container) {
            container = document.getElementById(`restaurantlist`);
        }
        container.innerHTML = resto.map(restaurant => `
            <button class="btn btn-primary" style="margin-top: 15px; width: 25rem;">
                ${restaurant.restaurant_name} | ${restaurant.restaurant_location}
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

    filterrestaurant(query, restaurantSearchListContainer) {
        const filteredRestaurants = this.restaurant.filter(restaurant => {
            const restaurantName = `${restaurant.restaurant_name} ${restaurant.restaurant_location}`;
            return restaurantName.toLowerCase().includes(query.toLowerCase());
        });

        this.renderRestaurantlist(filteredRestaurants, restaurantSearchListContainer);
    }
}

const resList = new Restaurantlist(`jajs.json`);
