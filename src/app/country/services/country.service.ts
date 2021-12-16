import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl      : string  = 'https://restcountries.com/v3.1';
  //private fieldsData  : string  = '?fields=name,flags,population,altSpellings,capital';
  private fieldsParam = new HttpParams()
    .set("fields","name,flags,population,altSpellings,capital"); 
  ///name/honduras

  constructor(private http:HttpClient) { }
  
  searchCountry(searchTerm:string):Observable<Country[]>{
    const url=`${this.apiUrl}/name/${searchTerm}`;
    return this.http.get<Country[]>(url, {params:this.fieldsParam});
  }

  searchCapital(searchTerm:string):Observable<Country[]>{
    const url =`${this.apiUrl}/capital/${searchTerm}`;
    
    
    return this.http.get<Country[]>(url, {params:this.fieldsParam});
  }

  getCountryById(searchId: string):Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${searchId}`;
       
    return this.http.get<Country[]>(url);
  }

  searchRegion(region:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;
    
    return this.http.get<Country[]>(url, {params:this.fieldsParam});
  }

}
