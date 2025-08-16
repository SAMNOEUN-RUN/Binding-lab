import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Person, Dependent } from './person.interface';

@Component({
  selector: 'app-person-form',
  standalone: true, // ✅ Standalone component
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent {
  personForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.personForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dependents: this.fb.array([])
    });
  }

  get dependents(): FormArray {
    return this.personForm.get('dependents') as FormArray;
  }

  addDependent(): void {
    const dependentGroup = this.fb.group({
      name: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(0)]]
    });
    this.dependents.push(dependentGroup);
  }

  removeDependent(index: number): void {
    this.dependents.removeAt(index);
  }

  submit(): void {
    if (this.personForm.valid) {
      const personData: Person = this.personForm.value;
      console.log('Person Data:', personData);
    } else {
      console.log('Form invalid');
    }
  }
}
