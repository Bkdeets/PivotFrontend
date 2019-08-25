import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';

import { UserService } from './services/user.service';
import { ProfileComponent } from './profile/profile.component';
import { LoggedinDirective } from './loggedin.directive'

import { SessionService } from 'src/app/state/session.service';
import { SessionStore } from 'src/app/state/session.store';
import { SessionQuery } from 'src/app/state/session.query';
import { ExploreComponent } from './explore/explore.component';
import { LearnComponent } from './learn/learn.component';
import { StrategyCardComponent } from './strategy/components/strategy-card/strategy-card.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginNavigationComponent } from './login-navigation/login-navigation.component';
import { StrategyActiveCardComponent } from './strategy/components/strategy-active-card/strategy-active-card.component';
import { StrategyDetailComponent } from './strategy/components/strategy-detail/strategy-detail.component';
import { StrategyCategoryCardComponent } from './strategy/components/strategy-category-card/strategy-category-card.component';
import { StrategyCategoryDetailComponent } from './strategy/components/strategy-category-detail/strategy-category-detail.component';
import { PercentPillComponent } from './percent-pill/percent-pill.component';
import { ChartPerformanceComponent } from './chart-performance/chart-performance.component';



@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      DashboardComponent,
      SignupComponent,
      NavigationComponent,
      FooterComponent,
      ProfileComponent,
      LoggedinDirective,
      ExploreComponent,
      LearnComponent,
      StrategyCardComponent,
      FrontpageComponent,
      LoginNavigationComponent,
      StrategyActiveCardComponent,
      StrategyDetailComponent,
      StrategyCategoryCardComponent,
      StrategyCategoryDetailComponent,
      PercentPillComponent,
      ChartPerformanceComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule
   ],
   providers: [
      UserService,
      SessionService,
      SessionStore,
      SessionQuery
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
