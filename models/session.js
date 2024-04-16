const mongoose = require('mongoose');

// Define the schema for the session collection
const sessionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    }
});

// Create a model for the session collection
const sessionModel = mongoose.model('session', sessionSchema);

// Example usage:
// Create a new session document when user logs in
const createSession = async (userId) => {
    try {
        const session = new sessionModel({ userId });
        await session.save();
        console.log('Session created:', session);
    } catch (error) {
        console.error('Error creating session:', error);
    }
};

// Delete a session document when user logs out or session expires
const deleteSession = async (sessionId) => {
    try {
        await sessionModel.findByIdAndDelete(sessionId);
        console.log('Session deleted');
    } catch (error) {
        console.error('Error deleting session:', error);
    }
};

// Retrieve user ID from session document
const getUserIdFromSession = async (sessionId) => {
    try {
        const session = await sessionModel.findById(sessionId);
        if (session) {
            return session.userId;
        }
        return null; // Session not found
    } catch (error) {
        console.error('Error retrieving user ID from session:', error);
        return null;
    }
};

module.exports = {sessionModel,createSession,deleteSession,getUserIdFromSession};
