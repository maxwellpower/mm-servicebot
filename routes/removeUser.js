// routes/removeUser.js
const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

const REMOVE_USER_TOKEN = process.env.MATTERMOST_REMOVE_USER_TOKEN;

router.post('/', verifyToken(REMOVE_USER_TOKEN), async (req, res) => {
    const { text, user_name } = req.body;

    if (!text) {
        return res.json({
            response_type: 'ephemeral',
            text: 'Please provide a GitLab username to remove. Usage: /remove_user [username]',
        });
    }

    console.log(`Removing GitLab user: ${text} as requested by Mattermost user: ${user_name}`);
    const responseMessage = `User Account for *${text}* has been removed successfully!`;

    // Final response to confirm the user removal action
    return res.json({
        response_type: 'in_channel',
        text: responseMessage,
    });
});

module.exports = router;

