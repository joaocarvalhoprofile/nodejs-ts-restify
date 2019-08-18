import { Server } from './server/server'

import { usersRouter } from './users/user.router'

(async function bootstrap() {
    const server = new Server()
    try {
        await server.startServer([usersRouter])
        console.log('Server is listening', server.application.address())
    } catch (error) {
        console.log('Server failed to start !')
        console.error(error)
        process.exit(1)
    }
}
)()