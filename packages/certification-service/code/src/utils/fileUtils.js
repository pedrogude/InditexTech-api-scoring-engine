// SPDX-FileCopyrightText: 2023 Industria de Diseño Textil S.A. INDITEX
//
// SPDX-License-Identifier: Apache-2.0

const fs = require("fs");

const checkFileExists = async (filePath) => {
  return fs.promises
    .access(filePath, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
};

module.exports = { checkFileExists };
