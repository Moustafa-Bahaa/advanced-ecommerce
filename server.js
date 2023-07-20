//json server module 
const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("db.json")

//make sure to use the default middleware 
const middlewares = jsonServer.defaults()
server.use(middlewares)

//add this before server.use router 
server.use(
    //add custom route here if needed 
    jsonServer.rewriter({
        "/*": "/$1",
    })
)
server.use(router)
//listen to port 
server.listen(5000, () => {
    console.log("json server is running ");
})
//export the server api 
module.exports = server