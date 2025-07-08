export default {
  branches: [
    'master',
    { name: 'develop', prerelease: 'beta' },
    { name: 'release', prerelease: 'rc' },
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
          transform: (commit) => {
            if (commit.committerDate && !(commit.committerDate instanceof Date)) {
              commit.committerDate = new Date(commit.committerDate);
            }
            const newCommit = {
              ...commit,
              subject: commit.subject,
              body: commit.body,
              footer: commit.footer,
            };
            if (commit.body) {
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
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
        // updatePackageJson is true by default, but we keep it explicit:
        updatePackageJson: true,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]',
      },
    ],
  ],
};
