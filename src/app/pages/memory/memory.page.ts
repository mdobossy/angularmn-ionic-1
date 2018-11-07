import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemoriesService } from '../../services/memories/memories.service';
import { Memory } from '../../models/memory';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.page.html',
  styleUrls: ['./memory.page.scss'],
})
export class MemoryPage implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private memoriesService: MemoriesService) { }
  memory: Memory;
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.memory = this.memoriesService.getMemory(this.id);
  }

}
