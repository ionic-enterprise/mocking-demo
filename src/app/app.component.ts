import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import * as LiveUpdates from '@capacitor/live-updates';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  async ngOnInit(): Promise<void> {
    await SplashScreen.hide();
    // NOTE: DO NOT use Live Updates like this. This is just sample code to show the
    // testing. This will probably fail if you try running it.
    await LiveUpdates.setConfig({
      appId: 'NOT-REAL',
      channel: 'foo-bar',
    });
    await LiveUpdates.sync();
  }
}
