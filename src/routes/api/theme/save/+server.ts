import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function POST({ request }) {
    try {
        const { colors } = await request.json(); // Expect { light: {}, dark: {} }
        
        // Define paths
        const cssPath = path.resolve('src/app.css');
        let cssContent = fs.readFileSync(cssPath, 'utf-8');

        // Helper to update a theme block
        function updateThemeBlock(content: string, themeName: string, newColors: Record<string, string>): string {
            const themeRegex = new RegExp(`(@plugin "daisyui/theme"\\s*{[^}]*?name:\\s*"${themeName}";[\\s\\S]*?})`, 'm');
            const match = content.match(themeRegex);

            if (!match) return content;

            let themeBlock = match[1];

            Object.entries(newColors).forEach(([key, value]) => {
                if (key.startsWith('--color-')) {
                     const colorRegex = new RegExp(`(${key}:\\s*)([^;]+)(;)`, 'g');
                     if (themeBlock.match(colorRegex)) {
                         themeBlock = themeBlock.replace(colorRegex, `$1${value}$3`);
                     }
                }
            });

            return content.replace(match[1], themeBlock);
        }

        if (colors.dark) {
            cssContent = updateThemeBlock(cssContent, 'saasstartertheme', colors.dark);
        }
        if (colors.light) {
            cssContent = updateThemeBlock(cssContent, 'saasstartertheme-light', colors.light);
        }

        // Write back to file
        fs.writeFileSync(cssPath, cssContent, 'utf-8');

        return json({ success: true, message: 'Themes saved successfully' });
    } catch (error) {
        console.error('Error saving themes:', error);
        return json({ error: 'Failed to save themes' }, { status: 500 });
    }
}
