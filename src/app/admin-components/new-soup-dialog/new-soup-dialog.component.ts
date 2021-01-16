import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MealsService} from '../../Service/meals.service';

@Component({
  selector: 'app-new-soup-dialog',
  templateUrl: './new-soup-dialog.component.html',
  styleUrls: ['./new-soup-dialog.component.scss']
})
export class NewSoupDialogComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder,
              private mealService: MealsService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      price: [null, [Validators.min(0), Validators.required]]
    });
  }

  submit() {
    this.mealService.saveSoup({id : 0, name : this.form.get('name').value, price : this.form.get('price').value}).subscribe(
      response => {
        console.log(response);
      });
  }

}
