import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-controller2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './controller2.component.html',
  styleUrls: ['./controller2.component.scss']
})
export class Controller2Component {

  constructor(private commServ: CommunicationService){

  }

  increaseCounter(){
    this.commServ.increaseCount();
  }

  resetCounter(){
    this.commServ.resetCount();
  }

}
