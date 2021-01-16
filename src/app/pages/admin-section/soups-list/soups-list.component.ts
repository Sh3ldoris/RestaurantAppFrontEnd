import { Component, OnInit } from '@angular/core';
import {MealsService} from '../../../Service/meals.service';
import {Soup} from '../../../model/soup';
import {MatDialog} from '@angular/material/dialog';
import {UpdateSoupDialogComponent} from '../../../admin-components/update-soup-dialog/update-soup-dialog.component';
import {NewSoupDialogComponent} from '../../../admin-components/new-soup-dialog/new-soup-dialog.component';

@Component({
  selector: 'app-soups-list',
  templateUrl: './soups-list.component.html',
  styleUrls: ['./soups-list.component.scss']
})
export class SoupsListComponent implements OnInit {

  soups: Soup[] = [];
  isLoading = true;
  constructor(private mealService: MealsService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.mealService.getAllSoups().subscribe(
      (data: Soup[]) => {
          this.soups = data;
          this.isLoading = false;
      },
      error => {
        console.error(error);
        this.isLoading = false;
      });
  }

  openUpdateDialog(soup: Soup) {
    const dialogRef = this.dialog.open(UpdateSoupDialogComponent, {data: {share: soup}});
    dialogRef.afterClosed().subscribe(
      result => {
        if (result === true) {
          this.isLoading = true;
          this.loadData();
        }
      });
  }

  openNewSoupDialog() {
    const dialogRef = this.dialog.open(NewSoupDialogComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        if (result === true) {
          this.isLoading = true;
          this.loadData();
        }
      });
  }

  removeSoup(soup: Soup) {
    this.isLoading = true;
    this.mealService.deleteSoup(soup.id).subscribe(
      data => {
        console.log(data);
        this.loadData();
      },
      error => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }

}
