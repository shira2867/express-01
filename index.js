const express=require("express");
const app = express();
const port=3000;

app.use(express.json())
const booksRouter=require("./router/bookRouter")

app.use("/books",booksRouter)
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);








