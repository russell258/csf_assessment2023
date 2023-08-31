import { Component, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

//View 2 Task 1 Post News

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input()
  splitTags: string[] = [];

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

  addTag(tagshtml:string){
    // this.splitTags = this.onAddTag.next($event.target.value)
    this.splitTags = tagshtml.split(" ");
    console.log("addTag clicked, split Tags are: " + this.splitTags);
  }

  removeTag(idx:number){
    this.splitTags.splice(idx,1);
    console.log("removeTag clicked "+ idx);
    console.log("splitTags are now: " + this.splitTags);
  }

}
