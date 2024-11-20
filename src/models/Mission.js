import { Schema } from "mongoose";

export const MissionSchema = new Schema({
  codename: { type: String, minLength: 1, maxLength: 100, required: true },
  objective: { type: String, minLength: 1, maxLength: 100, required: true },
  year: { type: String, minLength: 1, maxLength: 100, required: true },
}, { toJSON: { virtuals: true }, timestamps: true })