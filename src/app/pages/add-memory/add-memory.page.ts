import { Location } from '../../models/location';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, LoadingController } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

@Component({
  selector: 'app-add-memory',
  templateUrl: './add-memory.page.html',
  styleUrls: ['./add-memory.page.scss'],
})
export class AddMemoryPage implements OnInit {
  location: Location = null;
  image: boolean = null;

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
  }

  cancelButtonClicked() {
    this.modalCtrl.dismiss();
  }

  async onLocate() {
    const loading = await this.loadingCtrl.create({
      message: 'Getting your location...',
    });
    loading.present().then(() => {
      Geolocation.getCurrentPosition().then((coords) => {
        this.location = new Location(coords.coords.latitude, coords.coords.longitude);
        loading.dismiss();
      });
    });
  }

  onOpenCamera() {
    // CODE TO OPEN AND TAKE A PICTURE USING DEVICE CAMERA
    this.image = true;
  }

  onSubmit(form: NgForm) {
    this.modalCtrl.dismiss();
  }
}
