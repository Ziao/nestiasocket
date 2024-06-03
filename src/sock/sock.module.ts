import { Module } from "@nestjs/common";

import { SockController } from "./sock.controller";

@Module({
  controllers: [SockController],
})
export class SockModule {}
