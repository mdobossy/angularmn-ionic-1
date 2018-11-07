import { Memory } from '../../models/memory';
import { Injectable } from '@angular/core';
import { Location } from '../../models/location';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class MemoriesService {
  private memories: Memory[] = [];
  constructor() { }

  async addMemory(
    title: string,
    description: string,
    location: Location,
    imagePath: string,
    imageDir: string,
    fileName: string
  ) {
    const memory = new Memory(
      title,
      description,
      location,
      imagePath,
      imageDir,
      fileName
    );
    this.memories.push(memory);
    await Storage.set({ key: 'memories', value: JSON.stringify(this.memories) })
      .then()
      .catch(err => {
        this.memories.splice(this.memories.indexOf(memory), 1);
      });
  }

  async getMemories() {
    const result = await Storage.get({ key: 'memories' });
    this.memories = result.value !== null ? JSON.parse(result.value) : [];
    return this.memories.slice().reverse();
  }

  getMemory(index: number) {
    return this.memories.slice().reverse()[index];
  }
}
