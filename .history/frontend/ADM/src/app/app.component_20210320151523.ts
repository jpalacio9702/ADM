import { Component } from '@angular/core';
// import { WebsocketService } from './websocket.service';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [WebsocketService, ChatService]
})
export class AppComponent {
  title = 'ADM';

  constructor(private chat: ChatService)
}
