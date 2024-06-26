// SPDX-FileCopyrightText: 2023 Industria de Diseño Textil S.A. INDITEX
//
// SPDX-License-Identifier: Apache-2.0

module.exports = (targetValue, { wellUnderstood }, paths) => {
  const result = [];

  if (targetValue === null || typeof targetValue !== "object") {
    return result;
  }
  for (const verb of Object.keys(targetValue)) {
    const responses = targetValue[verb].responses || {};
    if (responses === null || typeof responses !== "object") {
      continue;
    }
    for (const code of Object.keys(responses)) {
      //console.log(code)
      if (!(code in wellUnderstood)) {
        result.push({
          message: `${code} is not a well-understood HTTP status code`,
        });
        continue;
      }
      const allowedVerbs = wellUnderstood[code].map((verb) => verb.toUpperCase());
      const upperCaseVerb = verb.toUpperCase();

      if (!allowedVerbs.includes("ALL") && !allowedVerbs.includes(upperCaseVerb)) {
        result.push({
          message: `${code} is not a well-understood HTTP status code for ${upperCaseVerb}`,
        });
        continue;
      }
    }
  }
  return result;
};
