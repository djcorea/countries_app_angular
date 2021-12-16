import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {

  country !: Country[];

  constructor(
    private activadedRoute  :ActivatedRoute,
    private countryService  :CountryService
  ) { }

  ngOnInit(): void {
    
    this.activadedRoute.params
      .pipe(
        switchMap( ({id})=>this.countryService.getCountryById(id))
        ,tap(console.log)
      )
      .subscribe(
        country=>this.country=country 
      );

    

    // this.activadedRoute.params.subscribe(
    //   ({id})=>{console.log(id);
      
    //   this.countryService.getCountryById(id)
    //    .subscribe(
    //      country=>this.country=country
         
    //    )}
    // )
  }

}
