const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 4000;


const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

app.get('/api', (req, res) => {
 
    try{
    const slack_name = req.query.slack_name;
    const track = req.query.track;
    const now = new Date();
    const current_day = daysOfWeek[now.getUTCDay()];

        res.status(200).json({
            slack_name,
            current_day,
            track
        });

    } catch (error) {
        console.log(error.message)
    }

});

app.listen(PORT, () => {
    console.log("Server listening on port: " + PORT);
});

// {
//     "slack_name": "example_name",
//     "current_day": "Monday",
//     "utc_time": "2023-08-21T15:04:05Z",
//     "track": "backend",
//     "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
//     "github_repo_url": "https://github.com/username/repo",
//     “status_code”: 200
//   }