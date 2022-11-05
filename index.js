const express = require("express")
const cors = require("cors")
const Users = require("./config")
const app = express()

app.use(express.json())
app.use(cors())

app.post("/create", async(req,res)=> {
    const data = req.body
    await Users.add(data)
    res.send({pesan: "Data berhasil ditambah!"})
})

app.put("/update", async(req, res) => {
    const ID = req.body.id
    delete req.body.id
    const data = req.body
    await Users.doc(ID).update(data)
    res.send({pesan: "Data berhasil diubah!"})
})

app.delete("/delete", async(req, res)=> {
    const ID = req.body.id
    await Users.doc(ID).delete()
    res.send({pesan: "Data berhasil dihapus!"})
})

app.listen(4000, () => console.log("port 4000"))
