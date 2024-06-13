import { MCQ } from "../models/mcq.model.js";

const getAllQuestions = async (req, res) => {
    try {
        const mcq = await MCQ.find();
        
        if (mcq.length === 0) {
            return res.status(404).json({ error: 'MCQ questions not found' });
        }
        
        return res.status(200).json({ data: mcq });
        
    } catch (error) {
        console.error('Error in fetching MCQ questions:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
// Controller function to handle submission of MCQ answers
const submitAnswers = async (req, res) => {
    try {
        // Extract user information (assuming authenticated user)
        const userId = req.user._id; // Assuming user is authenticated and userId is available in req.user
        
        // Extract answers from request body
        const { questionId, selectedOption } = req.body;

        // Example: Save user's selected option to database
        const mcq = await MCQ.findById(questionId);
        if (!mcq) {
            return res.status(404).json({ error: 'MCQ question not found' });
        }

        // Check if selectedOption is valid for this MCQ
        const optionExists = mcq.options.some(option => option.optionNumber === selectedOption);
        if (!optionExists) {
            return res.status(400).json({ error: 'Invalid selected option' });
        }

        // Save answer with user association
        mcq.user = userId; // Associate MCQ with the authenticated user
        await mcq.save();

        res.status(200).json({ message: 'Answer submitted successfully' });
    } catch (err) {
        console.error("Error submitting answers", err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Controller function to get MCQ answers specific to a user
const getAnswersByUser = async (req, res) => {
    try {
        // Extract user information (assuming authenticated user)
        const userId = req.user._id; // Assuming user is authenticated and userId is available in req.user

        // Fetch MCQ answers associated with the user
        const mcqAnswers = await MCQ.find({ user: userId }).populate('user', 'username email'); // Populate user details

        res.status(200).json(mcqAnswers);
    } catch (err) {
        console.error("Error fetching MCQ answers", err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export {submitAnswers,getAnswersByUser,getAllQuestions}
