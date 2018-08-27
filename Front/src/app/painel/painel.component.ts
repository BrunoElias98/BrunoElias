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

    console.log(result);
    var p = Promise.resolve(result);
    p.then(function(v) {
      console.log(v[0]); // 1
      return v;
    });

    this.exibir = result;
  }

}
