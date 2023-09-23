import * as mongoose from 'mongoose';
import { User } from './schema';

const uri = 'mongodb://myuser:mypassword@localhost:27017/bun-app?directConnection=true&replicaSet=rs0';
await mongoose.connect(uri);

const user = new User({
  name: "Kim JaeHyeok",
  age: 20,
});
await user.save();

const users = await User.find();
users[0].aboutMe();

await mongoose.disconnect();
