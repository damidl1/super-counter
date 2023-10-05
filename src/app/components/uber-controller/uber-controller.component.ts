import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-uber-controller',
  templateUrl: './uber-controller.component.html',
  styleUrls: ['./uber-controller.component.scss']
})
export class UberControllerComponent {

  constructor(private countServ: CounterService){

  }

  increaseAll(){
    this.countServ.increaseCount();
  }

  resetAll(){
    this.countServ.resetCount();
  }
}
