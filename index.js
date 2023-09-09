const express = require('express');
const app = express();
const PORT = 4000;
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

app.get('/api', (req, res) => {
 
    try{
    const now = new Date();
    const slack_name = req.query.slack_name;
    const track = req.query.track;
    // const current_day = now.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' });
    const current_day = daysOfWeek[new Date(now).getUTCDay()];
    // const current_day = "Friday";
    const utc_time = now.toISOString().slice(0, 19) + "Z";
    const github_file_url = "https://github.com/Topman-14/hng_stage_one/blob/main/index.js";
    const github_repo_url = "https://github.com/Topman-14/hng_stage_one";
    const status_code = 200;

        res.status(200).json({
            slack_name,
            current_day,
            utc_time,
            track,
            github_file_url,
            github_repo_url,
            status_code
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
//     "utc_time": "2023-09-09T01:29:37Z"
//     "utc_time": "2023-09-09T01:10:42Z"
//     "track": "backend",
//     "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
//     "github_repo_url": "https://github.com/username/repo",
//     “status_code”: 200
//   }

// {
//     "slack_name": "Topman",
//     "current_day": "Saturday",
//     "utc_time": "2023-09-09T00:43:20.592Z",
//     "track": "backend",
//     "github_file_url": "https://github.com/Topman-14/hng_stage_one/blob/main/index.js",
//     "github_repo_url": "https://github.com/Topman-14/hng_stage_one",
//     "status_code": 200
// }