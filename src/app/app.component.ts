import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fg: FormGroup;

  constructor() {}

  ngOnInit() {
    this.fg = new FormGroup({
      checkboxDisabled: new FormControl({ value: null, disabled: true }),
      checkboxReadonly: new FormControl(),
      inputDisabled: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      inputReadonly: new FormControl('', Validators.required),
      inputDisabled2: new FormControl(
        { value: 'Disabled Value ABC', disabled: true },
        Validators.required
      ),
      inputReadonly2: new FormControl(
        'Readonly Value ABC',
        Validators.required
      ),
    });
  }

  onSubmit() {
    console.log(this.fg.value);
  }

  onReset() {
    this.fg.reset();
  }
}
