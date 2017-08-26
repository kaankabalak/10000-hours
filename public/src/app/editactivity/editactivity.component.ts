import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/http.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editactivity',
  templateUrl: './editactivity.component.html',
  styleUrls: ['./editactivity.component.css']
})
export class EditactivityComponent implements OnInit {

  // to search the activity db based on the id
  parameter = {
    id: ''
  }

  activity = {
    id: '',
    expertiseId: '',
    name: '',
    hours: 0,
    description: ''
  }

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) {
    this._route.params.subscribe((param)=>{
      console.log("The ID for this topic is: ", param.id);
      this.parameter.id = param.id;
      this.activity.id = param.id;
      this._httpService.retrieveOneActivity(this.parameter)
      .then((data) => {
        console.log("we posted the user to the DB in component.ts, the data is: ", data);
        this.activity.expertiseId = data[0].expertiseId; 
        this.activity.name = data[0].name; 
        this.activity.hours = data[0].hours;
        this.activity.description = data[0].description;
      })
      .catch((err) => {
        console.log("unable to retrieve user", err);
      })
    }) 
  }

  ngOnInit() {
  }

  submit() {
    // create new expertise
    this._httpService.editActivity(this.activity)
    .then((data) => {
        console.log('Received activity data:', data);
        console.log('Action successful');
    })
    .catch((err) => {
        console.log('Could not edit activity:', err);
    })
    
    this._router.navigate(['/expertise/', this.activity.expertiseId]);
  }

}
