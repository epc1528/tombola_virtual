export interface JwtI {
  generate(payload: object): String;

  decode(accessToken: string): any;
}
