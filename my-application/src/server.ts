import express from 'express'
import router from './routes'
import bodyParser from 'body-parser'

const app = express()
const port: Number = 3000

app.use(router)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.get('/', (req, res) => {
    //res.send('Hello World!')
    res.status(200).json({
        mensage: "It Worked!"
    })
})

app.listen(port, () => {
    console.log(`Application running at http://localhost:${port}`)
})