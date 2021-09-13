const Offer = {
    // const declaring an object. const is faster than var; it's constant, not changing; can skip all dynamic stuff
    // or var 
    data() { 
        // pass function (returns an object) (make data lazy and save storage)
      return {
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
    }
  }
  
  Vue.createApp(Offer).mount('#offerApp')
//   mount = attach