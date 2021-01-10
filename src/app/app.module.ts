import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ChildContentComponent } from './components/child-content/child-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ChildContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    ],
    providers: [
      Title
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
