# Meeting4U_client
# 프로토타입
https://ovenapp.io/view/yfu8QZHi22vjijgxROD8VmK5jB2YY8iY/

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
3. SafeAreaView : 안전한 영역 안에 자동으로 배치해 줌. 아이폰은 노치 아래 부분부터 배치.
4. TouchableOpacity : 일반 Button은 IOS와 Android에서 다르게 보이기 때문에 해당 컴포넌트를 사용한다.
5. Image : 이미지를 뷰에 넣을 때 사용하는 컴포넌트.
6. TextInput : 텍스트 입력창.
7. FlatList : Listview(참고: https://lcw126.tistory.com/233)

## State와 Props
1. State와 Props에 변화가 감지되면 render()가 호출된다. 
	=> 리액트의 최적화와 관련이 있음(참고: https://yuddomack.tistory.com/1#optimize)
2. State에는 현재 컴포넌트의 화면을 그리는 것과 관련된 대다수의 값들을 담는다.
	안드로이드의 preference 자동 느낌.
3. 데이터의 흐름은 상위 컴포넌트에서 하위 컴포넌트로 단방향임.
4. Props에는 상위 컴포넌트에서 전달받은 값이 담겨있으면 변경 불가능하다.
5. Props 혹은 State는 비동기적으로 업데이트 될 수 있다.

### State
화면을 그리는 것과 관련된 대다수의 값을 갖는다.
ex1) 환영합니다 고객님. => State 필요 없음. / 환영합니다 OOO 고객님. => State에 이름을 담음.
ex2) 앱이 실행되고 api로 서버에 글 목록을 요청해서 state에 저장하고 render()되면 글들이 그려짐.

### Props
커스텀 컴포넌트와 관계가 깊다. 상위 컴포넌트에서 < ~~~ > 라고 넘긴 데이터를 하위 컴포넌트에서
props.id ~~~ 로 받아서 쓰여짐.

#UI 레이아웃
## flex, width, height
flex : 크기를 다른 view와의 상대적 비율로 설정
width. height : 크기를 고정 수치 or 퍼센트로 설정
=> flex와 width, height를 같이 쓰면 고정된 값 이외의 범위를 flex의 비율로 채운다.
=> 자식의 크기 설정은 부모의 크기에 영향을 받으므로 주의해야 함.

## Flex Direction
View에서 "자식 요소"들을 가로, 세로로 쌓기 위해 flexDirection을 사용함.
default는 column.
### row
가로 배치에 쓰임.
### column
세로 배치에 쓰임.

## Align Items
0. Flex Direction으로부터 수직한 정렬.
1. flex-start : 가로 정렬을 기준으로 시작점.
2. center : 가로 정렬을 기준으로 중앙.
3. flex-end : 가로 정렬을 기준으로 끝점.
4. stretch : flex-start부터 flex-end까지 늘려서 채움. 정렬 방향의 크기를 지정해주지 않아야 함.
5. baseline : ?

## Justify Content
0. Flex Direction으로부터 수평한(같은방향) 정렬.
1. flex-start : 가로 정렬을 기준으로 시작점.
2. center : 가로 정렬을 기준으로 중앙.
3. flex-end : 가로 정렬을 기준으로 끝점.
4. space-between : 양쪽 정렬.
5. space-around : 공백까지 포함한 양쪽 정렬.

## Custom Button
OS마다 Native Button이 다르기 때문에 TouchableOpacity 컴포넌트를 사용함.
이벤트 핸들링이 가능한 커스텀 컴포넌트를 만들 수 있다.

## Shadow
component에 shadow를 줄 수 있다.
참고: https://jw910911.tistory.com/72


## Image
1. 이미지 불러오기
	- source={{uri: 'image uri'}}
	- source={require('local image link')}
2. Image Resizing
	- option 이름: resizeMode
	- contain : 넓은 부분이 100%를 차지할 때까지 이미지를 늘림. 이미지 전체가 보임.
	- cover : 좁은 부분이 100%를 차지할 때까지 이미지를 늘림. 이미지 일부가 확대해서 보임.

## TextInput
텍스트를 입력받을 때 사용하는 컴포넌트(참고: https://lcw126.tistory.com/227)
1. secureTextEntry={true} : 비밀번호 효과 내기.
2. placeholder="" : Text Hint 넣기
3. onChangeText : 콜백 함수 지정하여 매개변수 등 전달 가능.
4. multiline={true} : 여러 줄 입력 가능
5. numberOfLines={'num'} : 최소 라인수 설정
6. maxHeight : 최대 높이 값 설정. 그 이상은 스크롤로 변경됨.

# React Navigation
react native에서 화면 간 이동을 가능하게 해주는 라이브러리
## 설치 및 코드 참고
https://hellominchan.tistory.com/4
https://velog.io/@st2702/React-native-Navigation
https://eso0609.tistory.com/88

## 종류
1. Stack : 새로운 화면이 기존 화면 위에 쌓이는 화면(뒤로가기 가능)
2. Drawer : 화면에 우측으로 미는 제스쳐를 통해 좌측에 열리는 화면
3. BottomTab : 화면 하단에 아이콘을 통해 경로를 전환
4. MaterialBottomTab : 머티리얼 디자인을 사용한 BottomTab
5. MaterialTopTab : 머티리얼 디자인을 사용한 탭 바

## 함수
1. navigate('Name') : 화면 이동
2. push('Name') : 기존 화면 위에 새로운 화면을 쌓음.
3. goBack() : stack에서 하나씩 pop된다.

# Redux
- 개념 참고 : https://velopert.com/3528
- Store에 값의 요청, 업데이트 등을 해주는 함수
    - subscribe : 값의 업데이트가 이루어지면 알림
    - dispatch : 업데이트 요청.
    - listener : 상태가 바뀌면 subscribe한 곳에 알려줌. 이때 컴포넌트 리렌더링.

- Action : Store에 일어날 액션.


# 사용 기능 정리
유용한 기능 모음

## 빈 공간 터치 이벤트
참고: https://matthew-jo.tistory.com/15
TouchableWithoutFeedback을 부모에 감싸주고 onPress() 구현.

## Alert
참고: https://stackoverflow.com/questions/37468117/how-to-set-alert-box-title-in-react-natives-alert
Alert 생성. 타이틀, 내용, 버튼들...

## Ionicons
https://github.com/oblador/react-native-vector-icons
react native에서 사용할 수 있는 유용한 아이콘들(https://ionicons.com/)
react-native-vector-icons를 설치하고
1. react-native link react-native-vector-icons 
2. react-native start --reset-cache
3. react-native run-ios or run android
하면 install 된다.
import Icon from 'react-native-vector-icons/Ionicons'

### Platform별로 속성 다르게 주기
https://stackoverflow.com/questions/52122061/how-can-i-create-cross-platform-icon-in-react-native

## react-navigation-stack
https://jeffgukang.github.io/react-native-tutorial/docs/router-tutorial/react-navigation-stack/react-navigation-stack-kr.html

### push 
스택을 쌓으면서 화면 전환
### navigate
일반 화면 전환
### replace
화면 바꾸기(뒤로가기 시에 안 보임)

## react-navigation-tab
https://jeffgukang.github.io/react-native-tutorial/docs/router-tutorial/02-react-navigation-tab/react-navigation-tab-kr.html

