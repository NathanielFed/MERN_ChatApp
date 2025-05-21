import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "lebronjames@gmail.com",
    fullName: "Lebron James",
    password: "123456",
    profilePic: "https://images.steamusercontent.com/ugc/2482119801773776416/BFA6FF41C25F8B46B554CCF3C3CB0CE7F8B24403/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
