import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SuggestForm } from '../form';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent implements OnInit {

  // forms: SuggestForm;
  result: Array<SuggestForm>;
  results: SuggestForm[][];
  
  // @Output() name = new EventEmitter<string>();
  // @Output() email = new EventEmitter<string>();
  // @Output() subject = new EventEmitter<string>();
  // @Output() story = new EventEmitter<string>();

  // @Output() passingData= new EventEmitter<SuggestForm>();

  suggestForm: FormGroup;
  submitted = false;
  // hiding = true;
  constructor(private formBuilder: FormBuilder,private myService: MyServiceService)  { 
    this.results = [];
    // this.myService.myMethod(this.sender);
    // this.suggestForm=this.createFormGroup();
  }

  // createFormGroup(){
  //   return new FormGroup({
  //     name : new FormControl(),
  //     email: new FormControl(),
  //     subject: new FormControl(),
  //     story: new FormControl()
  //   });
  // }

  createFormGroupWithBuilder(formBuilder: FormBuilder){
    return formBuilder.group({
      name : '',
      email: '',
      subject: '',
      story: ''
    });
  }

  ngOnInit() {
  
    this.suggestForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      story: ['', Validators.required]
      
  });
  }

  get f() { return this.suggestForm.controls; }

  onSubmit() {
    this.submitted = true;
    // this.hiding = true;

    if (this.suggestForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.suggestForm.value)); 
    // this.suggestForm.patchValue({
    //   name: this.suggestForm.value.name,
    //   email: this.suggestForm.value.email
    // }) 
    this.result = Object.assign({},
      this.suggestForm.value);
      this.results.push(this.result);
      // console.log(this.result);
      // this.passingData.emit(this.result);
      this.myService.myMethod(this.results);
      console.log("abc", this.results);
}





// displayName(value: string){
//   this.name.emit(value);
// }

// displayEmail(value: string){
//   this.email.emit(value);
// }

// displaySubject(value: string){
//   this.subject.emit(value);
// }

// displayStory(value: string){
//   this.story.emit(value);
// }



}
