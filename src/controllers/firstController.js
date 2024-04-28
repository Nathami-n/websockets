import path from 'path';
import { fileURLToPath } from 'url';
export const firstController = (req, res) => {
    const __filename = fileURLToPath(import.meta.url);
    
    const __dirname = path.dirname(__filename);
    res.sendFile(path.join(__dirname, "..", "index.html"));
};