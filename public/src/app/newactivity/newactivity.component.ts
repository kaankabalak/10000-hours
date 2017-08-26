import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/http.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newactivity',
  templateUrl: './newactivity.component.html',
  styleUrls: ['./newactivity.component.css']
})
export class NewactivityComponent implements OnInit {

  activity = {
    expertiseId: '',
    name: '',
    hours: 0,
    description: '',
    date: new Date()
  }

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
    this._route.params.subscribe((param)=>{
      console.log("The ID for this topic is: ", param.id);
      this.activity.expertiseId = param.id;
    }) 
  }

  ngOnInit() {
  }

  submit() {
    this._httpService.addNewActivity(this.activity)
    .then((data) => {
      console.log("we posted to the DB in the component.ts, here is the data: ", data);
      this._router.navigate(['/expertise/', this.activity.expertiseId]);
    })
    .catch((err) => {
      console.log("unable to post to the DB");
    })
  }

}
