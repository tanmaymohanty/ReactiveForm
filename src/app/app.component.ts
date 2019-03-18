import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'ReactiveForm';
  addCondoPhaseForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
  }
  ngOnInit() {
    // For validation
    this.createAddCondoPhaseForm();
  }

  createAddCondoPhaseForm() {
    this.addCondoPhaseForm = this.fb.group({
      condoPhase: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.maxLength(3),
        // Validators.pattern(this.common.ALPHANUMERIC_REGEX)
      ])
    });
  }
}
