import { Injectable } from '@nestjs/common';
import { resolve } from 'dns';
import { HttpResp, RespData } from './entity/httpresp.entity';
import { INaverApiResp } from './type/apidata.interface';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getApiData(type: string, keyword: string) {
      const request = require('request');

      const CLIENT_ID: string = 'z73CVZ80v0SYgrwfwbfz';
      const CLIENT_SECRET: string = 'dFoN8oBtKB';
      const apiUrl: string = 'https://openapi.naver.com/v1/search/' + type;

      return new Promise<HttpResp>((resolve, reject) => {
          request.get({
              headers: {
                  'Content-Type': 'application/json',
                  'X-Naver-Client-Id': CLIENT_ID,
                  'X-Naver-Client-Secret': CLIENT_SECRET
              },
              uri: apiUrl,
              qs: {
                  query: keyword
              },
              json: true
          }, (error: object, response: object, body: INaverApiResp) => {
              const httpResp: HttpResp = new HttpResp();
              const respData: RespData = new RespData(type);

              if (body) {
                  respData.setStart(body.start);
                  respData.setDisplay(body.display);
                  respData.setTotal(body.total);
                  respData.setItems(body.items);

                  httpResp.setCode(200);
                  httpResp.setMessage('Success');
                  httpResp.setData(respData);
              } else {
                  console.log(error);
                  httpResp.setCode(99);
                  httpResp.setMessage('Failed');
                  httpResp.setData(null);
              }

              resolve(httpResp);
          });
      });
  }
}
