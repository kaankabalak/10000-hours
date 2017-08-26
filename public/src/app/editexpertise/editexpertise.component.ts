import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/http.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editexpertise',
  templateUrl: './editexpertise.component.html',
  styleUrls: ['./editexpertise.component.css']
})
export class EditexpertiseComponent implements OnInit {

  // to search the expertise db based on the id
  parameter = {
    id: ''
  }

  expertise = { 
    id: '',
    name: '',
    description: ''
  }

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) {
    this._route.params.subscribe((param)=>{
      console.log("The ID for this topic is: ", param.id);
      this.parameter.id = param.id;
      this.expertise.id = param.id;
      this._httpService.retrieveExpertiseByID(this.parameter)
      .then((data) => {
        console.log("we posted the user to the DB in component.ts, the data is: ", data);
        this.expertise.name = data[0].name; 
        this.expertise.description = data[0].description;
      })
      .catch((err) => {
        console.log("unable to retrieve user", err);
      })
    }) 
  }

  ngOnInit() {
  }

  submit(){
    // create new expertise
    this._httpService.editExpertise(this.expertise)
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
