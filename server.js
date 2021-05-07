






/*const express = require("express")
const app = express()
const axios = require("axios")

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen("4567",() => console.log("executando"))*/


/*app.get("/", async(req, res) => {

    try {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users")
    return res.json(data)
    } catch(error) {
        console.error(error)
    }

})*/









/*//cors       
cors = require("cors")
//server
const express = require("express")

const axios = require("axios")

const app = express()
app.use(cors())
//rota para consumir a api
app.get("../aplicativo/home.html", async(req, res) => {
   try {
       //response é a resposta do axios, MAS eu tiro o data de dentro do response
   const {data} = await axios("https://jsonplaceholder.typicode.com/users")
   
        return res.json(data)
   } catch (error) {
       console.log("se fudeu")
   }
    
})

app.listen("4567", (console.log("rodando"))) */

/*const cors = require("cors")
const express = require("express")

const app = express()
const axios = require("axios")


app.use(cors())

app.get("/", async(req, res) => {

    try {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users")
    return res.json(data[0].name)
    } catch(error) {
        console.error(error)
    }
})

app.listen("4567")*/









