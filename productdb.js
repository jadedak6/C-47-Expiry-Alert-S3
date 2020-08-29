class Productdata{
    constructor(){

    }

    updatedata(array){
    database.ref('/').update({
      productdata : array  
    })
    }

    getdata(){
     database.ref("productdata").on("value",data => {
        getproduct = data.val
     })
    }
}