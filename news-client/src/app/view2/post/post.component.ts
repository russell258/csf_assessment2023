import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//View 2 Task 1 Post News

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  splitTags : string[] = [];

  //declare formgroup to hold title, photo (upload), description, tags
  postForm : FormGroup = this.fb.group({
    title: this.fb.control<string>('',[Validators.required,Validators.minLength(5)]),
    description: this.fb.control<string>('',[Validators.required,Validators.minLength(5)]),
    tags: this.fb.control<string[]>(this.splitTags)
  });

  //declare formBuilder
  constructor(private fb: FormBuilder){}

  ngOninit():void{
    this.postForm;
  }

  submit(){
    console.log("Submit function clicked");
  }

  addTag(){
    this.splitTags = ['hello', 'hi','pls','help','me'];
    console.log("addTag clicked");
  }

  removeTag(idx:number){
    this.splitTags.splice(idx,1);
    console.log("removeTag clicked "+ idx);
  }

}
