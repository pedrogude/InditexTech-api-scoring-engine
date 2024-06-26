// SPDX-FileCopyrightText: 2023 Industria de Diseño Textil S.A. INDITEX
//
// SPDX-License-Identifier: Apache-2.0

const { enumeration } = require("@stoplight/spectral-functions")

module.exports = {
    message: "{{property}} is not a standardized response code",
    description: "MUST use standard HTTP status codes [29.10]",
    severity: "warn",
    given: "$.paths.*.*.responses.*~",
    then: {
        function: enumeration,
        functionOptions: {
            values: [
                "100",
                "101",
                "200",
                "201",
                "202",
                "203",
                "204",
                "205",
                "206",
                "207",
                "300",
                "301",
                "302",
                "303",
                "304",
                "305",
                "307",
                "400",
                "401",
                "402",
                "403",
                "404",
                "405",
                "406",
                "407",
                "408",
                "409",
                "410",
                "411",
                "412",
                "413",
                "414",
                "415",
                "416",
                "417",
                "423",
                "426",
                "428",
                "429",
                "431",
                "500",
                "501",
                "502",
                "503",
                "504",
                "505",
                "511",
                "default"
            ]
        }
    }
}