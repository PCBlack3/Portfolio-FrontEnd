import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Experience } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience: Experience[] = [];

  newForm = new FormGroup({
    title : new FormControl(''),
    period : new FormControl(''),
    description : new FormControl('')
  })

  constructor(public experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experienceService.getExperience(1).subscribe(data => this.experience = data);
  }

  postForm(form: Experience){

    this.experienceService.postExperience(form, 1).subscribe(data => console.log(data));
  }

  deleteById(id: any){
    this.experienceService.deleteExperience(id).subscribe(data => console.log(data));
  }

}
