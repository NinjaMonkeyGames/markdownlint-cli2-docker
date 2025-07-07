////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                            CAPITALISED HEADINGS FUNCTION                                           //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* This function is a custom markdownlint-cli2 script that will check level one and two headings to ensure they are capitalised in-line with NMG policy. */

// 1. Module exports.
// 2. Meta data.
// 3. Heading capitalisation function.
//  a. Match heading text against regex.
//  b. Report an error if the heading is not fully capitalised.

// Module exports

module.exports =
{
  // Meta data

  names: ["capitalised-headings"],
  description: "Ensure level 2 and 3 headings are fully capitalised.",
  information: new URL("https://example.com/CONTRIBUTING.md"),
  tags: ["headings", "style"],

  /**
   * Custom markdownlint-cli2 rule to ensure level two and three headings are fully capitalized.
   * 
   * @author                                    NinjaMonkeyGames
   * @date                                      2025-01-10
   * @description                             - This rule ensures level two and three headings are fully capitalised.
   * @param {Object} params                   - Parameters provided by markdownlint.
   * @param {Object[]} params.lines           - Array of lines from the markdown file.
   * @param {function(Object): void} onError  - Callback to report errors.
   * @returns {void}                          - Returns nothing. 
   */

  // Heading capitalisation function
  
  function: (params, onError) =>
  {
    params.lines.forEach((line, i) =>
    {
      const text = (line.match(/^(#{2,3})\s+(.*)$/) || [])[2];
      text && text !== text.toUpperCase() && onError
      ({
        lineNumber: i + 1,
        detail: `Heading not fully capitalised: "${text}"`,
        context: line.trim(),
      });
    });
  },
};