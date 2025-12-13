import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const cssPath = path.resolve('src/app.css');
        if (!fs.existsSync(cssPath)) {
            return json({ error: 'app.css not found' }, { status: 404 });
        }
        
        const cssContent = fs.readFileSync(cssPath, 'utf-8');

        // Helper to extract colors from a named theme block
        function extractColors(themeName: string): Record<string, string> {
            const themeRegex = new RegExp(`@plugin "daisyui/theme"\\s*{[^}]*?name:\\s*"${themeName}";([\\s\\S]*?)}`, 'm');
            const match = cssContent.match(themeRegex);
            
            const extracted: Record<string, string> = {};
            if (match && match[1]) {
                const blockContent = match[1];
                const colorRegex = /(--color-[a-zA-Z0-9-]+):\s*([^;]+);/g;
                let colorMatch;
                while ((colorMatch = colorRegex.exec(blockContent)) !== null) {
                    extracted[colorMatch[1]] = colorMatch[2].trim();
                }
            }
            return extracted;
        }

        const dark = extractColors('saasstartertheme');
        const light = extractColors('saasstartertheme-light');

        return json({ dark, light });

    } catch (error) {
        console.error('Error fetching theme state:', error);
        return json({ error: 'Failed to fetch theme state' }, { status: 500 });
    }
}
