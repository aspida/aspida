import type { Config } from '@jest/types';

const config: { projects: Config.InitialOptions[] } = {
  projects: [
    {
      preset: 'ts-jest',
      testPathIgnorePatterns: ['tsx$'],
      coveragePathIgnorePatterns: ['sample1', 'dist'],
    },
    {
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      testEnvironmentOptions: {
        customExportConditions: ['node'], // for @vue/test-utils
      },
      testMatch: ['**/__tests__/**/*.tsx'],
      coveragePathIgnorePatterns: ['sample1', 'dist'],
    },
  ],
};

export default config;
