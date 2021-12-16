import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent{

  searchTerm  : string    = "";
  theresError : boolean   = false;
  countries   : Country[] = [];
  theresErroe : boolean   = false;
  

  constructor(private countryService:CountryService) { }

 



  search(searchTerm:string){

    this.theresError  = false;
    this.searchTerm   = searchTerm;
    this.countryService.searchCapital(this.searchTerm)
      .subscribe(response=>{
        this.countries=response
      }, err=>{
        this.theresError=true;
        this.countries=[];
      }
      );
   
  }

 

}
