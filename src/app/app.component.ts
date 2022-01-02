import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as countrycitystatejson from 'countrycitystatejson';

interface Country {
  shortName: string;
  name: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form: FormGroup;

  private countryData = countrycitystatejson;
  countries: Country[];
  states: any[];
  cities: any[];

  constructor(private fb: FormBuilder) {
    this.countries = this.countryData.getCountries();
    this.form = this.fb.group({
      country: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.form.get('country').valueChanges.subscribe((country) => {
      this.form.get('state').reset();
      if (country) {
        this.states = this.countryData.getStatesByShort(country);
      }
    });

    this.form.get('state').valueChanges.subscribe((state) => {
      this.form.get('city').reset();
      if (state) {
        this.cities = this.countryData.getCities(
          this.form.get('country').value,
          state
        );
      }
    });
  }
}
