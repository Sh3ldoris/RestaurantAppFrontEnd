import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MealsService} from '../../Service/meals.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MainMeal} from '../../model/main-meal';

@Component({
  selector: 'app-update-main-meal-dialog',
  templateUrl: './update-main-meal-dialog.component.html',
  styleUrls: ['./update-main-meal-dialog.component.scss']
})
export class UpdateMainMealDialogComponent implements OnInit {

  form: FormGroup;
  private mainMeal: MainMeal;

  constructor(private fb: FormBuilder,
              private mealService: MealsService,
              @Inject(MAT_DIALOG_DATA) public data: { share: MainMeal }) {
  }

  ngOnInit(): void {
    this.mainMeal = this.data.share;
    this.form = this.fb.group({
      name: [this.mainMeal.name, Validators.required],
      price: [this.mainMeal.price, [Validators.min(0), Validators.required]]
    });
  }

  submit() {
    this.mainMeal.name = this.form.get('name').value;
    this.mainMeal.price = this.form.get('price').value;
    this.mealService.saveMainMeal(this.mainMeal).subscribe(
      response => {
        console.log(response);
      });
  }

}
