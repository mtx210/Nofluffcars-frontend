import {ApiUrls} from "./apiUrls";

export class Config {

  private static backendUrl: string = "http://192.168.0.33:8081/";

  public static getApiUrl(url: ApiUrls, param?: string): string{
    if(param === undefined){
      param = '';
    }
    return this.backendUrl + url + param;
  }
}
