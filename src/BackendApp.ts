import { Server } from "./server";
import { envs } from "./config/envs";
import { routeApp } from "./routes";
export class BackendApp {
  server?: Server;
  async start() {
    const port = envs.PORT ?? 3000;
    this.server = new Server(port.toString());
    this.server.route(routeApp);
    await this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    return await this.server?.stop();
  }
}
