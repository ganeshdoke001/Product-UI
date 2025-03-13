import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent implements OnInit {
  userForm!: FormGroup;
  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      contact: new FormArray([
        new FormGroup({
          type: new FormControl(''),
          contact: new FormControl(''),
        }),
      ]),
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form is submitted', this.userForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
  addControl() {
    const control: FormArray<FormGroup> = <FormArray>(
      this.userForm.controls['contact']
    );
    control.push(
      new FormGroup({
        type: new FormControl(''),
        contact: new FormControl(''),
      })
    );
  }
  removeControl(i: number) {
    let controls: FormArray<FormGroup> = <FormArray>(
      this.userForm.get('contact')
    );
    controls.removeAt(i);
  }
}
