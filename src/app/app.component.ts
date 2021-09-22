import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  radioForm: FormGroup;
  statuses = ['required', 'not required'];
  status = 'required';
  childformvalidators: FormControl = new FormControl(null);

  ngOnInit() {
    this.radioForm = new FormGroup({
      status: new FormControl(status),
      childform: new FormGroup({
        username: this.childformvalidators,
        password: this.childformvalidators
      })
    });

    this.radioForm.get('status').valueChanges.subscribe(value => {
      if (value == 'required') {
        this.childformvalidators.setValidators([Validators.required]);
      } else {
        this.childformvalidators.setValidators([]);
      }
    });
  }

  onSubmitMethod() {
    console.log(this.radioForm);
  }
}
