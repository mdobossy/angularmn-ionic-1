import { Memory } from '../../models/memory';
import { Injectable } from '@angular/core';
import { Location } from '../../models/location';

@Injectable({
  providedIn: 'root'
})
export class MemoriesService {
  private memories: Memory[] = [];
  constructor() { }

  addMemory(
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
  }

  getMemories() {
    return this.memories.slice().reverse();
  }

  getMemory(index: number) {
    return this.memories.slice().reverse()[index];
  }
}
