// import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

// export default <Partial<Config>>{
export default {
  content: ["./pages/**/*.{vue,js,ts}"],
  theme: {},
  plugins: [typography()],
};
