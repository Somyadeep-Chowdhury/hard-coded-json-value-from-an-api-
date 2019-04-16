import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  data: any;

  constructor(private myService: MyServiceService) { }

  ngOnInit() {
  }

  getApiDetails(){
    this.myService.getApiData().subscribe(res => {
      this.data = res;
      console.log(this.data);
      console.log(this.data.responseData[0].data[0]);
    })
  }

}
