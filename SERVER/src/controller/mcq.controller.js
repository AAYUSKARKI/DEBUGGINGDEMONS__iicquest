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
// const correctAnswers = [1, 2, 1, 2, 3, 2]; // Example correct answers
const preliminary = [1, 2, 2, 1, 2, 2];
const precaution = [1, 1, 1, 1, 1, 1];
const poststage = [3, 3, 3, 3, 3, 3];

const submitAnswers = async (req, res) => {
    try {
        // const userId = req.user._id;
        const userAnswers = req.body; // Assuming userAnswers is an object with question indices and selected options as strings

        // Get all MCQ questions from the database to map option texts to option numbers
        const mcqs = await MCQ.find({});
        
        // Map the received answers to option numbers
        const mappedAnswers = Object.keys(userAnswers).map(questionIndex => {
            const question = mcqs[questionIndex];
            if (!question) {
                throw new Error('Question not found');
            }
            const selectedOptionText = userAnswers[questionIndex];
            const selectedOption = question.options.find(option => option.optionText === selectedOptionText);
            if (!selectedOption) {
                throw new Error('Selected option not found');
            }
            return selectedOption.optionNumber;
        });

        // Validate the mapped answers
        let isPreliminary = true;
        let isPrecaution = true;
        let isPoststage = true;

        for (let i = 0; i < mappedAnswers.length; i++) {
            if (mappedAnswers[i] !== preliminary[i]) {
                isPreliminary = false;
            }
            if (mappedAnswers[i] !== precaution[i]) {
                isPrecaution = false;
            }
            if (mappedAnswers[i] !== poststage[i]) {
                isPoststage = false;
            }
        }

        if (isPreliminary) {
            res.status(200).json({ message: 'Preliminary stage', redirectTopreliminary: true });
        } else if (isPrecaution) {
            res.status(200).json({ message: 'Precaution stage', redirectToprecaution: true });
        } else if (isPoststage) {
            res.status(200).json({ message: 'Post stage', redirectTopoststage: true });
        } else {
            res.status(200).json({ message: 'Default preliminary', redirectTopreliminary: true });
        }
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
