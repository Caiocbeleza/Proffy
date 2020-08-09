//Server
const express = require('express')
const server = express ()

const { 
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses,
    pageSucess} =  require('./pages')

const nunjucks = require('nunjucks')

//configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//receber os dados do re.body
server.use(express.urlencoded({ extended: true }))

//configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClasses)
.get("/page-registration-sucess", pageSucess)
.listen(5500)//abrindo o server

