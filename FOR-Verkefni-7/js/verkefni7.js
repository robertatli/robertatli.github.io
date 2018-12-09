moment.locale('is');
const app = new Vue({
  el: '#app',
  data: {
    products: [],
    search: ''
  },
  components: {
  	vuejsDatepicker
  },
  created () {
    fetch('https://apis.is/concerts')
      .then(response => response.json())
      .then(json => {
        this.products = json.results
      })
  },
  computed:{
  	filteredConcerts: function(){
  		return this.products.filter((product) =>{
  			if (product.eventDateName.toLowerCase().trim().match(this.search.toLowerCase().trim())) {
  				return product.eventDateName.toLowerCase().trim().match(this.search.toLowerCase().trim());
  			}else {
  				console.log(moment(product.dateOfShow).format('Do MMM [kl:] h:mm').toLowerCase().trim().match(this.search.toLowerCase().trim()));
  			}
  		});
  	}
  },
  filters:{
  	moment: function(date){
  		return moment(date).format('Do MMM [kl:] h:mm')
  	}
  }
})