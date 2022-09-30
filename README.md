# 12기 5조 오개안말 Frontend Repository입니다.

## 개발 환경 설정 방법

1. 레포 clone

2. `npm i yarn -g` / yarn이 global로 설치 되어있다면 패스

3. `cd depromeet` (클론한 해당 워크스페이스로 접근)

4. `yarn set version berry` (yarn berry 설정) =>
   참고 링크 - https://www.notion.so/depromeet/Yarn-Berry-ac81e79e7def4d2a80fa6f3a33df0bb1

5. `yarn` / `yarn install`

6. yarn install 이후 node_module 내부에 esbuild 관련 캐싱 폴더가 아닌 다른 패키지가 생긴다면, 잘못 설정한거에요. 말씀 주시면 도와드리겠습니다. esbuild 관련 캐싱 폴더만 생겼다면 node_module은 삭제하셔도 무방합니다. yarn berry는 node_module을 사용하지 않습니다.

7. `git config commit.template .gitmessage` (깃 커밋 메세지 템플릿 설정)

## 첨언

git commit template, pr template, eslint, prettier 등 컨벤션 관련한 것은 이야기 후에 변경해보도록 해요! 우선은 임시로 설정해보았습니다.
