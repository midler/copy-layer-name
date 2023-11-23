import { defineConfig } from 'vite';
import { createHtmlPlugin  } from 'vite-plugin-html'; // Используй именованный экспорт

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'code.ts',
      output: {
        dir: './', // Например, '.', если это корень проекта
        entryFileNames: `[name].js`, // Указывает имя выходного файла без хеша
        // Другие настройки output, если они нужны
      }

    }
  },
  plugins: [
    createHtmlPlugin ({
    })
  ],
});
