import { environment } from '../environments/environment';
import { WeatherService } from './weather.service';
import { of } from 'rxjs';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new WeatherService(<any>httpClientSpy);
  });

  fit('should construct correct url and return api response for getWeather method', () => {
    const expectedUrl = `${environment.baseUrl}find?q=Budapest&units=metric&${environment.apiKey}`;

    const apiResultObject: Object = { "id": "1111111" };

    httpClientSpy.get.and.returnValue(of(apiResultObject));

    service.getWeather('Budapest').subscribe(result => {
      expect(result).toEqual(apiResultObject, 'expected api result to be returned')
    });

    expect(httpClientSpy.get).toHaveBeenCalledWith(expectedUrl);
  });

  fit('should construct correct url and return api response for getForecast method', () => {
    const expectedUrl = `${environment.baseUrl}forecast?id=4366164&units=metric&${environment.apiKey}`;

    const apiResultObject: Object = { "id": "1111111" };

    httpClientSpy.get.and.returnValue(of(apiResultObject));

    service.getForecast(4366164).subscribe(result => {
      expect(result).toEqual(apiResultObject, 'expected api result to be returned')
    });

    expect(httpClientSpy.get).toHaveBeenCalledWith(expectedUrl);
  });

});
