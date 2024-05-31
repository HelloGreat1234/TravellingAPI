const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

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
        password: {
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

UserSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
    next()
})

module.exports = mongoose.model('User', UserSchema)