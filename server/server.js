
import Razorpay from "razorpay";
import { app } from "./app.mjs";


export const instance = new Razorpay({
  key_id: "rzp_live_nVDdOfPGTrxKcf",
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

