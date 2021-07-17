import {Url} from "./urls";

export class Config {

  private static backendUrl: string = "http://localhost:8081/";

  public static getUrl(url: Url): string{
    return this.backendUrl + url;
  }
}
