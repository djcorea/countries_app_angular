import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit{
  

  @Input() placeholder:string="";

  @Output('onEnter') onEnter:EventEmitter<string> = new EventEmitter();
  @Output() onDebounce:EventEmitter<string>= new EventEmitter();

  debouncer: Subject<string>=new Subject();


  searchTerm: string="";

  ngOnInit(){
       this.debouncer
       .pipe( debounceTime(300))
       .subscribe(value=>{
         this.onDebounce.emit(value);
         
       });
  }

  search(){
   this.onEnter.emit(this.searchTerm);
  }

  keyPressed(){
    this.debouncer.next(this.searchTerm);      
  }
}
