import express, { Express, Request, Response } from 'express'

const app: Express = express()

const PORT = 3000

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("hello, world")
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

