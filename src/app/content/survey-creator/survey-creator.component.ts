import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SurveysService } from "src/app/services/surveys.service";
import { TokenStorageService } from "src/app/services/token-storage.service";
import { SurveyCreatorModel } from "survey-creator-core";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

const defaultJson = {
  pages: [{
    name: "Name",
    elements: [{
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    }, {
      name: "LastName",
      title: "Enter your last name:",
      type: "text"
    }]
  }]
};

@Component({
  selector: 'survey-creator-component',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.css']
})
export class SurveyCreatorComponent implements OnInit {

  constructor(
    private surveyService: SurveysService,
    private tokenStorageService: TokenStorageService,
    private route: ActivatedRoute
  ){}

  isLoggedIn = false;
  surveyCreatorModel!: SurveyCreatorModel;


  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    const creator = new SurveyCreatorModel(creatorOptions);
    const id = this.route.snapshot.queryParams['id'];
    var surveyJson = this.surveyService.getSurvey(id);

    creator.JSON = surveyJson || defaultJson;
    //creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);

    // creator.saveSurveyFunc = (saveNo: number, callback: Function) => { 
    //   window.localStorage.setItem("survey-json", creator.text);
    //   callback(saveNo, true);
    saveSurveyJson(
          "http://localhost:3000/survey-add",
          creator.JSON,
          1,
          function(saveNo: number = 1, arg: boolean){}
      );
    // };

    this.surveyCreatorModel = creator;
  }
}

function saveSurveyJson(url: string | URL, json: object, saveNo: number, callback: Function) {
  const request = new XMLHttpRequest();
  request.open('POST', url);
  request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  request.addEventListener('load', () => {
      callback(saveNo, true);
  });
  request.addEventListener('error', () => {
      callback(saveNo, false);
  });
  request.send(JSON.stringify(json));
}