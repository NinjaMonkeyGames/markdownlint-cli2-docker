////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                            COMMITLINT CONFIGURATION FILE                                           //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import signedOffByRule from './custom-commitlint-rules/signed-off-by-regex.js';

export default
{
  // Extend the conventional commit config

  extends: ['@commitlint/config-conventional'],

  // Define custom types and enforce specific rules
  
  rules:
  {
    // Custom rules

    'signed-off-by-regex': [2, 'always'],             // Require a "Signed-off-by" line in commit messages

    // Conventional commit rules

    // Header rules

    'header-max-length': [2, 'always', 72],           // Limit header length to 72 characters

    // Subject rules

    'subject-max-length': [2, 'always', 50],          // Limit subject line length to 50 characters
    'subject-empty': [2, 'never'],                    // Disallow empty subjects in commit messages
    'subject-case': [2, 'always', 'lower-case'],      // Enforce lowercase subject text
    
    // Type rules

    'type-empty': [2, 'never'],                       // Disallow empty types in commit messages
    'type-case': [2, 'always', 'snake-case'],         // Enforce lowercase type text
    
    // Scope rules

    'scope-case': [2, 'always', 'snake-case'],        // Enforce lowercase scope text
    'scope-empty': [2, 'never'],                      // Require a scope for commits

    // Body and footer rules

    'body-empty': [2, 'never'],                       // Disallow empty bodies in commit messages
    'body-min-length': [2, 'always', 10],             // Require a minimum body length of 10 characters
    'body-case': [2, 'always', 'sentence-case'],      // Enforce sentence-case body text
    'body-max-line-length': [2, 'always', 72],        // Limit body line length to 72 characters

    // Footer rules

    'footer-leading-blank': [2, 'always'],            // Require a blank line before the footer
    'footer-max-line-length': [2, 'always', 72],      // Enforce footer length to 72 characters
    'footer-empty': [2, 'never'],                     // Disallow empty footers in commit messages
    
    // Other rules

    'references-empty': [2, 'never'],                 // Disallow empty references in commit messages
    'signed-off-by': [2, 'always', 'Signed-off-by'],  // Require a "Signed-off-by" line in commit messages

    // Enforce a list of allowed types (basic types commonly used in conventional commits)
    
    'type-enum':
    [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation changes
        'style',    // Code style changes (formatting, etc., no code change)
        'refactor', // Refactor without adding new features or fixing bugs
        'perf',     // Performance improvements
        'test',     // Adding or updating tests
        'build',    // Changes to build system or dependencies
        'ci',       // Continuous integration-related changes
        'chore',    // Other changes that don't modify source or test files
        'revert',   // Reverts a previous commit
      ]
    ],

    // Enforce scope format (optional, but recommended for organized commit history)
    
    'scope-enum':
    [
      2,
      'always',
      [
        'core',     // For core changes
        'api',      // For API-related changes
        'ui',       // For UI-related changes
        'auth',     // For authentication changes
        'db',       // For database changes
        'deps',     // For dependency updates
        'tests',    // For test-related changes
        'config',   // For configuration updates
        'security', // For security-related changes
        'rebase',   // For rebase-related changes
      ]
    ],
  },

  plugins: [signedOffByRule], // Use the custom "Signed-off-by" rule
};
