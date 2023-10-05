import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter3.component.html',
  styleUrls: ['./counter3.component.scss']
})
export class Counter3Component implements OnInit{

  count: number = 0;

  constructor(private countServ: CounterService){

  }
  ngOnInit(): void {
    this.countServ.count.subscribe(value => this.count = value);
  }

}
