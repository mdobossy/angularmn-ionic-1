import { AddMemoryPage } from './../add-memory/add-memory.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.page.html',
  styleUrls: ['./memories.page.scss']
})
export class MemoriesPage implements OnInit {
  constructor(private modalCtrl: ModalController, private router: Router) {}

  ngOnInit() {}

  async addButtonClicked() {
    console.log('addButtonClicked');
    const modal = await this.modalCtrl.create({
      component: AddMemoryPage
    });
    modal.onDidDismiss().then(data => {});
    return await modal.present();
  }

  memoryClicked(index: number) {
    this.router.navigateByUrl(`/memories/${index})`);
  }
}
