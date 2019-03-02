import { NgModule } from '@angular/core';
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { AddShoppingItemPage } from './add-shopping-item';

@IonicPage()
@NgModule({
  declarations: [
    AddShoppingItemPage
  ],
  imports: [
    IonicPageModule.forChild(AddShoppingItemPage),
  ],
})
export class AddShoppingItemPageModule {}
