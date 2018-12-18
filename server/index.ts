import { config } from "dotenv";
config();

import Koa from "koa";
import helmet from "koa-helmet";
import Router from "koa-router";
import nextInstance from "next";

import logger from "./src/configurations/logger";

const port = parseInt(process.env.PORT as string, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = nextInstance({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  server.use(helmet());
  server.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = err.status || 500;
      ctx.body = {
        data: null,
        error: err.message || "Internal server error",
        status: ctx.status
      };
      ctx.app.emit("error", err, ctx);
    }
  });
  server.on("error", err => logger.error(err));

  router.get("*", async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(router.routes());
  server.listen(port, () => logger.info(`Server running on port ${port}`));
});
