export class Config {

  private static backendUrl: string = "http://localhost:8081/";

  public static getUrl(url: string): string{
    return this.backendUrl + url;
  }
}
