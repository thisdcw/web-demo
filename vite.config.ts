import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';
import pkg from "./package.json";
import dayjs from "dayjs";


const {dependencies, devDependencies, name, version} = pkg;
const __APP_INFO__ = {
    pkg: {dependencies, devDependencies, name, version},
    lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss")
};

export default defineConfig({
    base: './',
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    define: {
        __APP_INFO__: JSON.stringify(__APP_INFO__) // 确保将对象正确字符串化
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
                additionalData: `@use "@/styles/var.scss" as *;`
            }
        }
    },
    build: {
        outDir: "dist",
        // minify: "esbuild",
        // esbuild 打包更快，但是不能去除 console.log，terser打包慢，但能去除 console.log
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        },
        sourcemap: false,
        reportCompressedSize: false,
        chunkSizeWarningLimit: 2000,
        rollupOptions: {
            output: {
                chunkFileNames: "assets/js/[name]-[hash].js",
                entryFileNames: "assets/js/[name]-[hash].js",
                assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
            }
        }
    },
    server: {
        host: "0.0.0.0",
        port: 4006,
        open: true,
        cors: true,
        proxy: {
            '/api': {
                target: "https://xxx.cn",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
