import { NgModule } from '@angular/core';
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { EditShoppingItemPage } from './edit-shopping-item';

@IonicPage()
@NgModule({
  declarations: [
    EditShoppingItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditShoppingItemPage),
  ],
})
export class EditShoppingItemPageModule {}
