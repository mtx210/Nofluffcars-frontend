import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Config} from "../config/config";
import {Injectable} from "@angular/core";
import {Model} from "../model/model";
import {Url} from "../config/urls";

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor(private httpClient: HttpClient) {}

  public getModels(manufacturerId: string): Observable<Array<Model>>{
    return this.httpClient.get<Array<Model>>(Config.getUrl('models/bymanufacturer/'.concat(manufacturerId)));
  }
}
