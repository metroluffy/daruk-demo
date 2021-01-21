import { DarukServer, controller, get, inject } from "daruk";
import { ServiceName } from "./typings/define";

(async () => {
  const myapp = DarukServer();

  // load File
  await myapp.loadFile('./services');

  @controller()
  class Index {
    @inject(ServiceName.Test) private _test;
    @get("/")
    public async index(ctx: any) {
      this._test.log();
      ctx.body = "hello world";
    }
  }

  await myapp.binding();
  myapp.listen(3000);
})();
