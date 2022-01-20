import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../../../shared/models/contact';

import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  id: number = 0;
  loginForm: FormGroup;
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {}

  login() {
    let Identifiant: string = this.loginForm.value['identifiant'];
    let motDePasse: string = this.loginForm.value['motDePasse'];

    /*let contact: Contact;

    contact = getContact('login','mod de passe');


    console.log(contact);
    this.contactForm = this.formBuilder.group({
      nom: '',
      prenom: '',
      tel: '',
      favoris: false,
    });

    this.store.dispatch(new AddContact(contact));*/
  }
}
