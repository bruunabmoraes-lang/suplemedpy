import type { Config } from 'tailwindcss'
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { suple: { green: '#0b7f55', lime: '#b7ff4a', dark: '#053b2b', gold: '#d6b24c', soft: '#f6fff4' } } } }, plugins: [] }
export default config
