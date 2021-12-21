export default interface ImageUploadResponse {
  data: Promise<{
    message: string;
    success: boolean;
    data: {
      message: string;
      imageUrl: string;
    };
  }>;
}
