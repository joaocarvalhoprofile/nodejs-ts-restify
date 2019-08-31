import * as restify from 'restify'

import { Router } from '../common/route'
import { UserModel } from '../models/users'

class UsersRouter extends Router {

  applyRoutes(application: restify.Server) {

    application.get('/users', async (request, response, next) => {
      const users = await UserModel.findAll();
      response.json(users)

      return next()
    })

  }

}

export default new UsersRouter()
