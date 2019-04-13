import { Component, OnInit, ElementRef } from '@angular/core';
@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  items = ['25','50','100','200'];
  item = '25';
  right = false;
  type = "monthly";
  typeprice = 1;
  selectedbox: Number
  lolcost = Number(this.item) * this.typeprice;
  icecost = 2*Number(this.item) * this.typeprice;
    
  calc(){
    this.lolcost = Number(this.item) * this.typeprice;
    this.icecost = 2*Number(this.item) * this.typeprice;
  }
  

  toggle() {
    if (this.right) {
      this.type = "month"
      this.typeprice = 1;
      this.calc();
      return 'right';
    } else {
      this.type = "year"
      this.typeprice = 0.5;
      this.calc();
      return 'left';
    }
    
  }

  constructor(private el: ElementRef) {

   }

  ngOnInit() {
  }

  onclick(item){
      this.item=item;
      this.selectedbox =Number(item);
      this.calc();
    }
}
