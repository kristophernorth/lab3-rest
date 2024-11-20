import { Schema } from "mongoose";

export const MissionSchema = new Schema(
  {
    codename: { type: String, minLength: 1, maxLength: 100, required: true },
    objective: { type: String, minLength: 1, maxLength: 100, required: true },
    year: { type: String, minLength: 1, maxLength: 100, required: true },
    completed: { type: Boolean, required: true, default: false },
    locationId: { type: Schema.ObjectId, required: true, ref: 'Mission' },
    ratId: { type: Schema.ObjectId, required: true, ref: 'Mission' },
  },

  { toJSON: { virtuals: true }, timestamps: true }
)

MissionSchema.virtual('location', {
  localField: 'locationId',
  ref: 'Mission',
  foreignField: '_id',
  justOne: true
})

MissionSchema.virtual('rat', {
  localField: 'ratId',
  ref: 'Mission',
  foreignField: '_id',
  justOne: true
})