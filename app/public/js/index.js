const Offer = {
    // const declaring an object. const is faster than var; it's constant, not changing; can skip all dynamic stuff
    // or var 
    data() { 
        // pass function (returns an object) (make data lazy and save storage)
      return {
        "person": {},
        "offer":[
        {
            "id": 1,
            "name": "Ashley Chen",
            "salary": 100000,
            "bonus": 20000,
            "company": "Google",
            "offerDate": "2021-09-20"
        },
        {
            "id": 2,
            "name": "Ashley Chen",
            "salary": 100000,
            "bonus": 20000,
            "company": "Google",
            "offerDate": "2021-09-20"
        }
        ]
    }
    },
    methods: {
    fetchuserData() {
      // A
    fetch('https://randomuser.me/api/') 
    // fetch the url, a promise object
    .then(response => response.json() )
    // put the response (promise object) into json format (json object)
    .then( (responseJson) => {
      // another function to print in the function
      console.log(responseJson);
      // print in the console
// C
      this.person = responseJson.results[0];
      // random user 1st the result store into person


    })
    .catch( (err) => {
      // otherwise, return error
      console.error(err);
    })
    // B
    }
  },
    created() {
    this.fetchuserData();
  }  
}
  Vue.createApp(Offer).mount('#offerApp')
//   mount = attach
