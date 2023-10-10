# krampoline-step2

## 소개

`krampoline-step2`은 krampoline의 React 예제입니다. 
이 저장소에서는 `create-react-app`를 사용하여 기본적인 React App을 만듭니다.
[serve](https://www.npmjs.com/package/serve)를 이용하여 3000번 포트에서 서버를 열고 React 기본 파일을 제공합니다.


쿠버네티스 구성은 다음과 같습니다.
![image](https://github.com/MonoKim01/krampoline-step1/assets/85483855/248fb708-aa34-446b-9d0c-8bb30c9bc5f4)

Ingress에서 Service에게 설정된 랜덤 String으로된 Path로 리다이렉트를 시킵니다.
그렇기 때문에 route나 public폴더의 주소, api 주소 등을 신경써서 작성해 주시기 바랍니다.

## 필요 사항

- 기본적인 IDE 사용법 (자세한 내용은 가이드 문서 참조)

## 주의 사항

- URL 경로를 잘 설정해주세요. 특히나 public 이나 route 를 다시 한 번 점검해주세요.
  - 해당 예시의 경우 `krampoline/.env`에 포함된 `PUBLIC_URL`와 `REACT_APP_PATH`가 해당 역활을 합니다.
  - 자신의 클러스터에서 백엔드를 만든 경우 API 사용의 시에는 꼭 URL 경로를 잘 확인해주세요. 예시로 `krampoline/src/api.js`를 참고하시면 됩니다.
  - 만약 다른 서비스의 API를 사용하려고 하면 카카오의 프록시를 사용해야합니다. 해당 내용은 문의해주세요.
- 꼭 `Dockerfile`과 `k8s` 폴더를 프로젝트에 포함시켜주세요.
  - 프로젝트의 루트 (`/`) 위치에 포함되게 해주세요.
- `k8s/deployment.yaml`과 `k8s/ingress.yaml` 파일은 필히 확인하시기 바랍니다.
- `main`브런치에 작성해주세요.
