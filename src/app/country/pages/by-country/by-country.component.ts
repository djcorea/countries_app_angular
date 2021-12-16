import { Component} from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [`
  li{
    cursor: pointer;
  }
`
  ]
})
export class ByCountryComponent  {

  searchTerm            : string    = "";
  theresError           : boolean   = false;
  countries             : Country[] = [];
  countriesSugestion    : Country[] = [];


  constructor(private countryService:CountryService) { }

  search(searchTerm:string){
    
    this.theresError=false;
    this.searchTerm=searchTerm;
    this.countryService.searchCountry(searchTerm)
      .subscribe(response=>{
        this.countries=response;
        this.countriesSugestion=[]
        
      }, err=>{
        this.theresError  = true;
        this.countries    = [];
      });
    
  }

  sugestions(term:string){
     this.theresError=false;
     this.searchTerm=term;
     this.countryService.searchCountry(term)
      .subscribe(countries=>this.countriesSugestion=countries.splice(0,3),
      err=>this.countriesSugestion=[]
      )
  }

  searchSugestion(searchTerm : string){
    this.search(searchTerm);
  }
}
