import { Component, EnvironmentInjector, inject } from '@angular/core';
import { NativeAudio } from '@capacitor-community/native-audio';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TabsPage {

  isTabChanged = false;
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {}

  async setCurrentTab(event: any) {
    console.log(event);
    await this.playAudio();
  }

  async playAudio() {
    try {
      if(this.isTabChanged) {
        await NativeAudio.play({
          assetId: 'notification',
          // time: 6.0 - seek time
        });
      } else {
        this.isTabChanged = true;
      }
    } catch(e) {
      console.log(e);
    }
    
  }
}
