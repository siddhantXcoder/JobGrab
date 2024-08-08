import multer from 'multer';

const storage = multer.memoryStorage(); // Store files in memory buffer
const upload = multer({ storage });

export const singleUpload = upload.single('file'); // 'file' should match the name attribute in your form
