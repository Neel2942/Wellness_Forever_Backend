const bookAppointmentModel = require("../models/bookAppointmentModel.js");
const userModel = require("../models/user.js");

const adminAppointmentList = async(req, res) => {
    try {
        const appointmentList = await bookAppointmentModel.find();

        // Initialize an empty array to store the final results
        let finalResults = [];

        // Group appointments by doctorId
        const appointmentsByDoctor = appointmentList.reduce((acc, appointment) => {
            const doctorId = appointment.doctorId.toString();
            if (!acc[doctorId]) {
                acc[doctorId] = [];
            }
            acc[doctorId].push(appointment);
            return acc;
        }, {});

        // Loop through each doctor's appointments
        for (const doctorId in appointmentsByDoctor) {
            const doctorData = await userModel.findById(doctorId);

            // Initialize an empty array to store patient details for the current doctor
            const patientDetails = [];

            // Loop through each appointment for the current doctor to get patient details
            for (const appointment of appointmentsByDoctor[doctorId]) {
                const patientId = appointment.patientId;
                const appointmentDate = new Date(appointment.date);

                // Fetch patient details
                const patientData = await userModel.findById(patientId);

                // Push patient details to the array
                patientDetails.push({
                    patientName: patientData.firstName + " " + patientData.lastName,
                    appointmentDate: appointmentDate.toISOString().split("T")[0],
                    appointmentTime: appointment.time,
                    symptoms: appointment.symptoms
                });
            }

            // Push doctor details along with patient details to the final results array
            finalResults.push({
                doctorName: "Dr. " + doctorData.firstName + " " + doctorData.lastName,
                noOfAppointments: patientDetails.length,
                patientDetails: patientDetails
            });
        }

        // Send the final results as response
        res.json(finalResults);
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = adminAppointmentList;
