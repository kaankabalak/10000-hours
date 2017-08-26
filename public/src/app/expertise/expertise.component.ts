import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/http.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {

  hours = 0;

  // to search the expertise db based on the id
  parameter = {
    id: ''
  }

  expertise = { 
    id: '',
    name: "",
    description: "",
    user: "",
    activities: []
  }

  activityToDelete = {
    id: ''
  }

  constructor(private _httpService: HttpService, private _route: ActivatedRoute) {
    this._route.params.subscribe((param)=>{
      console.log("The ID for this topic is: ", param.id);
      this.parameter.id = param.id;
      this.expertise.id = param.id;
      this._httpService.retrieveExpertiseByID(this.parameter)
      .then((data) => {
        console.log("we posted the user to the DB in component.ts, the data is: ", data);
        this.expertise.name = data[0].name;
        this.expertise.user = data[0].user;        
        this.expertise.description = data[0].description;
        this.expertise.activities = data[0].activities;
      })
      .catch((err) => {
        console.log("unable to retrieve user", err);
      })
      this._httpService.retrieveActivities(this.parameter)
      .then((data) => {
        
        console.log("we posted the user to the DB in component.ts, the data is: ", data);
  
        console.log("Data name:", data);
        this.expertise.activities = data;

        for(var i=0; i<this.expertise.activities.length; i++) {
          this.hours += this.expertise.activities[i].hours;
        }
        
      })
      .catch((err) => {
        console.log("unable to retrieve user", err);
      })
    }) 
  }

  ngOnInit() {
  }

  deleteActivity(id) {
    this.activityToDelete.id = id;
    this._httpService.removeActivity(this.activityToDelete)
    .then((data) => {
      console.log("Showing activity that was deleted", data);

      this._httpService.retrieveExpertiseByID(this.parameter)
      .then((data) => {
        console.log("we posted the user to the DB in component.ts, the data is: ", data);
        this.expertise.name = data[0].name;
        this.expertise.user = data[0].user;        
        this.expertise.description = data[0].description;
        this.expertise.activities = data[0].activities;
      })
      .catch((err) => {
        console.log("unable to retrieve user", err);
      })
      this._httpService.retrieveActivities(this.parameter)
      .then((data) => {
        
        console.log("we posted the user to the DB in component.ts, the data is: ", data);
  
        console.log("Data name:", data);
        this.expertise.activities = data;

        // calculate hours
        this.hours = 0;

        for(var i=0; i<this.expertise.activities.length; i++) {
          this.hours += this.expertise.activities[i].hours;
        }
        
      })
      .catch((err) => {
        console.log("unable to retrieve user", err);
      })
      
    })
    .catch((err) => {
      console.log("unable to post to the DB", err);
    })
  }

}
