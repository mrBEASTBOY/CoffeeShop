import { Component, Input, OnInit } from '@angular/core';
import { Coffee } from 'src/app/common/coffee';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() coffee!: Coffee;

  constructor() {}

  ngOnInit(): void {}
}
