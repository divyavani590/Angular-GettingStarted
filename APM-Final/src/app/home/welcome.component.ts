import { Component } from '@angular/core';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  public pageTitle = 'Create Your Dream Pizza !!!';
  currentStep = 'step1';
  cheeseImg = "./assets/images/topping/cheese_mozz_ML.png";
  pizzaImg = "./assets/images/crust/crust_pan_NoFinish.png";
  meatTops = [];
  veggieTops = [];
  showMeatsReview=false;
  showVeggiesReview=false;
  crustTypes = [
    {
      "id":1,
      "crustDesc": "Original Pan® Pizza",
      "crustImg": "./assets/images/sidebar/icon_crust_pan.png",
      "crustFullImg": "./assets/images/crust/crust_pan_NoFinish.png",
      "selected":true
    },
    {
      "id":2,
      "crustDesc": "Hand Tossed Pizza",
      "crustImg": "./assets/images/sidebar/icon_crust_ht.png",
      "crustFullImg": "./assets/images/crust/crust_ht_NoFinish.png",
      "selected":false
    },
    {
      "id":3,
      "crustDesc": "Thin ‘N Crispy",
      "crustImg": "./assets/images/sidebar/icon_crust_thin.png",
      "crustFullImg": "./assets/images/crust/crust_thin_NoFinish.png",
      "selected":false
    },
    {
      "id":4,
      "crustDesc": "Original Stuffed Crust",
      "crustImg": "./assets/images/sidebar/icon_crust_sc.png",
      "crustFullImg": "./assets/images/crust/crust_sc_NoFinish.png",
      "selected":false
    },
    {
      "id":5,
      "crustDesc": "Ultimate Cheesy Crust",
      "crustImg": "./assets/images/sidebar/icon_crust_UCC.png",
      "crustFullImg": "./assets/images/crust/crust_UCC_ButteryBlend.png",
      "selected":false
    }
  ]

  meatTypes = [
    {
      "id":1,
      "meatDesc": "Bacon",
      "meatImg": "./assets/images/sidebar/icon_topping_Bacon.png",
      "meatFullImg": "./assets/images/topping/topping_Bacon_ML_reg.png",
      "selected":false
    },
    {
      "id":2,
      "meatDesc": "Beef",
      "meatImg": "./assets/images/sidebar/icon_topping_Beef.png",
      "meatFullImg": "./assets/images/topping/topping_Beef_ML_reg.png",
      "selected":false
    },
    {
      "id":3,
      "meatDesc": "Grilled Chicken",
      "meatImg": "./assets/images/sidebar/icon_topping_Chicken.png",
      "meatFullImg": "./assets/images/topping/topping_Chicken_ML_reg.png",
      "selected":false
    },
    {
      "id":4,
      "meatDesc": "Ham",
      "meatImg": "./assets/images/sidebar/icon_topping_Ham.png",
      "meatFullImg": "./assets/images/topping/topping_Ham_ML_reg.png",
      "selected":false
    },
    {
      "id":5,
      "meatDesc": "Meatball",
      "meatImg": "./assets/images/sidebar/icon_topping_Meatball.png",
      "meatFullImg": "./assets/images/topping/topping_Meatball_ML_reg.png",
      "selected":false
    },
    {
      "id":6,
      "meatDesc": "Pepperoni",
      "meatImg": "./assets/images/sidebar/icon_topping_Pepperoni.png",
      "meatFullImg": "./assets/images/topping/topping_Pepperoni_ML_reg.png",
      "selected":false
    },
    {
      "id":7,
      "meatDesc": "Pork",
      "meatImg": "./assets/images/sidebar/icon_topping_Pork.png",
      "meatFullImg": "./assets/images/topping/topping_Pork_ML_reg.png",
      "selected":false
    },
    {
      "id":8,
      "meatDesc": "Italian Sausage",
      "meatImg": "./assets/images/sidebar/icon_topping_ItalianSausage.png",
      "meatFullImg": "./assets/images/topping/topping_ItalianSausage_ML_reg.png",
      "selected":false
    }
  ];

  veggieTypes = [
    {
      "id":1,
      "veggieDesc": "Mushrooms",
      "veggieImg": "./assets/images/sidebar/icon_topping_Mushroom.png",
      "veggieFullImg": "./assets/images/topping/topping_Mushroom_ML_reg.png",
      "selected":false
    },
    {
      "id":2,
      "veggieDesc": "Roasted Spinach",
      "veggieImg": "./assets/images/sidebar/icon_topping_Spinach_fresh.png",
      "veggieFullImg": "./assets/images/topping/topping_Spinach_Fresh_ML_reg.png",
      "selected":false
    },
    {
      "id":3,
      "veggieDesc": "Red Onions",
      "veggieImg": "./assets/images/sidebar/icon_topping_Onion_Red.png",
      "veggieFullImg": "./assets/images/topping/topping_Onion_red_ML_reg.png",
      "selected":false
    },
    {
      "id":4,
      "veggieDesc": "Mediterranean Black Olives",
      "veggieImg": "./assets/images/sidebar/icon_topping_Olive_black.png",
      "veggieFullImg": "./assets/images/topping/topping_Olives_black_ML_reg.png",
      "selected":false
    },
    {
      "id":5,
      "veggieDesc": "Green Bell Peppers",
      "veggieImg": "./assets/images/sidebar/icon_topping_GreenBellPepper.png",
      "veggieFullImg": "./assets/images/topping/topping_GreenBellPepper_ML_reg.png",
      "selected":false
    },
    {
      "id":6,
      "veggieDesc": "Banana Peppers",
      "veggieImg": "./assets/images/sidebar/icon_topping_BananaPepper.png",
      "veggieFullImg": "./assets/images/topping/topping_BananaPepper_ML_reg.png",
      "selected":false
    },
    {
      "id":7,
      "veggieDesc": "Pineapple",
      "veggieImg": "./assets/images/sidebar/icon_topping_Pineapple.png",
      "veggieFullImg": "./assets/images/topping/topping_Pineapple_ML_reg.png",
      "selected":false
    },
    {
      "id":8,
      "veggieDesc": "Jalapeño Peppers",
      "veggieImg": "./assets/images/sidebar/icon_topping_Jalapeno.png",
      "veggieFullImg": "./assets/images/topping/topping_Jalepeno_ML_reg.png",
      "selected":false
    },
    {
      "id":9,
      "veggieDesc": "Roma Tomatoes",
      "veggieImg": "./assets/images/sidebar/icon_topping_Tomato.png",
      "veggieFullImg": "./assets/images/topping/topping_Tomato_ML_reg.png",
      "selected":false
    }
  ]

  selectPizza(crust){
    this.crustTypes.forEach((item) => {
      item.selected = false;
    });
    crust.selected = true;
    this.pizzaImg = crust.crustFullImg;
  }

  selectMeatTops(meat){
    meat.selected = true;
    this.meatTops.push(meat);
  }

  selectVeggieTops(veggie){
    veggie.selected = true;
    this.veggieTops.push(veggie);
  }

  createReview(){
    this.meatTypes.forEach((item) => {
      if(item.selected == true)
      this.showMeatsReview = true;
    });
    this.veggieTypes.forEach((item) => {
      if(item.selected == true)
      this.showVeggiesReview = true;
    });
   
  }
}
