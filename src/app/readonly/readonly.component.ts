import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-readonly',
  templateUrl: './readonly.component.html',
  styleUrls: ['./readonly.component.css'],
})
export class ReadonlyComponent implements OnInit {
  fg: FormGroup;

  constructor() {}

  ngOnInit() {
    this.fg = new FormGroup({
      checkbox: new FormControl(),
      selected: new FormControl(''),
      input: new FormControl('', Validators.required),
      input2: new FormControl('123'),
    });
  }

  onSubmit() {
    console.log(this.fg.value);
  }

  onReset() {
    this.fg.reset();
  }
}
