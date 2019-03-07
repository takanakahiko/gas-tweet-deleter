export default class Twitter{
  private service
  constructor(consumerKey:string, consumerSecret:string, accessToken:string, accessTokenSecret:string){
    // @ts-ignore
    this.service =  OAuth1.createService('twitter')
      .setAccessTokenUrl('https://api.twitter.com/oauth/access_token')
      .setRequestTokenUrl('https://api.twitter.com/oauth/request_token')
      .setAuthorizationUrl('https://api.twitter.com/oauth/authorize')
      .setConsumerKey(consumerKey)
      .setConsumerSecret(consumerSecret)
      .setAccessToken(accessToken, accessTokenSecret)
  }

  post(endPoint:string, payload:Object){
    const response = this.service.fetch(`https://api.twitter.com/1.1/${endPoint}.json`,{
      method: 'POST',
      contentType: 'application/json',
      payload : JSON.stringify(payload)
    });
    return JSON.parse(response.getContentText());
  }

  get(endPoint:string, payload:Map<string,string>){
    const response = this.service.fetch(`https://api.twitter.com/1.1/${endPoint}.json`,{
      method: 'GET',
      payload : payload
    });
    return JSON.parse(response.getContentText());
  }
}
