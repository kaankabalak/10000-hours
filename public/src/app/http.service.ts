import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  // USERS
  addNewUser(user){
    console.log("Adding new user", user);
    return this._http.post("/create", user)
    .map(data => data.json())
    .toPromise()
  }

  retrieveUser(user){
    console.log("Retrieve user method:", user);
    return this._http.post("/getuser", user)
    .map(data => data.json())
    .toPromise()
  }

  // EXPERTISE
  addNewExpertise(expertise){
    console.log("Adding new expertise", expertise);
    return this._http.post("/createexpertise", expertise)
    .map(data => data.json())
    .toPromise()
  }

  editExpertise(expertise){
    console.log("Editing expertise", expertise);
    return this._http.post("/editexpertise", expertise)
    .map(data => data.json())
    .toPromise()
  }

  removeExpertise(id){
    console.log("Deleting expertise with id", id);
    return this._http.post("/deleteexpertise", id)
    .map(data => data.json())
    .toPromise()
  }

  // retrieve expertise by user
  retrieveExpertise(user){
    console.log("Retrieve expertise method by user:", user);
    return this._http.post("/getexpertise", user)
    .map(data => data.json())
    .toPromise()
  }

  retrieveExpertiseByID(id){
    console.log("Retrieve expertise method by ID:", id);
    return this._http.post("/getexpertiseid", id)
    .map(data => data.json())
    .toPromise()
  }

  // ACTIVITIES
  addNewActivity(activity){
    console.log("Adding new activity", activity);
    return this._http.post("/createactivity", activity)
    .map(data => data.json())
    .toPromise()
  }

  editActivity(activity){
    console.log("Editing activity", activity);
    return this._http.post("/editactivity", activity)
    .map(data => data.json())
    .toPromise()
  }

  // get multiple activities depending on expertise id
  retrieveActivities(id){
    console.log("Retrieve activities method", id);
    return this._http.post("/getactivity", id)
    .map(data => data.json())
    .toPromise()
  }

  // get single activity from activity id
  retrieveOneActivity(id){
    console.log("Retrieve one activity method", id);
    return this._http.post("/getoneactivity", id)
    .map(data => data.json())
    .toPromise()
  }

  retrieveAllActivities(){
    console.log("Retrieve all activities method");
    return this._http.get("/getallactivities")
    .map(data => data.json())
    .toPromise()
  }

  removeActivity(id){
    console.log("Deleting activity with id", id);
    return this._http.post("/deleteactivity", id)
    .map(data => data.json())
    .toPromise()
  }

  removeActivitiesInsideExpertise(id){
    console.log("Deleting activities with expertise id:", id);
    return this._http.post("/deleteactivityinexpertise", id)
    .map(data => data.json())
    .toPromise()
  }

}
