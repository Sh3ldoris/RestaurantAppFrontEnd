import { Component, OnInit } from '@angular/core';
import {MealsService} from '../../../Service/meals.service';
import {Soup} from '../../../model/soup';

@Component({
  selector: 'app-soups-list',
  templateUrl: './soups-list.component.html',
  styleUrls: ['./soups-list.component.scss']
})
export class SoupsListComponent implements OnInit {

  soups: Soup[] = [];
  isLoading = true;

  constructor(private mealService: MealsService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.mealService.getAllSoups().subscribe(
      (data: Soup[]) => {
          this.soups = data;
          this.isLoading = false;
          console.log('Done');
      },
      error => {
        console.error(error);
        this.isLoading = false;
      });
  }

}
