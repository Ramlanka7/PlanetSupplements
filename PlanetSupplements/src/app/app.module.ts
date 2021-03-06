﻿import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {
  MdButtonModule, MdCheckboxModule, MdInputModule, MdCardModule,
  MdSelectModule, MdMenuModule, MdTabsModule, MdProgressSpinnerModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { PhonePipe } from 'app/pipes/phonepipe/phone.pipe';
import { Angular2SocialLoginModule } from 'angular2-social-login';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'product/:productName/:id', component: ProductComponent },
  { path: ':productName', component: ProductComponent },
  { path: 'SportsNutrition', component: ProductComponent },
  { path: 'MuscleBuilders', component: ProductComponent },
  { path: 'Protien', component: ProductComponent },
  { path: 'WeightGain', component: ProductComponent },
  { path: 'DietEnergey', component: ProductComponent },
  { path: 'HealthOils', component: ProductComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

const providers = {
  'google': {
    'clientId': '55565887153-87jh8k8s5qq46hg9csmd18pvchmgcdvl.apps.googleusercontent.com'
  },
  'facebook': {
    'clientId': '1674757496165279',
    'apiVersion': 'v2.8'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    PhonePipe,
    ProductComponent,
    CartComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    CheckoutComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: false }),
    BrowserModule, FormsModule, HttpModule, Angular2SocialLoginModule,
    MdButtonModule, MdCheckboxModule, MdInputModule, MdCardModule, MdSelectModule,
    BrowserAnimationsModule, MdMenuModule, MdTabsModule, MdProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts((providers) as any);
