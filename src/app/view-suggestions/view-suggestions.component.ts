import { Component, OnInit } from '@angular/core';
import { SuggestForm } from '../form';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-view-suggestions',
  templateUrl: './view-suggestions.component.html',
  styleUrls: ['./view-suggestions.component.css']
})
export class ViewSuggestionsComponent implements OnInit {

  receiver: SuggestForm;
  pushing: Array<SuggestForm>;
  // name: string;
  // email: string;
  // subject: string;
  // story: string;
  resArr:any=[];

  constructor(private myService: MyServiceService) {
    
   }

  ngOnInit() {
    this.getData();

  }

  // recieveData($event){
  //   this.output=$event.name;
  //   console.log(this.output);
  // }


  getData() {
    this.myService.currentMessage.subscribe((data: any) => {
      console.log("res",data);
      this.receiver = data;
      console.log(this.receiver);
      // this.receiver.name = data.name;
      // this.receiver.email = data.email;
      // this.receiver.subject = data.subject;
      // this.receiver.story = data.story;
      // this.pushing.push(this.receiver);
      // console.log(this.pushing);
    });
  }

}
