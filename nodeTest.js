/**
 * Created by beebe on 5/24/2017.
 */
const express = require(`express`);
const app = express();

app.use(express.static(`public`));

app.listen(3004, ()=>{
    console.log(`Wub a Dub Dub listening on 3004`)
});