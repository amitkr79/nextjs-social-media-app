// cloudinary.js (ensure Cloudinary is configured correctly)
import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: "dtrlsa5z3",
  api_key: "611365574439341",
  api_secret: "Gh190CfQEVDKLN6YFMUPyNjvmWs",
});

export const cld = globalThis.cloudinary || cloudinary;

if (process.env.NODE_ENV !== "production") globalThis.cloudinary = cld;
