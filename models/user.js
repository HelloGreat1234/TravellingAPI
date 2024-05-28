const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required']
        },
        email: {
            type: String,
            required: [true, "Please provide an email"]
        },
        passoword: {
            type: String,
            required: [true, "Please provid the password"]
        },
        bio: {
            type: String,
            maxLength: 50
        },
        profilePicture: {
            type: String,
            default: "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg"
        },
        followers: {
            type: Number,
            default: 0
        },
        averageRating: {
            type: Number,
            default: 0
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    }
)

module.exports = mongoose.model('User', UserSchema)