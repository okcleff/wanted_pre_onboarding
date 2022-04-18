# wanted_pre_onboarding 선발 과제

## 1. Toggle

> ### 주요 구현 사항

#### 핵심 요소
- `useState` hook으로 선택된 버튼의 상태를 관리(기본: `default`, 상세: `detail`)
- `styled-components`에 상태를 `props`로 넘겨주어, 상태에 따라 글자색과 배경 슬라이드에 조건부 스타일 적용

#### 부가 요소
- `transform` 속성과 `transition` 속성으로 슬라이드 애니메이션 구현

<br />

> ### 느낀 점, 잘한 점, 아쉬운 점 등
- 처음에는 상태를 true/false의 `boolean`으로 구분하였으나, 이 경우 이미 선택된 버튼을 클릭하였을 때에 상태가 반대로 바뀜 <br /> ex) `기본` 버튼이 선택되어 있을 때 `기본` 버튼을 눌리면 `상세` 버튼이 선택됨
- 상태를 'default'와 'detail'이라는 `string`으로 관리하여 이를 방지함

<br />

## 2. Tab

> ### 주요 구현 사항

#### 핵심 요소
- 선택된 탭을 상태를 관리(`감자`, `고구마`, `카레라이스`)
- `makeButtons`라는 함수를 통해 `Button` 컴포넌트 재활용
- `styled-components`에 상태를 `props`로 넘겨주어, 상태에 따라 글자색과 배경 슬라이드에 조건부 스타일 적용

#### 부가 요소
- `transform` 속성과 `transition` 속성으로 슬라이드 애니메이션 구현

<br />

> ### 느낀 점, 잘한 점, 아쉬운 점 등
- `makeButtons` 함수로 코드를 간추림

<br />

## 3. Slider

> ### 주요 구현 사항

#### 핵심 요소
- `input`의 type을 `range`로 설정하고, `onChange` 이벤트를 통해 `value`를 상태(percentage)로 관리
- `makeSlide`라는 함수로 100칸의 `div`를 이어 붙여 슬라이드 마크업을 구현하고, 상태에 따라 조건부 스타일 적용
- `input`의 `appearance`를 `none`으로 부여한 뒤, `makeSlide` 함수로 구현된 슬라이드에 오버랩 <br /> (부모 요소 position: relative, 자식 input position: absolute)
- `input[type="range"]`의 `slider-thumb`에도 임의로 스타일 부여
- 선택된 상태에 따라 상단바에 percentage 렌더링

#### 부가 요소
- 버튼의 숫자를 배열 `[1, 25, 50, 75, 100]`로 관리하여 `Array.map()` 메소드로 렌더링해주고, 클릭시 해당 숫자에 따라 상태를 변화시킬 수 있도록 `onClick` 이벤트 부여
- Slide의 전체 길이에 맞게 각 버튼의 left, right에 `margin`값을 부여하여 픽셀 매칭

<br />

> ### 느낀 점, 잘한 점, 아쉬운 점 등
- 100칸의 `div`를 이어붙여 슬라이드를 만든 것이 효율적인 방법에 대한 의문이 듦
- 하나의 `div`로 Slide를 만들고, 상태(percentage)에 따라 `width`의 픽셀을 늘어나고 줄어들게 만드는 방법이 대안이 될 수 있겠다는 생각
- 아래 버튼의 간격을 부모 요소에 `display: flex`, `justify-content: space-between`속성을 줘서 맞추어 볼 수도 있음

<br />

## 4. Input

> ### 주요 구현 사항

#### 핵심 요소
- `<form>`으로 둘러싼 `<input>`으로 이메일과 비밀번호를 입력 받음

#### 부가 요소
- Email의 유효성을 정규표현식(`emailRegex`)을 통해 검사하고, 검사 결과에 따른 boolean 값을 상태로 관리
- Email의 유효성 여부(`isValid`)에 따라 체크 이미지 조건부 스타일
- 비밀번호 입력창의 type을 상태로 관리(`password` 또는 `text`)
- 비밀번호 입력창의 눈 모양 이미지는 `react-icons`에서 import
- 눈 모양 이미지에 `onClick` 이벤트를 부여하여 `inputType`을 변경

<br />

> ### 느낀 점, 잘한 점, 아쉬운 점 등
- `react-icons`에서 import해온 이미지 컴포넌트를 `styled(컴포넌트명)`을 통해 `styled-components`처럼 관리하고 속성을 부여할 수 있다는 것을 배움

<br />

## 5. Dropdown

> ### 주요 구현 사항

#### 핵심 요소
- 선택창의 상태(`isVisible`)를 boolean으로 관리하여, 드롭다운 메뉴의 `onClick` 이벤트에 따라 조건부 렌더링 구현
- 선택창의 키워드를 배열(`example`)에 담아 렌더링하고, 클릭한 키워드를 `selectedKeyword`라는 상태로 관리
- `selectedKeyword`에 따라 드롭다운 메뉴에 키워드 렌더링

#### 부가 요소
- 검색창에 입력된 value를 `searchValue`로 관리
- `example`을 `spread syntax`로 복사한 뒤 `Array.filter()`와 `String.includes()` 메소드를 활용하여, 키워드들 중 `searchValue`를 포함하는 키워드만 `filteredList`로 반환
- `All Symbols`는 항상 포함되어 있으므로, `filteredList`의 첫 인덱스에 `All Symbols`를 추가하여(`['All Symbols', ...filteredList]`) 필터링된 키워드를 렌더링

<br />

> ### 느낀 점, 잘한 점, 아쉬운 점 등
- 이번에는 키워드 리스트를 `example`이라는 배열로 선언해서 사용했으나, `async`와 `await`로 비동기 처리하여 `fetch` 받은 데이터로도 구현해볼 수 있을 것 같음 

