import * as restify from 'restify'

import { environment } from './src/config/environment'
import { Router } from './src/common/route'

class App {

  public application: restify.Server

  private async bootstrap(routers: Router[]): Promise<any> {
    this.application = restify.createServer({
      name: 'My Microservice',
      version: '1.0.0'
    })

    this.middlewares()
    this.applyRoutes(routers)
  }

  private middlewares(): void {
    this.application.use(restify.plugins.queryParser())
    this.application.use(restify.plugins.bodyParser())
    this.application.use(restify.plugins.jsonBodyParser())
  }

  private async applyRoutes(routers: Router[]): Promise<any> {
    for (let router of routers) {
      router.applyRoutes(this.application)
    }
  }

  public async createServer(routers: Router[] = []): Promise<any> {
    await this.bootstrap(routers)
  }

}

export default new App()
