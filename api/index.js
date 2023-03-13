import  express from 'express'

import { Users } from "./user.js";
import cors from "cors";
const app = express()

app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  q ? res.json(search(Users).slice(0, 10)) : res.json(Users.slice(0, 10));
});

const port = 5000

// app.get('/', (req, res) => {
//   res.send('Hello kishan!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})