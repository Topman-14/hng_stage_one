const express = require('express');
const app = express();
const PORT = 4000;

app.get('/api', (req, res) => {
 
    try{
    const now = new Date();
    const slack_name = req.query.slack_name;
    const track = req.query.track;
    const current_day = now.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' });
    const utc_time = now.toISOString();
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

// 2023-09-08T22:49:31.320Z
// 2023-08-21T15:04:05Z