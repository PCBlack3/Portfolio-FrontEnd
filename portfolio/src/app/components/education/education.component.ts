import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Education } from 'src/app/models/education.model';
import { EducationService } from 'src/app/services/education.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education[] = [];
  
  newForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  constructor(public educationService: EducationService, private router: Router) { }

  ngOnInit(): void {
    this.educationService.getEducation(1).subscribe(data => this.education = data);
  }

  postForm(form:Education){
    this.educationService.postEducation(form, 1).subscribe(data => console.log(data));
    
    
  }

  deleteById(id: any){
    this.educationService.deleteEducation(id).subscribe(data => console.log(data));
    
  }

}
  