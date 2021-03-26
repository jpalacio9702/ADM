import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ListarVehiculosComponent } from './listar-vehiculos/listar-vehiculos.component';
import { WebsocketService } from './websocket.service';
import { }

@NgModule({
  declarations: [
    AppComponent,
    ListarVehiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
