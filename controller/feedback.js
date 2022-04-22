const Feedback = require("../model/feedback");

const saveFeedback = async (req, res) => {
    try {
        const feedback = new Feedback(req.body);
        console.log('feedback', feedback);
        await feedback.save();
        res.json({
            status: "success",
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: "error",
        })
    }
}

module.exports = {
    saveFeedback
}