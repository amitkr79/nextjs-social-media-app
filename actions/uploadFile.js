"use server";
import { cld } from "@/lib/cloudinary";

export const uploadFile = async (file, folder) => {
  if (!file) {
    throw new Error("No file provided");
  }

  try {
    // Log file size and type for debugging
    // console.log("Uploading file with name:", file.name);
    // console.log("File size:", file.size);
    // console.log("File type:", file.type);

    // Upload image to Cloudinary and await the result
    const res = await cld.v2.uploader.upload(file, {
      folder: `social/${folder}`,
      resource_type: "auto", // Handle both images and other types of files
    });

    console.log("File uploaded successfully:", res); // Log the full response from Cloudinary
    return res;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error; // Rethrow to be handled in the calling function
  }
};

export const deleteFile = async (public_id) => {
  try {
    // Delete image from Cloudinary
    const res = cld.v2.uploader.destroy(public_id, (error, result) => {
      if (error) {
        console.error("Error deleting image:", error);
      } else {
        console.log("file deleted successfully");
        return result;
      }
    });
    return res;
  } catch (e) {
    console.log(e);
    return {
      error: "Failed to delete",
    };
  }
};