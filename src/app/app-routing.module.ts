import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'memories', pathMatch: 'full' },
  { path: 'memories', loadChildren: './pages/memories/memories.module#MemoriesPageModule' },
  { path: 'memories/:id', loadChildren: './pages/memory/memory.module#MemoryPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
