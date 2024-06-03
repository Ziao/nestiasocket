import { TypedRoute, WebSocketRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { WebSocketAcceptor } from "tgrid";

import { Calculator, ICalculator, IListener } from "./calculator";

@Controller("sock")
export class SockController {
  @TypedRoute.Get("test")
  public async test(): Promise<number[]> {
    return [1, 2, 3];
  }

  @WebSocketRoute("calc")
  public async calc(
    @WebSocketRoute.Acceptor()
    acceptor: WebSocketAcceptor<undefined, ICalculator, IListener>,
  ): Promise<void> {
    await acceptor.accept(new Calculator());
  }
}
