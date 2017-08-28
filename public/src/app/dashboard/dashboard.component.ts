import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from "app/http.service";
import { CookieService } from "angular2-cookie/services/cookies.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  // name of the current user from cookie
  currentUser = '';
  // user object to send post request
  user = {name: ''};
  // lists of expertise, activities and hours
  expertise = [];
  activities = [];
  hours = [];

  // deleting expertise
  expertiseToDelete = {id: ''};

  constructor(private _httpService: HttpService, private _router: Router, private _cookieService:CookieService) { }
  
  ngOnInit() {
    this.currentUser = this._cookieService.get('username');
    console.log("dashboard current user is", this.currentUser);
    this.user.name = this.currentUser;
    if (this.currentUser == '' || this.currentUser == undefined){
      console.log('You are not logged in! Redirecting to login');
      this._router.navigate(['/login']);
    }
    this._httpService.retrieveExpertise(this.user)
    .then((data) => {
      
      console.log("we posted the user to the DB in component.ts, the data is: ", data);

      console.log("Data name:", data);
      this.expertise = data;

      this._httpService.retrieveAllActivities()
      .then((data) => {
        
        console.log("we posted the user to the DB in component.ts, the data is: ", data);
  
        console.log("Data name:", data);
        this.activities = data;

        for(var i=0; i<this.expertise.length; i++) {
          this.hours[i] = 0;
          for(var j=0; j<this.activities.length; j++) {
            if(this.activities[j].expertiseId == this.expertise[i]._id) {
              this.hours[i] += this.activities[j].hours;
            }
          }
        }
  
      })
      .catch((err) => {
        console.log("unable to retrieve user", err);
      })
      
    })
    .catch((err) => {
      console.log("unable to retrieve user", err);
    })
  }

  deleteExpertise(id) {
    this.expertiseToDelete.id = id;
    this._httpService.removeExpertise(this.expertiseToDelete)
    .then((data) => {
      console.log("Showing expertise", data);
      
      this._httpService.retrieveExpertise(this.user)
      .then((data) => {
        
        console.log("we posted the user to the DB in component.ts, the data is: ", data);
  
        console.log("Data name:", data);
        this.expertise = data;
  
        this._httpService.retrieveAllActivities()
        .then((data) => {
          
          console.log("we posted the user to the DB in component.ts, the data is: ", data);
    
          console.log("Data name:", data);
          this.activities = data;
  
          for(var i=0; i<this.expertise.length; i++) {
            this.hours[i] = 0;
            for(var j=0; j<this.activities.length; j++) {
              if(this.activities[j].expertiseId == this.expertise[i]._id) {
                this.hours[i] += this.activities[j].hours;
              }
            }
          }

          // delete activities inside expertise
          this._httpService.removeActivitiesInsideExpertise(this.expertiseToDelete)
          .then((data) => {
            console.log("Successfully deleted activities inside expertise", data);
          })
          .catch((err) => {
            console.log("unable to post to the DB", err);
          })
    
        })
        .catch((err) => {
          console.log("unable to retrieve user", err);
        })
        
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
