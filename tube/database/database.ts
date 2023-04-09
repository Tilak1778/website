import mongoose from 'mongoose';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { Schema, model, connect } from 'mongoose';

export const connectToDb = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }

  await connect(`mongodb://0.0.0.0:27017/tube_db`);


  // await mongoose.connect(
  //   `mongodb://localhost:27017/local/${process.env.DB_NAME}?retryWrites=true&w=majority`
  // );
};
// /${process.env.DB_NAME}?retryWrites=true&w=majority
export const connectToDbHandler =
  (handler: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    await connectToDb();
    return handler(req, res);
  };
