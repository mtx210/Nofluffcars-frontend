import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Config} from "../config/config";
import {Injectable} from "@angular/core";
import {ApiUrls} from "../config/apiUrls";
import {Generation} from "../model/generation";

@Injectable({
  providedIn: 'root'
})
export class GenerationsService {

  constructor(private httpClient: HttpClient) {}

  public getGenerations(modelId: string): Observable<Array<Generation>>{
    return this.httpClient.get<Array<Generation>>(Config.getApiUrl(ApiUrls.GET_GENERATIONS_BY_MODEL, modelId));
  }
}
