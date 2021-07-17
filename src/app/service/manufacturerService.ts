import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Manufacturer} from "../model/manufacturer";
import {Config} from "../config/config";
import {Url} from "../config/urls";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  constructor(private httpClient: HttpClient) {}

  public getManufacturers(): Observable<Array<Manufacturer>>{
      return this.httpClient.get<Array<Manufacturer>>(Config.getUrl(Url.MANUFACTURERS));
  }
}
