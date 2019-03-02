import { Component, NgModule } from '@angular/core';
import { NavController, IonicPageModule, IonicPage } from 'ionic-angular';
import { ShoppingListService } from '../../services/shoppinglist/shopping-list.service';
import { Observable } from 'rxjs';
import { Item } from '../../models/item/item.model';
import { map } from 'rxjs/operators';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$:Observable<Item[]>;
  
  constructor(public navCtrl: NavController,
    private shopping:ShoppingListService) {
     
       this.shoppingList$=this.shopping
       .getShoppingList()  //returns DB LIST
       .snapshotChanges() //key and value 
       .pipe(map( changes =>{
          return changes.map (c=>(
            {
              key: c.payload.key,
              ...c.payload.val(),
            }
          ))
       }
       ));
                          
                         
  }

  //for every object in the list we have key: Name value: Ipadpro

}
