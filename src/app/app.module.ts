import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//For profile
import { AddArticlesComponent } from './profile/add-articles/add-articles.component';
import { DashboardComponent } from './profile/dashboard/dashboard.component';
import { ShowArticleComponent } from './profile/show-article/show-article.component';
import { EditArticleComponent } from './profile/edit-article/edit-article.component';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FilterPipe } from './filter.pipe';
import { environment } from '../environments/environment';

import { InformationcenterComponent } from './informationcenter/informationcenter.component';
import { AddInforComponent } from './informationcenter/add-infor/add-infor.component';
import { EditInforComponent } from './informationcenter/edit-infor/edit-infor.component';
import { ShowInforComponent } from './informationcenter/show-infor/show-infor.component';
import { InfordashComponent } from './informationcenter/infordash/infordash.component';
import { UserauthComponent } from './userauth/userauth.component';
import { SigninComponent } from './userauth/signin/signin.component';

//Agroservices
import { AgroservicesComponent } from './middlemen/agroservices/agroservices.component';
import { AddAgroservicesComponent } from './middlemen/agroservices/add-agroservices/add-agroservices.component';
import { EditAgroservicesComponent } from './middlemen/agroservices/edit-agroservices/edit-agroservices.component';
import { AgroservicesdashComponent } from './middlemen/agroservices/agroservicesdash/agroservicesdash.component';
import { ShowAgroservicesComponent } from './middlemen/agroservices/show-agroservices/show-agroservices.component';

//Farmerpage
import { FarmerpageComponent } from './farmerpage/farmerpage.component';
import { AddFarmerpageComponent } from './farmerpage/add-farmerpage/add-farmerpage.component';
import { FarmerpagedashComponent } from './farmerpage/farmerpagedash/farmerpagedash.component';
import { EditFarmerpageComponent } from './farmerpage/edit-farmerpage/edit-farmerpage.component';
import { ShowFarmerpageComponent } from './farmerpage/show-farmerpage/show-farmerpage.component';

//Agroshops
import { AddAgroshopsComponent } from './middlemen/agroshops/add-agroshops/add-agroshops.component';
import { DashAgroshopsComponent } from './middlemen/agroshops/dash-agroshops/dash-agroshops.component';
import { EditAgroshopsComponent } from './middlemen/agroshops/edit-agroshops/edit-agroshops.component';
import { ShowAgroshopsComponent } from './middlemen/agroshops/show-agroshops/show-agroshops.component';

//Bankandinsurance
import { AddBaiComponent } from './middlemen/bankandinsurance/add-bai/add-bai.component';
import { DashBaiComponent } from './middlemen/bankandinsurance/dash-bai/dash-bai.component';
import { EditBaiComponent } from './middlemen/bankandinsurance/edit-bai/edit-bai.component';
import { ShowBaiComponent } from './middlemen/bankandinsurance/show-bai/show-bai.component';

//Discussionforum
import { AddDiscussComponent } from './discussionforum/add-discuss/add-discuss.component';
import { EditDiscussComponent } from './discussionforum/edit-discuss/edit-discuss.component';
import { DashDiscussComponent } from './discussionforum/dash-discuss/dash-discuss.component';
import { ShowDiscussComponent } from './discussionforum/show-discuss/show-discuss.component';


//Feedback and Complaint
import { AddFeedbackComponent } from './feedbacks-and-complains/add-feedback/add-feedback.component';


//MAP
import {AgmCoreModule} from '@agm/core';

//sidebar
import { SidebarComponent } from './sidebar/sidebar.component';

//weather
import { WeatherComponent } from './weather/weather.component';

//ads 
import { AddAdsComponent } from './advertisement/add-ads/add-ads.component';
import { SignUpComponent } from './userauth/sign-up/sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RatingComponent } from './feedbacks-and-complains/rating/rating.component';

import { ResetpasswordComponent } from './userauth/resetpassword/resetpassword.component';


import { AboutUsComponent } from './about-us/about-us.component';
import { SideiconsComponent } from './iconsfor/sideicons/sideicons.component';



@NgModule({
  declarations: [
    AppComponent,
    AddArticlesComponent,
    DashboardComponent,
    FilterPipe,
    ShowArticleComponent,
    EditArticleComponent,
    InformationcenterComponent,
    AddInforComponent,
    EditInforComponent,
    ShowInforComponent,
    InfordashComponent,
    UserauthComponent,
    SigninComponent,
    AgroservicesComponent,
    AddAgroservicesComponent,
    EditAgroservicesComponent,
    AgroservicesdashComponent,
    ShowAgroservicesComponent,
    FarmerpageComponent,
    AddFarmerpageComponent,
    FarmerpagedashComponent,
    EditFarmerpageComponent,
    ShowFarmerpageComponent,
    AddAgroshopsComponent,
    DashAgroshopsComponent,
    EditAgroshopsComponent,
    ShowAgroshopsComponent,
    AddBaiComponent,
    DashBaiComponent,
    EditBaiComponent,
    ShowBaiComponent,
    AddDiscussComponent,
    EditDiscussComponent,
    DashDiscussComponent,
    ShowDiscussComponent,
    AddFeedbackComponent,
    SidebarComponent,
    WeatherComponent,
    AddAdsComponent,
    SignUpComponent,
    HomepageComponent,
    RatingComponent,
    ResetpasswordComponent,
    AboutUsComponent,
    SideiconsComponent,
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyA5XkTRkqgOXU22mRkLHf6uIZld8Mh0nC8'

    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
