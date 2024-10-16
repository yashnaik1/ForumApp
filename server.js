const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

// Create an Express app
const app = express();
app.use(bodyParser.json());

// Configuration for SQL Server using Windows Authentication
const config = {
    server: 'localhost', // Update with your server name or IP address
    database: 'forum_db', // Your database name
    options: {
        encrypt: false, // For Windows Authentication, encryption isn't always needed
        trustServerCertificate: true // Enable this for local development
    },
    // Windows Authentication settings
    authentication: {
        type: 'ntlm',
        options: {
            domain: '', // Optional: Add your domain here if required
            userName: '', // Leave empty for Windows Authentication
            password: '', // Leave empty for Windows Authentication
            workstation: '' // Optional: Add your workstation name if required
        }
    }
};

// Connect to the SQL Server database
sql.connect(config).then(() => {
    console.log('Connected to SQL Server using Windows Authentication');

    // Define a POST route for adding a forum post
    app.post('/addPost', async (req, res) => {
        const postContent = req.body.content;

        try {
            // Insert the post content into the SQL Server database
            const query = 'INSERT INTO Posts (content) VALUES (@content)';
            const request = new sql.Request();
            request.input('content', sql.NVarChar, postContent);
            
            const result = await request.query(query);
            res.send('Post added to the database');
        } catch (err) {
            console.error('SQL error:', err);
            res.status(500).send('Error saving post');
        }
    });

    // Start the Express server
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });

}).catch(err => {
    console.error('Database connection failed:', err);
});
