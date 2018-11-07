import { AddMemoryPage } from './../add-memory/add-memory.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Memory } from '../../models/memory';
import { MemoriesService } from '../../services/memories/memories.service';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.page.html',
  styleUrls: ['./memories.page.scss']
})
export class MemoriesPage implements OnInit {
  memories: Memory[] = [];

  constructor(private modalCtrl: ModalController, private router: Router, private memoriesService: MemoriesService) {}

  ngOnInit() {
    this.getMemories();
  }

  async addButtonClicked() {
    console.log('addButtonClicked');
    const modal = await this.modalCtrl.create({
      component: AddMemoryPage
    });
    modal.onDidDismiss().then(data => {
      this.getMemories();
    });
    return await modal.present();
  }

  memoryClicked(index: number) {
    this.router.navigateByUrl(`/memories/${index})`);
  }

  getMemories() {
    this.memoriesService.getMemories().then(memories => this.memories = memories);
  }
}
