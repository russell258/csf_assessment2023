import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  http = inject(HttpClient);

  //if
  upload(title: string, photo: ElementRef, description: string, splitTags: string[]): Promise<any>{

    //create multipart
    const form = new FormData();
    form.set("title", title);
    form.set("photo", photo.nativeElement.files[0]);
    form.set("description",description);
    form.set("splitTags", JSON.stringify(splitTags));

    return firstValueFrom(
      this.http.post<any>('upload',form)
    )

  }

}
