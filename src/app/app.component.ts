import { Component, OnInit } from '@angular/core';
import * as countrycitystatejson from 'countrycitystatejson';

interface Food {
  value: string;
  viewValue: string;
}

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
  selectedValue: string;
  private countryData = countrycitystatejson;
  countries: Country[];

  ngOnInit() {
    this.countries = this.countryData.getCountries();
  }

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}
