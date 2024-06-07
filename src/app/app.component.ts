import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'crd';
  BMI!: number;
  formgroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formgroup = this.fb.group({
      Height: ['', Validators.required],
      Weight: ['', Validators.required]
    });
  }

  submitForm() {
    const height = this.formgroup.value.Height;
    const weight = this.formgroup.value.Weight;
    // Assuming height is in meters and weight is in kilograms for BMI calculation
    this.BMI = weight / (height * height);
    console.log('BMI:', this.BMI);
    this.formgroup.reset();
  }
}
