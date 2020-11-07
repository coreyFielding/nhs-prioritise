import express from 'express';
import cors from 'cors'

const PORT = process.env.APP_SERVER_PORT || 8000;

const app = express()

app.use(cors())

app.listen(PORT, async() => {
    console.log(`Apollo Server on http://localhost:${PORT}`)
})