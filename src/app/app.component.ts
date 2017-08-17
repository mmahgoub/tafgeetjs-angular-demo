import { Component } from '@angular/core';
import * as Tafgeet from 'tafgeetjs';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  amount:number = 1000.20;

  ngOnInit() {
    this.parse();
  }

  parse() {
    this.title = new Tafgeet(this.amount, 'SDG').parse();
  }

}
