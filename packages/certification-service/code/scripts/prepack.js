// SPDX-FileCopyrightText: 2024 Industria de Diseño Textil S.A. INDITEX
//
// SPDX-License-Identifier: Apache-2.0

const fs = require("fs");

const packageJsonPath = "./package.json";
if (!fs.existsSync(packageJsonPath)) {
  throw new Error("Unable to find package.json. ");
}

try {
  const data = fs.readFileSync(packageJsonPath, "utf8");
  const packageJson = JSON.parse(data);
  if (packageJson.scripts && packageJson.scripts.postinstall) {
    delete packageJson.scripts.postinstall;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), "utf8");
  }
} catch (error) {
  console.error("Unable to parse ./package.json :", error);
  process.exit(1);
}
