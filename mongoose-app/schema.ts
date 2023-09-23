import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true}
  },
  {
    methods: {
      aboutMe() {
        console.log(`My Name is ${this.name}, and I'm ${this.age} years old.`)
      }
    }
  }
);

export type User = mongoose.InferSchemaType<typeof userSchema>;
export const User = mongoose.model('bun_user', userSchema);

