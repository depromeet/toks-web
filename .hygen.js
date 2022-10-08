// 추후 next와 같은 구조를 가지게 된다면, _App.tsx 같은 파일이 생기게 되는데, _ 문자열 파싱을 위한 helper
module.exports = {
  helpers: {
    reverseTrim: s => s.split('_').join(' '),
  },
};
