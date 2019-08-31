import App from './app'
import { environment } from './src/config/environment'

// routes
import UsersRouter from './src/routes/users'

// Server instance
App.createServer([UsersRouter])

App.application.listen(environment.server.port, () => {
  console.log(`Server started on port ${environment.server.port}`)
})
