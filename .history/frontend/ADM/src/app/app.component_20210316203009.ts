import { Component } from '@angular/core';
import { web } from './websocket.service';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [web, ChatService]
})
export class AppComponent {
  title = 'ADM';
}
