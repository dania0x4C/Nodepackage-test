# 패키지 테스트 환경

이 프로젝트는 다양한 npm 패키지를 빠르게 테스트하고 탐색할 수 있는 TypeScript 기반 환경입니다.

## 기능

- TypeScript 지원
- 개별 패키지별 테스트 파일
- 빠른 테스트 실행 환경

## 설치 방법

```bash
# 의존성 설치
npm install
```

## 사용 방법

### 기존 테스트 파일 실행하기

```bash
# 특정 테스트 파일 실행
npm run run:test src/tests/lodash-test.ts
npm run run:test src/tests/axios-test.ts
```

### 새 패키지 테스트 파일 만들기

1. `src/tests/template.ts` 파일을 복사하여 새 파일 생성
2. 파일 이름을 `[패키지명]-test.ts`로 변경
3. 필요한 패키지 설치: `npm install [패키지명]`
4. 필요한 경우 타입 정의 설치: `npm install @types/[패키지명] --save-dev`
5. 테스트 코드 작성
6. 테스트 실행: `npm run run:test src/tests/[패키지명]-test.ts`

## 프로젝트 구조

```
├── README.md
├── package.json
├── tsconfig.json
└── src/
    ├── index.ts
    └── tests/
        ├── template.ts
        └── ...
``` # Nodepackage-test
