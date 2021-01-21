import { DarukServer, controller, get, inject } from "daruk";
import { ServiceName } from "./typings/define";

(async () => {
  const myapp = DarukServer();

  @controller()
  class Index {
    // 以下注入后报错
    // @inject(ServiceName.Test) private _test;
    @get("/")
    public async index(ctx: any) {
      // this._test.log();
      ctx.body = "hello world";
    }
  }

  await myapp.binding();
  myapp.listen(3000);
})();
