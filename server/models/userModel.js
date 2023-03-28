const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');



const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "{PATH} is required"]
    },
    lastName: {
        type: String,
        required: [true, "{PATH} is required"]
    },
    email: {
        type: String,
        required: [true, "{PATH} is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [5, "{PATH} must be at least 5 characters"]
    },
    isRealtor: {
        type: Boolean,
        default: false
    },
    allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }]
}, { timestamps: true });


// UserSchema.virtual('confirmPassword')
//     .get(() => this._confirmPassword)
//     .set((val) => this._confirmPassword = val)

// UserSchema.pre('validate', function (next) {
//     if (this.password !== this.confirmPassword) {
//         this.invalidate('confirmPassword', 'Password must match confirm password');
//     }
//     next();
// });

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        })
        .catch(error => {
            console.log("The hashing of the password did not work: " + error)
            next()
        }
        );
});

UserSchema.plugin( uniqueValidator);

module.exports.User = mongoose.model('User', UserSchema);