# Meeting4U_client
# 프로젝트 생성 및 빌드
## 프로젝트 생성
0. App.js에서 코드 작성
1. react-native init Meeting4U
2. cd Meeting4U

## 빌드
### IOS
react-native run-ios
npm run ios
Build in Xcode

### Android
react-native run-android
npm run android

# 배경 개념
## 프로젝트 구조
참고(https://yuddomack.tistory.com/entry/2React-Native-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B8%B0%EB%B3%B8-%EA%B5%AC%EC%A1%B0-%EB%94%94%EB%B2%84%EA%B9%85?category=754156)
1. 프로젝트 실행시 등장하는 커맨드 창은 추가 빌드 없이 reload를 가능하게 하는 번들링 서버.
2. react 프로젝트는 /index.js를 기점으로 시작하므로 앱 구조에 따라 수정하면 됨.
3. react native에서 지원하지 않는 기능은 네이티브 모듈로 구현하거나 모듈을 받아서 사용한다. 각 코드에 대한 설정은 android, ios directory에 작성된다.

## 기본 컴포넌트
참고(https://yuddomack.tistory.com/entry/3React-Native-Appjs%EC%99%80-JSX?category=754156)
1. View
2. Text
3. Image
4. TextInput
5. ScrollView => 권장 X
6. StyleSheet

## 그외 컴포넌트(상시 추가)
1. Platform : android와 ios를 구분지을 때 사용.
2. StyleSheet : 컴포넌트들의 색상, 정렬, 크기, 높이 등 스타일(디자인)을 담당.

#UI 레이아웃
## flex, width, height
flex : 크기를 다른 view와의 상대적 비율로 설정
width. height : 크기를 고정 수치 or 퍼센트로 설정