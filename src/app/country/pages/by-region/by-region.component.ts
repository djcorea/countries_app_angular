import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
      margin-bottom: 5px;
    }`
  ]
})
export class ByRegionComponent  {

  regions       : string[]  = ["africa", "americas", "asia", "europe", "oceania"];
  activeRegion  : string    = "";
  countries     : Country[] =[];

  constructor(private countryService : CountryService) { }


  activateRegion(region:string){

    if(region===this.activeRegion){return}

    this.countryService.searchRegion(region)
      .subscribe(
        response=>{
          this.activeRegion = region;
          this.countries    = response;
        }
      );
  }

  getClassCSS(region : string):string{
    return (region===this.activeRegion) 
        ? 'btn btn-primary' 
        : 'btn btn-outline-primary'
  }
}
