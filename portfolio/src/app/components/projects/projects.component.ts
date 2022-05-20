import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  project : Project[] = [];

  newForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    urlImage : new FormControl('')
  })

  dataProject : Project = new Project;

  editForm = new FormGroup({
    id:  new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    urlImage: new FormControl(''),
    person: new FormControl('')
  })

  constructor(public projectService: ProjectService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectService.getProject(1).subscribe(data => this.project = data);
    
    this.projectService.getProjectById('1').subscribe(data => this.dataProject = data);


  }

  postForm(form: Project){
    console.log(form);
    this.projectService.postProject(form, 1).subscribe(data => console.log(data));
  }

  deleteById(id: any){
    this.projectService.deleteProject(id).subscribe(data => console.log(data));
  }

  editById(id: any){
     this.projectService.getProjectById(id).subscribe(data => this.dataProject = data);
     this.editForm.setValue({
       'id': this.dataProject.id,
       'title': this.dataProject.title,
       'description': this.dataProject.description,
       'urlImage': this.dataProject.urlImage,
       'person': this.dataProject.person

     })
     console.log(this.editForm.value);
  }



}
