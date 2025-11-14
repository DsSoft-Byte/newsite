# How to build
Download zip, unzip

create new repo

git init

git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

git add .

git commit -m "Initial commit"

git push -u origin main

npm i

npm install github pages thingy

npm run build

npm run deploy


# Bugfixing
if using gh pahes do dis

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/reponame/", // <-- important for custom domain
});

we dont do that since im no poor noob withot domain.
