import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsComponent } from './buttons.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
})
export class ButtonsModule {}
