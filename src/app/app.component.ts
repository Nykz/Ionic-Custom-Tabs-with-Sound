import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NativeAudio } from '@capacitor-community/native-audio';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    this.preloadAudio();
  }

  async preloadAudio() {
    try {
      let path = 'notification.wav';
      if(Capacitor.getPlatform() == 'ios') path = 'sounds/' + path;
      await NativeAudio.preload({
        assetId: "notification",
        assetPath: path,
        audioChannelNum: 1,
        isUrl: false
      });
    } catch(e) {
      console.log(e);
    }
  }

}
