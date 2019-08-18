import * as restify from 'restify'

import {Router} from '../common/router'
import { UserModel } from './user.model'

class UsersRouter extends Router {

    applyRoutes(application: restify.Server) {

        application.get('/users', async (request, response, next) => {
            const users = await UserModel.findAll();
            response.json(users)
            
            return next()
        })  
            
    }
    
}

export const usersRouter = new UsersRouter()