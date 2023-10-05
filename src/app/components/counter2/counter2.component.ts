import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationService } from 'src/app/services/communication.service';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.scss']
})
export class Counter2Component implements OnInit{

  count: number = 0;

  constructor(private commService: CommunicationService, private countServ: CounterService){


  }
  ngOnInit(): void {
    // this.commService.increase.subscribe(n => this.count = this.count + n);
    // this.commService.reset.subscribe(n => this.count = this.count = n);
    this.countServ.count.subscribe(value => this.count = value);
  }

}
