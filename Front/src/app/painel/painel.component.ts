import { Component, OnInit } from '@angular/core';
import { PainelService } from './painel.service';
import { Subject } from 'rxjs/Subject'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  formBusca : FormGroup
  exibir : any

  constructor(private painelService : PainelService,
              private formBuilder: FormBuilder) {}

  private filterString: Subject<string> = new Subject<string>();

  handleFilterChange(value: string) {
    this.filterString.next(value);
  }

  ngOnInit() {
    this.formBusca = this.formBuilder.group({
      busca: ['', Validators.required]
    });
  }
  
  buscaArquivo(){
    var result = this.painelService.busca(this.formBusca.value);

    new Promise((resolve, reject) => {

    resolve(result)
    }).then(function(result){
      console.log(result);
    });

    this.exibir = JSON.stringify(this.formBusca.value);
  }

}
