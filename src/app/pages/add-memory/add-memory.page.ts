import { Location } from '../../models/location';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, LoadingController } from '@ionic/angular';

import { Plugins, CameraSource, CameraResultType } from '@capacitor/core';
import { MemoriesService } from '../../services/memories/memories.service';
const { Geolocation, Camera } = Plugins;

@Component({
  selector: 'app-add-memory',
  templateUrl: './add-memory.page.html',
  styleUrls: ['./add-memory.page.scss'],
})
export class AddMemoryPage implements OnInit {
  location: Location = null;
  image: string = null;
  imagePath: string = null;

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private memoriesService: MemoriesService
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

  async onOpenCamera() {
    const image = await Camera.getPhoto({
      quality: 80,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      correctOrientation: true,
      source: CameraSource.Camera,
    }).then(imageData => {
      this.image = imageData.webPath;
      this.imagePath = imageData.path;
    }).catch(err => {
      console.log(err);
    });
  }

  onSubmit(form: NgForm) {
    this.memoriesService
            .addMemory(
              form.value.title,
              form.value.description,
              this.location,
              this.image,
              '',
              '');
    this.modalCtrl.dismiss();
  }
}
