import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddnewcinemaComponent } from './components/addnewcinema/addnewcinema.component';
import { AddnewmovieComponent } from './components/addnewmovie/addnewmovie.component';
import { AddnewshowComponent } from './components/addnewshow/addnewshow.component';
import { BookinghistoryComponent } from './components/bookinghistory/bookinghistory.component';
import { CinemadeletepopupComponent } from './components/cinemadeletepopup/cinemadeletepopup.component';
import { CinemadetailsComponent } from './components/cinemadetails/cinemadetails.component';
import { CinemasComponent } from './components/cinemas/cinemas.component';
import { DeletepopupComponent } from './components/deletepopup/deletepopup.component';
import { EditcinemaComponent } from './components/editcinema/editcinema.component';
import { EditmovieComponent } from './components/editmovie/editmovie.component';
import { EditshowComponent } from './components/editshow/editshow.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { MoviedeletepopupComponent } from './components/moviedeletepopup/moviedeletepopup.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SelectcinemaComponent } from './components/selectcinema/selectcinema.component';
import { SheetbookingComponent } from './components/sheetbooking/sheetbooking.component';
import { ShowdeletepopupComponent } from './components/showdeletepopup/showdeletepopup.component';
import { ShowsComponent } from './components/shows/shows.component';
import { UsernavbarComponent } from './components/usernavbar/usernavbar.component';
import { UsersComponent } from './components/users/users.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    NopageComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    WelcomeComponent,
    FooterComponent,
    UsernavbarComponent,
    MoviesComponent,
    CinemasComponent,
    MoviedetailsComponent,
    SelectcinemaComponent,
    SheetbookingComponent,
    UsersComponent,
    DeletepopupComponent,
    CinemadeletepopupComponent,
    AddnewcinemaComponent,
    EditcinemaComponent,
    MoviedeletepopupComponent,
    AddnewmovieComponent,
    EditmovieComponent,
    ForgotpasswordComponent,
    CinemadetailsComponent,
    ShowsComponent,
    AddnewshowComponent,
    EditshowComponent,
    ShowdeletepopupComponent,
    BookinghistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    ToastrModule.forRoot({
      timeOut:2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),

    MatButtonModule,
        MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
