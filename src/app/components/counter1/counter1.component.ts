import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationService } from 'src/app/services/communication.service';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.scss']
})
export class Counter1Component {

  constructor(private commService: CommunicationService, private countServ: CounterService){


  }
  ngOnInit(): void {
    // this.commService.increase.subscribe(n => this.count = this.count + n);
    // this.commService.reset.subscribe(n => this.count = this.count = n);
    this.countServ.count.subscribe(value => this.count = value);
  }

  count: number = 0;

  @Input() set increase(valueContainer: any){
    this.count = this.count + valueContainer.value;
  }

  @Input() set reset(valueContainer: any){
    this.count = valueContainer.value;
  }

}
