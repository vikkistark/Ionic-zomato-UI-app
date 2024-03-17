import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicSwiper } from '@ionic/angular';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListViewComponent } from './listview-component/listview.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, FormsModule, IonicModule.forRoot(),RouterModule.forRoot([]) 
    // swiperModule
  ],
  declarations: [AppComponent, HelloComponent, ListViewComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
