import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private commonLanguage: CommonService) { }

  languageId: string = 'PT';
  placeNome: string = 'Nome Sobrenome';
  placeEmail: string = 'meuemail@dominio.com';
  placeMsg: string = 'Digite sua Mensagem ...';

  loader: boolean;
  modal: string;

  ngOnInit(): void {
    this.commonLanguage.emitirlanguage.subscribe(
      ev => {
        this.languageId = ev;
        if (this.languageId === 'PT') {
          this.placeNome = 'Nome Sobrenome';
          this.placeEmail = 'meuemail@dominio.com';
          this.placeMsg = 'Digite sua Mensagem ...';
        } else {
          this.placeNome = 'Name and Surname';
          this.placeEmail = 'myemail@dominio.com';
          this.placeMsg = 'Enter your Message ...';
        }
      }
    );
  }

  onClick() {
    this.loader = true;
    setTimeout(() => {
      this.modal = 'E-mail enviado com sucesso!';
      this.loader = false;
    }, 2000);
  }

}
