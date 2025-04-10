import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'
import { z } from 'zod'

const config: CodegenConfig = {
  schema: 'https://graphql.org/graphql/',
  documents: ['src/**/*.tsx', 'src/**/*.ts'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/query/gql/': {
      preset: 'client',
    },
    './src/query/schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
    './src/query/graphql-validation.ts': {
      plugins: ['typescript', 'typescript-validation-schema'],
      config: {
        // strictScalars: true,
        useEnumTypeAsDefaultValue: true,
        defaultScalarSchema: z.unknown(),
        scalarSchemas: {
          Date: 'z.string().datetime()',
          DateTime: 'z.string().datetime()',
        },
        scalars: {
          ID: 'string',
          DateTime: 'string',
          Date: 'string',
          JSON: '{ [key: string]: any }',
        },
        schema: 'zod',
      },
    },
  },
}

export default config
