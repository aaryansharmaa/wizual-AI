import { Schema, model, models, Document } from "mongoose";

// Define the IImage interface
interface IImage extends Document {
  title: string;
  transformation: string;
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
  config?: object;
  transformationUrl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author?: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

// Define the ImageSchema
const ImageSchema = new Schema<IImage>({
  title: {
    type: String,
    required: true,
  },
  transformation: {
    type: String,
    required: true,
  },
  publicId: {
    type: String,
    required: true,
  },
  secureUrl: {
    type: String, // Changed from URL to String
    required: true,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  config: {
    type: Object,
  },
  transformationUrl: {
    type: String, // Changed from URL to String
  },
  aspectRatio: {
    type: String,
  },
  color: {
    type: String,
  },
  prompt: {
    type: String,
  },
  author: {
    _id: String,
    firstName: String,
    lastName: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Image = models.Image || model<IImage>("Image", ImageSchema);

export default Image;
