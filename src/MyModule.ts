import { Module } from "@nestjs/common";

import { BbsArticleModule } from "./controllers/bbs/BbsArticleModule";
import { SockModule } from "./sock/sock.module";

@Module({
  imports: [BbsArticleModule, SockModule],
})
export class MyModule {}
