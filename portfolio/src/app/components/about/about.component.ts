import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  person: Person = new Person();

  dataPerson: Person = new Person;
  editForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    urlImagen: new FormControl(''),

  })

  suscription: Subscription = new Subscription; 

  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getPerson().subscribe(data => {this.person = data});
    
    this.suscription = this.personService.refresh$.subscribe(() =>{
      this.personService.getPerson().subscribe(data => this.person = data);
    })
  }

  postForm(form: Person){
    this.personService.postPerson(form).subscribe(data =>console.log(data));
  }

  editPerson(){
    this.personService.getPerson().subscribe(data => {this.dataPerson = data});
    this.editForm.setValue({
      'id': this.dataPerson.id,
      'nombre': this.dataPerson.nombre,
      'apellido': this.dataPerson.apellido,
      'urlImagen': this.dataPerson.urlImagen
    })
    console.log(this.editForm.value);
  }
}
