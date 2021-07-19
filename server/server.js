require("dotenv").config()

const WEATHERSTACK_API = process.env.WEATHERSTACK_API
const express = require("express")
const axios = require("axios")
const { response } = require("express")

const app = express()
const PORT = process.env.PORT || 8080
const API_URL = `http://api.weatherstack.com/current?access_key=${WEATHERSTACK_API}&query=New%York`



app.get("/", (req, res) => {
    axios.get(API_URL).then(data => {
        res.send(data.data)
    }).catch(error => console.log(error))
  
})

app.listen(PORT, () => console.log(`server running  port ${PORT} ...`))
