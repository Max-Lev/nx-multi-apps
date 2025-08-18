import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { SyncBtn } from './../../../../ui-shared/src/lib/sync-btn/sync-btn';

@Component({
  imports: [NxWelcome, RouterModule,SyncBtn],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'clients';
}
