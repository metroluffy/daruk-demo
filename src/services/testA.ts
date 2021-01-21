import { provide } from "daruk";
import { ServiceName } from '../typings/define';

@provide(ServiceName.Test)
export class TestService {
  public log() {
    console.log('aaaa');
  }
}