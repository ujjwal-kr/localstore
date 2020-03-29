import {get} from '@loopback/rest';


export class HelloController {
  constructor() {}
  @get('hello')
  hello(): any {
    return 'Helloworld !'
  }
}
