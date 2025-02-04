import { NgModule, ChangeDetectionStrategy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*COMPONENTS*/
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { HomeComponent } from './layouts/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DesbloquearUsuarioComponent } from './layouts/desbloquearUsuario/desbloquearUsuario.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SuccessComponent } from './services/Dialogs/success/success.component';

/*MATERIALS*/
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {DialogModule} from '@angular/cdk/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LoaderComponent } from './components/Utilities/loader/loader.component';
import { Restaurante_formComponent } from './modules/restaurante_form/restaurante_form.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    DesbloquearUsuarioComponent,
    SuccessComponent,
    LoaderComponent,
    Restaurante_formComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatExpansionModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    MatSnackBarModule,
    DialogModule,
    MatPaginatorModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
