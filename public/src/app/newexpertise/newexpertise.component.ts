import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from "app/http.service";
import { CookieService } from "angular2-cookie/services/cookies.service";

@Component({
  selector: 'app-newexpertise',
  templateUrl: './newexpertise.component.html',
  styleUrls: ['./newexpertise.component.css']
})
export class NewexpertiseComponent implements OnInit {

  expertise = { 
    name: "",
    description: "",
    user: "",
    activities: [] 
  }

  constructor(private _httpService: HttpService, private _router: Router, private _cookieService:CookieService) { }

  ngOnInit() {
    this.expertise.user = this._cookieService.get('username');
  }

  submit(){
    // create new expertise
    this._httpService.addNewExpertise(this.expertise)
    .then((data) => {
        console.log('Received expertise data:', data);
        console.log('Action successful');
    })
    .catch((err) => {
        console.log('Could not create expertise:', err);
    })
    
    this._router.navigate(['/dashboard']);
  }

}
