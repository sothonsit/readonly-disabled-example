import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-disabled',
  templateUrl: './disabled.component.html',
  styleUrls: ['./disabled.component.css'],
})
export class DisabledComponent implements OnInit {
  fg: FormGroup;

  constructor() {}

  ngOnInit() {
    this.fg = new FormGroup({
      checkbox: new FormControl({ value: null, disabled: true }),
      selected: new FormControl({ value: '', disabled: true }),
      input: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      input2: new FormControl({ value: '123', disabled: true }),
    });
  }

  onSubmit() {
    console.log(this.fg.value);
  }

  onReset() {
    this.fg.reset();
  }
}
