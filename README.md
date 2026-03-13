# Project structure

The structure of the layout is based on [FSD](https://feature-sliced.design/docs/get-started/overview)

## Layers

- app
- pages
- widgets
- features
- entities
- shared

## Segments

- ui - templates
- api
- model - shemase, interfaces, stores, business logic
- lib - some functions
- config

## example

```
src/
└── entities/
    └── user/
        ├── model/
        │   ├── usler.types.ts         # Types and interfaces
        │   ├── user.entity.ts         # Entity class
        │   ├── user.store.ts          # Store
        │   ├── user.schema.ts         #  Zod/Yup
        │   └── index.ts
        ├── api/
        │   ├── user.api.ts
        │   └── index.ts
        ├── lib/
        │   ├── user.utils.ts
        │   ├── user.mappers.ts
        │   └── index.ts
        ├── config/
        │   ├── user.constants.ts      # Only constants
        │   └── index.ts
        ├── ui/
        │   ├── UserCard/
        │   │   ├── UserCard.tsx
        │   │   └── index.ts
        │   └── index.ts
        └── index.ts
```

# Commit

<branch> <type>: <some-comment>

- fix fix bug
- feat add new feature
- refactor improve code without changing behavior
- docs update documentation
- style format code, fix indentation
- perf improve performance
- test add or update tests
- chore update dependencies, configs
- build change build system
- ci update CI/CD configuration
- revert revert previous commit
- deps dependency changes