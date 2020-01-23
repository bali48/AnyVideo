import { DownloderService } from './../../core/service/downloder.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthenticationService } from '@app/core';
import { finalize } from 'rxjs/operators';
import { AuthenticationService } from '../../core/authentication/authentication.service';
// import { AuthenticationService } from '../../core/authentication/authentication.service';
// import { AuthenticationService } from '../core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class landingpageComponent implements OnInit {
  downloadForm: FormGroup;
  isLoading = false;
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    public downloadService: DownloderService
  ) {
    this.createForm();
  }

  ngOnInit() {}
  downloadit() {
    if(this.downloadForm.valid){
    // console.log(this.downloadForm);
    let data = {'fileUrl': this.downloadForm.value}
    this.downloadService.downloadVideo(data)
      .pipe(
        finalize(() => {
          this.downloadForm.markAsPristine();
          this.isLoading = false;
        })
      )
      .subscribe(
        (Response: any) => {
          console.log(Response);
          // this.router.navigate(['/'], {
          //   replaceUrl: true
          // });
        },
        (error: any) => {
          console.log(`Login error: ${error.message}`);
        });
    }
  }
  private createForm() {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.downloadForm = this.formBuilder.group({
      downloadlink: ['', [Validators.required, Validators.pattern(reg)]]
      
    });
  }

  
}
