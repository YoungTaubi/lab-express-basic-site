// set up
const express = require('express')
const app = express()
const port = 3000

// this registers the public folder so that we can access the static assets in the 
// client
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/home-page.html')
})

app.get('/home', (req, res) => {
	res.sendFile(__dirname + '/views/home-page.html')
})

app.get('/about', (req, res) => {
	res.sendFile(__dirname + '/views/about-page.html')
});

app.get('/work', (req, res) => {
	res.sendFile(__dirname + '/views/work-page.html')
});



app.listen(port, () => {
	console.log(`Listening on port ${port} 🦄 🌈`)
})