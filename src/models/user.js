import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    url: { type: String, required: true },
    height: { type: Number, required: true },
    width: { type: Number, required: true }
}, { _id: false });

const followersSchema = new mongoose.Schema({
    href: { type: String, default: null },
    total: { type: Number, required: true }
}, { _id: false });

const explicitContentSchema = new mongoose.Schema({
    filter_enabled: { type: Boolean, required: true },
    filter_locked: { type: Boolean, required: true }
}, { _id: false });

const userSchema = new mongoose.Schema({
    display_name: { type: String, required: true },
    external_urls: {
        spotify: { type: String, required: true }
    },
    href: { type: String, required: true },
    id: { type: String, required: true, unique: true },
    images: { type: [imageSchema], required: true },
    type: { type: String, required: true },
    uri: { type: String, required: true },
    followers: { type: followersSchema, required: true },
    country: { type: String, required: true },
    product: { type: String, required: true },
    explicit_content: { type: explicitContentSchema, required: true },
    email: { type: String, required: true, unique: true }
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);

