import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Manufacturer} from "../model/manufacturer";
import {Config} from "../config/config";
import {ApiUrls} from "../config/apiUrls";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ManufacturersService {

  constructor(private httpClient: HttpClient) {}

  public getManufacturers(): Observable<Array<Manufacturer>>{
      return this.httpClient.get<Array<Manufacturer>>(Config.getApiUrl(ApiUrls.GET_MANUFACTURERS));
  }
}
