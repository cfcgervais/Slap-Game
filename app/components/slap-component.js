angular.module('slap')
    .component('slapComponent', {
        templateUrl: 'app/components/slap.html',
        controller: SlapController,
    })
    
function SlapController(){
    this.badHealth = 0;
    this.goodHealth = 0;
    this.badImage = "";
    this.goodImage = "";
    this.message = "";
    this.health1 = 100;
    this.health2 = 150;
    this.health3 = 200;
    this.pickCheck1 = 0;
    this.pickCheck2 = 0;
    this.switchCheck = 0;
    this.class = "";
    this.class2 = "";
    
    this.shield = function(){
        if(this.goodHealth > 100){
            this.class = "shield"
        }else{
            this.class = ""
        }
    }

    this.shield2 = function(){
        if(this.badHealth > 100){
            this.class2 = "shield2"
        }else{
            this.class2 = ""
        }
    }

    this.reset = function(){
        if(this.goodImage == "http://images6.fanpop.com/image/photos/32400000/Chapter-art-the-half-blood-prince-32419712-414-500.jpg"){
            this.goodHealth = this.health1
        }
        if(this.goodImage == "snape.jpg"){
            this.goodHealth = this.health2
        }
        if(this.goodImage == "dumblydore.jpg"){
            this.goodHealth = this.health3
        }
        if(this.badImage == "malfoy.jpg"){
            this.badHealth = this.health1
        }
        if(this.badImage == "umbridge.jpg"){
            this.badHealth = this.health2
        }
        if(this.badImage == "voldy.jpg"){
            this.badHealth = this.health3
        }
        this.message = "";
        this.pickCheck1 = 1;
        this.pickCheck2 = 1;
        this.switchCheck = 0;
        this.shield();
        this.shield2();
    }
    
    this.slap = function(){
        if(this.pickCheck1 == 0 || this.pickCheck2 == 0){
            this.message = "You must choose characters before you commence battle!"
            return
        }else if(this.goodHealth == 0){
            return
        }else{
            this.message = ""
        }
        this.badHealth -= 10;
        if(this.badHealth < 1){
           this.badHealth = 0;
           this.message = "You Won! :)";
        }
        this.draco()
        this.dolores()
        this.tom()
        this.switchCheck = 11;
        this.shield();
        this.shield2();
        return this.badHealth;
    }

    this.punch = function(){
        if(this.pickCheck1 == 0 || this.pickCheck2 == 0){
            this.message = "You must choose characters before you commence battle!"
            return
        }else if(this.goodHealth == 0){
            return
        }else{
            this.message = ""
        }
        this.badHealth -= 20;
        if(this.badHealth < 1){
            this.badHealth = 0;
            this.message = "You Won! :)";
        }
        this.draco()
        this.dolores()
        this.tom()
        this.switchCheck = 11;
        this.shield();
        this.shield2();
        return this.badHealth;
    }
        
    this.kick = function(){
        if(this.pickCheck1 == 0 || this.pickCheck2 == 0){
            this.message = "You must choose characters before you commence battle!"
            return
        }else if(this.goodHealth == 0){
            return
        }else{
            this.message = ""
        }
        this.badHealth -= 50;
        if(this.badHealth < 1){
            this.badHealth = 0;
            this.message = "You Won! :)";
        }
        this.draco()
        this.dolores()
        this.tom()
        this.switchCheck = 11;
        this.shield();
        this.shield2();
        return this.badHealth;
    }
     
    this.hadouken = function(){
        if(this.pickCheck1 == 0 || this.pickCheck2 == 0){
            this.message = "You must choose characters before you commence battle!"
            return
        }else if(this.goodHealth == 0){
            return
        }else{
            this.message = ""
        }
        this.badHealth -= this.badHealth;
        if(this.badHealth < 1){
            this.badHealth -= 0;
            this.message = "You Won! :)";
        }
        this.draco()
        this.dolores()
        this.tom()
        this.switchCheck = 11;
        this.shield();
        this.shield2();
        return this.badHealth;  
    }
      
    this.draco = function(){
        if(this.badHealth < 1){
            return
        }
        if(this.badImage == "malfoy.jpg"){
            this.goodHealth -= 20;
            if(this.goodHealth < 1){
                this.goodHealth = 0;
                this.message = "You Died! :(";
            }
        }else{
            return
        }
    }

    this.dolores = function(){
        if(this.badHealth < 1){
            return
        }
        if(this.badImage == "umbridge.jpg"){
            this.goodHealth -= 35;
            if(this.goodHealth < 1){
                this.goodHealth = 0;
                this.message = "You Died! :(";
            }
        }else{
            return
        }
    }

    this.tom = function(){
        if(this.badHealth < 1){
            return
        }
        if(this.badImage == "voldy.jpg"){
            this.goodHealth = 0;
            if(this.goodHealth < 1){
                this.goodHealth = 0;
                this.message = "You Died! :(";
            }
        }else{
            return
        }
    }
   
    this.dumbledore = function(){
        this.pickCheck1 = 11;
        if(this.switchCheck < 1){
            this.goodImage = "dumblydore.jpg";
            this.goodHealth = this.health3;
        }else{
            this.message = "Too late now!"
        }
        this.shield();
    }
        
     this.harry = function(){
         this.pickCheck1 = 11;
         if(this.switchCheck < 1){
            this.goodHealth = this.health1;
            this.goodImage = "http://images6.fanpop.com/image/photos/32400000/Chapter-art-the-half-blood-prince-32419712-414-500.jpg"
         }else{
            this.message = "Too late now!"
         }
         this.shield();
    }
            
     this.snape = function(){
         this.pickCheck1 = 11;
         if(this.switchCheck < 1){
            this.goodHealth = this.health2;
            this.goodImage = "snape.jpg"
         }else{
            this.message = "Too late now!"
         }
         this.shield();
    }
            
     this.malfoy = function(){
         this.pickCheck2 = 11;
         if(this.switchCheck < 1){
            this.badHealth = this.health1;
            this.badImage = "malfoy.jpg"

         }else{
            this.message = "Too late now!"
         }
         this.shield2();
    }
           
     this.umbridge = function(){
         this.pickCheck2 = 11;
         if(this.switchCheck < 1){
            this.badHealth = this.health2;
            this.badImage = "umbridge.jpg"
         }else{
            this.message = "Too late now!"
         }
         this.shield2();
    }
           
     this.voldemort = function(){
         this.pickCheck2 = 11;
         if(this.switchCheck < 1){
            this.badImage = "voldy.jpg"
            this.badHealth = this.health3;
         }else{
            this.message = "Too late now!"
         }
         this.shield2();
    }
}









            
     
            
           

    

        
        
        





 
    


       
        









    



