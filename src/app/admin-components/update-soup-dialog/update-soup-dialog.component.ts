import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Soup} from '../../model/soup';
import {MealsService} from '../../Service/meals.service';

@Component({
  selector: 'app-update-soup-dialog',
  templateUrl: './update-soup-dialog.component.html',
  styleUrls: ['./update-soup-dialog.component.scss']
})
export class UpdateSoupDialogComponent implements OnInit {

  form: FormGroup;
  private soup: Soup;
  constructor(private fb: FormBuilder,
              private mealService: MealsService,
              @Inject(MAT_DIALOG_DATA) public data: {share: Soup}) { }

  ngOnInit(): void {
    this.soup = this.data.share;
    this.form = this.fb.group({
      name: [this.soup.name, Validators.required],
      price: [this.soup.price, [Validators.min(0), Validators.required]]
    });
  }

  submit() {
    this.soup.name = this.form.get('name').value;
    this.soup.price = this.form.get('price').value;
    this.mealService.saveSoup(this.soup).subscribe(
      response => {
        console.log(response);
    });
  }

}
