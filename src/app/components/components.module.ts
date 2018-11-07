import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [
      LeafletMapComponent,
    ],
    exports: [
      LeafletMapComponent,
    ]
})
export class ComponentsModule { }
