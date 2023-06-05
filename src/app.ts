import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './modules/users/users.route'
const app: Application = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// comment

app.use('/api/v1/users/', usersRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
