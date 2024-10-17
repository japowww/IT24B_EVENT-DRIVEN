class Restaurantlist{
    constructor(dataUrl){
        this.dataUrl = dataUrl;
        this.restaurant = [];
        this.init()
    }

     async init(){
        await this.fetchData();
        this.renderRestaurantlist(this.restaurant);
        this.bindSearchEvent();
     }

     async fetchData(){
        try{
            const response = await fetch (this.dataUrl);
            this.restaurant = await response.json();
        }
        catch(Error){
            console.error(` Error ka dai`, error);
        }
     }

     renderRestaurantlist(restaurant){
         const restaurantlistcontainer = document.getElementById(`restaurantlist`);
         restaurantlistcontainer.innerHTML =  restaurant.map(restaurant => `<button class=" btn btn-primary style="margin-top: 15px" width: 25rem;
             ${restaurant.restaurant_name} | ${restaurant.restaurant_location} </button> <br>`).join('');    
     }

     bindSearchEvent(){
        const restaurantSearchBar = document.getElementById(`restaurantSearchBar`);
        const restaurantSearchListContainer = document.getElementById(`restaurantSearchList`);

        restaurantSearchBar.addEventListener(`input`, ()=>  {this.filterrestaurant(restaurantSearchBar.value, restaurantSearchListContainer);});
        
        this.renderRestaurantlist(this.restaurant, restaurantSearchListContainer);
     }

     filterrestaurant(query, restaurantSearchListContainer ){
        const filteredRestaurants = this.restaurant.filter( restaurant => {
            const RestaurantName = `${restaurant.restaurant_name} ${restaurant.restaurant_location}`;
            return RestaurantName.toLowerCase().includes(query, restaurantSearchListContainer());

        });

        restaurantSearchListContainer.innerHTML =  ``;

        this.renderRestaurantlist(filteredRestaurants, restaurantSearchListContainer);

     }
}
const resList = new Restaurantlist