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

  postObject: {
    title: string,
    description: string,
    splitTags: string[],
    photo: Blob
  }

  //declare formgroup to hold title, photo (upload), description, tags
  postForm : FormGroup = this.fb.group({
    title: this.fb.control<string>('',[Validators.required,Validators.minLength(5)]),
    'photo': this.fb.control<''>,
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
    console.log("image check"+ this.postForm.get("photo"));
  }

  addTag(tagshtml:string){
    // pass in tagshtml local reference and remove duplicates
    this.splitTags = tagshtml.split(" ");
    this.splitTags = this.unique(this.splitTags);
    console.log("addTag clicked, split Tags are: " + this.splitTags);
  }

  //function to remove duplicates from string array
  unique(splittag: string[]) {
    return splittag.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
}

  removeTag(idx:number){
    this.splitTags.splice(idx,1);
    console.log("removeTag clicked "+ idx);
    console.log("splitTags are now: " + this.splitTags);
  }

}
