import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SuggestForm } from './form';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private infos: Array<SuggestForm>;
  // private info: SuggestForm;
  private messageSource: BehaviorSubject<Array<SuggestForm>> = new BehaviorSubject<Array<SuggestForm>>(null);;
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) {   }

  myMethod(data) {
    // console.log(data); 
    // this.infos.push(this.messageSource.next(data));
    this.messageSource.next(data);
    // this.infos.push(a);

}
getApiData(){
  return this.http.get('http://talent-grid.w3ibm.mybluemix.net/api/v1/getAllData');
}
}
