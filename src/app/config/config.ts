import {ApiUrls} from "./apiUrls";

export class Config {

  private static backendUrl: string = "http://localhost:8081/";

  public static getApiUrl(url: ApiUrls, param?: string): string{
    if(param === undefined){
      param = '';
    }
    return this.backendUrl + url + param;
  }
}
