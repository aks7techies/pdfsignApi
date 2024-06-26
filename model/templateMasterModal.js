const mongoose = require('mongoose');

// Define a custom validator function to check the file extension
// function validateFileExtension(value) {
//     const validExtensions = ['.doc', '.docx']; // Add more extensions as needed
//     const fileExtension = value.substring(value.lastIndexOf('.')).toLowerCase();
//     return validExtensions.includes(fileExtension);
// }

const templateMasterSchema = new mongoose.Schema({
    documentName: {
        type: String,
        required: true
    },

    document: {
        type: String,
        required: true
    },
    isActive:{
        type:Number,
        default: 0
    }
}, { timestamps: true });

const TemplateModal = mongoose.model('TemplateModal', templateMasterSchema);

module.exports = TemplateModal;
