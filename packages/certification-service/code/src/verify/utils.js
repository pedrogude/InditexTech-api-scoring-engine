// SPDX-FileCopyrightText: 2023 Industria de Diseño Textil S.A. INDITEX
//
// SPDX-License-Identifier: Apache-2.0

const { ERROR_SEVERITY } = require("../evaluate/severity");

const checkForErrors = (apiValidation, issues) => {
  if (!apiValidation.hasErrors) {
    return issues.filter((issue) => issue.severity === ERROR_SEVERITY).length > 0;
  }
  return apiValidation.hasErrors;
};

const cleanFileName = (file, rootFolder) => {
  const replace = rootFolder.endsWith("/") ? rootFolder : rootFolder + "/";
  return file.replace(replace, "");
  // file.substring(file.indexOf(rootFolder) + rootFolder.length + 1);
};

module.exports = {
  checkForErrors,
  cleanFileName,
};
