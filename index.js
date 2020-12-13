const express = require('express');
const path = require('path');

const app = express();

/*app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});*/

//Use a middleware Set a static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res) => res.status(404).sendFile('404.html', { root: path.join(__dirname, 'public')}))

/*app.use(function (req, res, next) {
    res.status(404).write('404.html');
  })*/

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server listen on port: ${PORT}`));