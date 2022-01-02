import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      country: [null],
      state: [null],
      city: [null],
    });
  }

  ngOnInit() {
    this.states = this.countryData.getStatesByShort('US');
    this.cities = this.countryData.getCities('US', 'Florida');
  }
}
