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
      checkboxDisabled: new FormControl({ value: null, disabled: true }, [
        Validators.required,
        Validators.requiredTrue,
      ]),
      checkboxReadonly: new FormControl(null, [
        Validators.required,
        Validators.requiredTrue,
      ]),
      inputDisabled: new FormControl(
        { value: null, disabled: true },
        Validators.required
      ),
      inputReadonly: new FormControl(null, Validators.required),
      inputDisabled2: new FormControl(
        { value: 'Disabled Value ABC', disabled: true },
        Validators.required
      ),
      inputReadonly2: new FormControl(
        'Readonly Value ABC',
        Validators.required
      ),
      selectDisabled: new FormControl(
        { value: null, disabled: true },
        Validators.required
      ),
      selectReadonly: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.fg.value);
  }

  onReset() {
    this.fg.reset();
  }
}
