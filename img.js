// Setting Up Server

const express = require('express')
const app = express()
const port = 8080

// Express-File-Upload

const fileupload = require('express-fileupload');


// Cloudinary 

var cloudinary = require('cloudinary').v2;

// Cloudinary Config

cloudinary.config({
    cloud_name: 'xxxx',
    api_key: 'xxxx',
    api_secret: 'xxx'
});


app.use(fileupload(
    { useTempFiles: true }
));

// post

app.post('/upload', (req, res) => {

    // get the file 
    const file = req.files.photo;

    console.log(file)

    // uploading the temp file to cloudinary server
    cloudinary.uploader.upload(file.tempFilePath,
        {folder: '/pritha-test/'},
        (error, result) => {
        
        console.log( error , result)

        console.log("File URL " + result.url)

        console.log("File Name "+ result.original_filename)

        res.json(result)

    });

})



// Listing The Post
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
