// SPDX-FileCopyrightText: 2023 Industria de Diseño Textil S.A. INDITEX
//
// SPDX-License-Identifier: Apache-2.0

const { falsy } = require("@stoplight/spectral-functions")

module.exports = {
    message: "Implicit grant flow in OAuth2 authentication not allowed",
    description: "Do not use implicit grant flow in OAuth2 authentication.",
    severity: "warn",
    given: "$.components.securitySchemes.OAuth2.flows",
    then: {
      field: "implicit",
      function: falsy
    }
  }