import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.css']
})
export class GenericCardComponent implements OnInit {
  @Input() header: string;
  @Input() path: string;
  @Input() summery: string;
  @Input() footer: string;
  @Input() title: string;


  constructor() { }

  ngOnInit() {
  }

}
