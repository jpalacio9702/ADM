import { Component } from '@angular/core';
import { WebsocketService } from './websocket.servi';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WebsocketService, ChatService]
})
export class AppComponent {
  title = 'ADM';
}
