export default {
  branches: [
    // Production releases
    'master',

    // Staging (prerelease: 'beta')
    {
      name: 'develop',
      prerelease: 'beta',
    },

    // Release candidates (prerelease: 'rc')
    {
      name: 'release',
      prerelease: 'rc',
    },

    // Optional: prevent semantic-release from trying to release feature branches
    // You can omit this; semantic-release will ignore them unless explicitly matched
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'IMPORTANT'],
        },
        writerOpts: {
          transform: (commit) =>
          {
            if (commit.committerDate && !(commit.committerDate instanceof Date))
            {
              commit.committerDate = new Date(commit.committerDate);
            }

            const newCommit = {
              ...commit,
              subject: commit.subject,
              body: commit.body,
              footer: commit.footer,
            };

            if (commit.body)
            {
              newCommit.notes = (newCommit.notes || []).concat({
                title: 'Details',
                text: commit.body,
              });
            }

            return newCommit;
          },
        },
      },
    ],
    '@semantic-release/changelog',
    '@semantic-release/git',
  ],
};
