const { model, Schema } = require("mongoose");


const studentSchema = new Schema({
    fullName: { 
        type: String, 
        required: true 
    },
    age: { 
        type: Number, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    mobile: { 
        type: String, 
        required: true 
    },
    class: { 
        type: String, 
        required: true 
    }
},
{
    timestamps: true, //Tạo tự động thêm 2 trường createAt, updateAt
})
const Student = model('Student', studentSchema);

module.exports = Student;