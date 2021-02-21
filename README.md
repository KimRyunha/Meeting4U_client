# Meeting4U_client
# 프로토타입
https://ovenapp.io/view/yfu8QZHi22vjijgxROD8VmK5jB2YY8iY/

# 사용 기능 및 속성
tech_note.md 참고

## feature branch 생성 및 종료

<pre><code>
$ git checkout -b feature/login develop

/* 새로운 기능에 대한 작업 수행 */
/* feature 브랜치에서 모든 작업이 끝나면 */

$ git checkout develop
$ git merge --no-ff feature/login
$ git branch -d feature/login
$ git push origin develop
</code></pre>

* --no--off
  새로운 커밋 객체를 만들어 ‘develop’ 브랜치에 merge 한다.
  이것은 ‘feature’ 브랜치에 존재하는 커밋 이력을 모두 합쳐서 하나의 새로운 커밋 객체를 만들어 ‘develop’ 브랜치로 병합(merge)하는 것이다.

[출처](https://gmlwjd9405.github.io/2018/05/11/types-of-git-branch.html)

# 구현 일지
### 2020-12-08
React Native 개념 공부. 레이아웃 연습.

### 2020-12-09
React Native 개념 공부. 레이아웃 연습.

### 2020-12-10
커스텀버튼 생성. Component와 State 공부.

### 2020-12-13
StartScreen 생성. 

### 2020-12-14
로그인 페이지, 회원가입 페이지 생성.
Alert 생성. Title, Contents, Button 변경. 

### 2020-12-27
Meeting Item Component 생성.

### 2020-12-29
FlatList 이용해서 리스트 생성.

### 2020-12-31
- 6자리 랜덤 코드 생성.
- 미팅 만들기 화면 생성.

### 2021-01-01
- ionicons 연동.
- 메인화면 Tab 으로 레이아웃 변경

### 2021-01-02
- 미팅 생성 페이지 레이아웃 변경.
-  미팅 세부내용 페이지 생성. 
    - 마스터는 이름 옆에 별 기호 생성.
- 미팅 리스트 아이템 클릭하면 미팅 세부내용 페이지로 이동하도록 수정.
- MtDetails, Login Screen 뒤로가기 하면 안 보이게 수정(replace).
- CustomButton Component에 아이콘 기능 추가.

### 2021-01-03
- 회원가입 시 이름 입력창 추가.
- StartScreen 레이아웃, 색상 변경
- LoginScreen 삭제.

### 2021-01-10
- React Native -> Swift로 변경
- Swift 기초 학습

### 2021-01-11
- 로그인 페이지 생성

### 2021-01-13
- 회원가입 버튼 액션 구현
- 추후 로그인 페이지 디자인 개편...

### 2021-01-19
- UI 작업

### 2021-01-20
- 미팅 생성 스크린 생성
- 미팅 세부정보 스크린 생성
- 스와이프로 뒤로가기 구현
- 화면 클릭 시 TextInput dismiss 되도록 수정

### 2021-01-24
- 서버와 연동 테스트
    - 회원가입
    - 로그인
    - 아이디 중복 체크
- MtCard 커스텀화
- LoginScreen 아이디, 비밀번호 공백 체크 구현

### 2021-01-30
- 초대코드 표시
- 지도 표시
