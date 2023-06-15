import {Component} from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
  newCountryName: string = '';
  newCountryArea: number = 0;
  newCountryPopulation: number = 0;
  newCountryOther: string = '';

  public countries: Array<any> = [
    {
      id: 1,
      name: "Российская Федерация",
      area: 17098246,
      population: 144637189,
      other: "Я тут живу."
    },
    {
      id: 2,
      name: "Соединённые Штаты Америки",
      area: 9826675,
      population: 301693000,
      other: "Я тут не живу..."
    },
    {
      id: 3,
      name: "Китайская Народная Республика",
      area: 9596961,
      population: 1411750000,
      other: "Я тут был, но не жил."
    },
  ];

  addNewCountry() {
    this.countries.push({
      id: this.countries.length + 1,
      name: this.newCountryName,
      area: this.newCountryArea,
      population: this.newCountryPopulation,
      other: this.newCountryOther
    })
  }

  constructor() {
  }

  ngOnInit() {
  }
}
