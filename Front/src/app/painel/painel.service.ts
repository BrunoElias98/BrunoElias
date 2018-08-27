import {Injectable} from '@angular/core'
import {busca_api} from "../app.api"
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()

export class PainelService {
    constructor( private http: Http) {}

    public busca(search: any): Promise<string> {
        return this.http.get(`${busca_api}/busca/${search.busca}`)
        .toPromise()
        .then((resposta: any) => resposta.json());
    }
} 
