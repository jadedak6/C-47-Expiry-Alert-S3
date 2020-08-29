  
class Form{
    constructor(){
    //Array to store the details
    this.productdetails = [];
    
    //Deatils for the product
    this.nameproduct = createInput("Name of the product");
    this.expirymonth = createInput("Expiry month");
    this.expiryyear = createInput("Expiry year");
    this.button = createButton("Add product");
    }
    
    display(){
        
        //Positions of inputs and button
        this.nameproduct.position(100,200);
        this.expirymonth.position(300,200);
        this.expiryyear.position(500,200);
        this.button.position(100,230);
    
        //Mouse pressed function for the button
        this.button.mousePressed(()=>{
            var productname = this.nameproduct.value();
        var month1 = this.expirymonth.value();
        var year1 = this.expiryyear.value(); 
        
        if(year1<=year && month1<=month){
        swal({
            title: `This Product is already expired${"\n"}Can't be added`,
            text: "Please add some other product",
            confirmButtonText: "Ok",
          });
       }
        else{
      
        //Variables for each input     
        var details = [productname, month1, year1];
        this.productdetails.push(details);
        } 
        })
    
    }
    }