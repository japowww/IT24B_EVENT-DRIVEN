class Restaurantlist{
    constructor(dataUrl){
        this.dataUrl = dataUrl;
        this.food = [];
        this.init()
    }

     async init(){
        await this.fetchData();
        this.renderRestaurantlist(this.food);
        this.bindSearchEvent();
     }

     async fetchData(){
        try{
            const response = await fetch (this.dataUrl);
            this.food = await response.json();
        }
        catch(Error){
            console.error(` Error ka dai`, error);
        }
     }

     renderRestaurantlist(food){
         const foodlistcontainer = document.getElementById(`foodlist`);
         foodlistcontainer.innerHTML =  food.map(restaurant => `<button class=" btn btn-primary style="margin-top: 15px" width: 25rem;
             ${restaurant.restaurant_name} | ${restaurant.} </button> <br>`).join('');    
     }

     bindSearchEvent(){
        
     }
}