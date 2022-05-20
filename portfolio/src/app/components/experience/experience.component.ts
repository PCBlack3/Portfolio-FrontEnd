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

  dataExperience: Experience = new Experience;

  editForm = new FormGroup({
    id: new FormControl(''),
    title : new FormControl(''),
    period: new FormControl(''),
    description : new FormControl(''),
    person : new FormControl('')
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

  editById(id: any){
    this.experienceService.getExperienceById(id).subscribe(data => this.dataExperience = data);
    this.editForm.setValue({
      'id': this.dataExperience.id,
      'title': this.dataExperience.title,
      'period': this.dataExperience.period,
      'description': this.dataExperience.description,
      'person': this.dataExperience.person

    })
    console.log(this.editForm.value);
 }

}
