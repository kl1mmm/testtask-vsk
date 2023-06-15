import {Component} from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
  newCountryName: string = '';
  newCountryArea: string = '';
  newCountryPopulation: string = '';
  newCountryOther: string = '';

  public countries: Array<any> = [
    {
      id: 1,
      name: "Российская Федерация",
      area: '17.098.246',
      population: '144.637.189',
      other: "Я тут живу."
    },
    {
      id: 2,
      name: "Соединённые Штаты Америки",
      area: '9.826.675',
      population: '301.693.000',
      other: "Я тут не живу..."
    },
    {
      id: 3,
      name: "Китайская Народная Республика",
      area: '9.596.961',
      population: '1.411.750.000',
      other: "Я тут был, но не жил."
    },
  ];

  addNewCountry() {
    this.countries.push({
      id: this.countries.length + 1,
      name: this.newCountryName,
      area: this.newCountryArea.replace(/\B(?=(\d{3})+(?!\d))/g, "."),
      population: this.newCountryPopulation.replace(/\B(?=(\d{3})+(?!\d))/g, "."),
      other: this.newCountryOther
    })
  }

  constructor() {
  }

  ngOnInit() {
  }
}
