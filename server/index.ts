import { config } from "dotenv";
config();

import Koa from "koa";
import helmet from "koa-helmet";

import logger from "./src/configurations/logger";

const app = new Koa();

app.use(helmet());

app.use(async (ctx, next) => {
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

app.on("error", err => logger.error(err));

app.listen(process.env.PORT || 3000);

logger.info(`Server running on port ${process.env.PORT || 3000}`);
