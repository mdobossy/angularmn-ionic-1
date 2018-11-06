import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-memory',
  templateUrl: './add-memory.page.html',
  styleUrls: ['./add-memory.page.scss'],
})
export class AddMemoryPage implements OnInit {
  location: boolean = null;
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


  onLocate() {
    // CODE TO GET LOCATION USING GPS ON DEVICE
    this.location = true;
  }

  onOpenCamera() {
    // CODE TO OPEN AND TAKE A PICTURE USING DEVICE CAMERA
    this.image = true;
  }

  onSubmit(form: NgForm) {
    this.modalCtrl.dismiss();
  }
}
