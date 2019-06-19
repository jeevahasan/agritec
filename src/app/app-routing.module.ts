import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddArticlesComponent } from './profile/add-articles/add-articles.component';
import { EditArticleComponent } from './profile/edit-article/edit-article.component';
import { ShowArticleComponent } from './profile/show-article/show-article.component';
import { DashboardComponent } from './profile/dashboard/dashboard.component';

import { InformationcenterComponent } from './informationcenter/informationcenter.component';
import { AddInforComponent } from './informationcenter/add-infor/add-infor.component';
import { EditInforComponent } from './informationcenter/edit-infor/edit-infor.component';
import { ShowInforComponent } from './informationcenter/show-infor/show-infor.component';
import { InfordashComponent } from './informationcenter/infordash/infordash.component';
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

import { AuthGuard } from './userauth/signin/auth.guard';
import { Profileguard } from './userauth/signin/profile.guard';

//sidebar
import { SidebarComponent } from './sidebar/sidebar.component';

//weather
import { WeatherComponent } from './weather/weather.component';

//ads
import { AddAdsComponent } from './advertisement/add-ads/add-ads.component';

import { SignUpComponent } from './userauth/sign-up/sign-up.component';

import { HomepageComponent } from './homepage/homepage.component';

import { ResetpasswordComponent } from './userauth/resetpassword/resetpassword.component';

import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  { path: 'auth', component: SigninComponent },
  { path: 'add', component: AddArticlesComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditArticleComponent, canActivate: [AuthGuard] },
  { path: 'article/:id', component: ShowArticleComponent, canActivate: [AuthGuard] },
  { path: 'viewprofile', component: DashboardComponent, canActivate: [AuthGuard] },

  //Informationcenter
  { path: 'addinfor', component: AddInforComponent, canActivate: [AuthGuard] },
  { path: 'editinfor/:id', component: EditInforComponent, canActivate: [AuthGuard] },
  { path: 'informationcenter/:id', component: ShowInforComponent, canActivate: [AuthGuard] },
  { path: 'informationdash', component: InfordashComponent, canActivate: [AuthGuard] },


  //Agroservices
  { path: 'addagroservices', component: AddAgroservicesComponent, canActivate: [AuthGuard]},
  { path: 'editagroservices/:id', component: EditAgroservicesComponent, canActivate: [AuthGuard]},
  { path: 'agroservicesdash', component: AgroservicesdashComponent, canActivate: [AuthGuard]},
  { path: 'showagroservices/:id', component: ShowAgroservicesComponent, canActivate: [AuthGuard]},

  //Farmerpage
  { path: 'addfarmerpage', component: AddFarmerpageComponent, canActivate: [AuthGuard]},
  { path: 'editfarmerpage/:id', component: EditFarmerpageComponent, canActivate: [AuthGuard]},
  { path: 'farmerpagedashboard', component: FarmerpagedashComponent, canActivate: [AuthGuard]},
  { path: 'viewfarmerpage/:id', component: ShowFarmerpageComponent, canActivate: [AuthGuard]},

    //Agroshops
    { path: 'addagroshops', component: AddAgroshopsComponent, canActivate: [AuthGuard]},
    { path: 'editagroshops/:id', component: EditAgroshopsComponent, canActivate: [AuthGuard]},
    { path: 'agroshopsdash', component: DashAgroshopsComponent, canActivate: [AuthGuard]},
    { path: 'showagroshops/:id', component: ShowAgroshopsComponent, canActivate: [AuthGuard]},

    //Bankandinsurance
    { path: 'addbankandinsurance', component: AddBaiComponent, canActivate: [AuthGuard]},
    { path: 'editbankandinsurance/:id', component: EditBaiComponent, canActivate: [AuthGuard]},
    { path: 'bankandinsurancedash', component: DashBaiComponent, canActivate: [AuthGuard]},
    { path: 'showbankandinsurance/:id', component: ShowBaiComponent, canActivate: [AuthGuard]},
    
    //Discussionforum
    { path: 'adddiscussionforum', component: AddDiscussComponent, canActivate: [AuthGuard]},
    { path: 'editdiscussionforum/:id', component: EditDiscussComponent, canActivate: [AuthGuard]},
    { path: 'discussionforumdash', component: DashDiscussComponent, canActivate: [AuthGuard]},
    { path: 'showdiscussionforum/:id', component: ShowDiscussComponent, canActivate: [AuthGuard]},

    //Feedback and Complaint
    { path: 'addfeedbacksandcomplaint', component: AddFeedbackComponent, canActivate: [AuthGuard]},

    //sidebar
    // { path: 'sidebae', component: SidebarComponent, canActivate: [AuthGuard]},
    { path: '', component: HomepageComponent},
    { path: 'home', component: HomepageComponent},

    //weather
    { path: 'weather', component: WeatherComponent, canActivate: [AuthGuard]},

    //ads
    { path: 'ads', component: AddAdsComponent, canActivate: [AuthGuard]},

    { path: 'sign-up', component: SignUpComponent, canActivate: [Profileguard]},

    { path: 'homepage', component: HomepageComponent},

    { path: 'resetpassword', component: ResetpasswordComponent},

    { path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard,Profileguard]

})
export class AppRoutingModule { }
