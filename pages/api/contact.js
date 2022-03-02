import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    if (
      !name ||
      name.trim() === "" ||
      !email ||
      !email.includes("@") ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newMessage = {
      name,
      email,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.mx6qv.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("gotmessage").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}

export default handler;
