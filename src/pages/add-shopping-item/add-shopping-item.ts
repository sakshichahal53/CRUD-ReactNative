import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Item} from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shoppinglist/shopping-list.service';
import { HomePage } from '../home/home';
import { ToastService } from '../../services/toast.service';

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

  item:Item ={
    name:"",
    quantity:undefined,
    price:undefined
     
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private shopping:ShoppingListService,
    private toast:ToastService) {
  }


  addItem(item:Item)
  {
     this.shopping.addItem(item).then(ref=>{
        console.log(ref.key);
        this.toast.show(`${item.name} added!`) 
        this.navCtrl.setRoot('HomePage',{key:ref.key})
     });
  }
}
