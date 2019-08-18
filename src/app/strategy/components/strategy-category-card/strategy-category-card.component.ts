import { Component, OnInit, Input } from '@angular/core';
import { StrategyCategory } from 'src/app/strategy/objects/strategy-category.object';
import { Router } from '@angular/router';


@Component({
  selector: 'app-strategy-category-card',
  templateUrl: './strategy-category-card.component.html',
  styleUrls: ['./strategy-category-card.component.scss']
})
export class StrategyCategoryCardComponent implements OnInit {
    @Input() category: StrategyCategory;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routeToDetail(){
      this.router.navigate(['/category/1']);
  }

}
