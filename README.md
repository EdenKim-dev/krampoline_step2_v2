# krampoline-step2

## 소개

`krampoline-step2`은 krampoline의 React 예제입니다. 
이 저장소에서는 `create-react-app`를 사용하여 기본적인 React App을 만듭니다.
[serve](https://www.npmjs.com/package/serve)를 이용하여 3000번 포트에서 서버를 열고 React 기본 파일을 제공합니다.


쿠버네티스 구성은 다음과 같습니다.
![‎크램폴린 쿠버네티스 ‎001](https://github.com/EdenKim-dev/krampoline_step2_v2/assets/108042383/b0ef60b6-cde7-466b-a6da-007f48fc797b)

발급된 url에 포함된 random uid를 기반으로 사용자의 클러스터가 선택됩니다.
클러스터 내에서 Ingress가 해당 주소를 받아서 적절한 Service에게 리다이렉트 시킵니다.

## 필요 사항

- 기본적인 IDE 사용법 (자세한 내용은 가이드 문서 참조)

## 주의 사항

- 만약 다른 서비스의 API를 사용하려고 하면 카카오의 프록시를 사용해야합니다. 해당 내용은 문의해주세요.
- 꼭 `Dockerfile`과 `k8s` 폴더를 프로젝트에 포함시켜주세요.
  - 프로젝트의 루트 (`/`) 위치에 포함되게 해주세요.
- `k8s/deployment.yaml` 파일은 필히 확인하시기 바랍니다.
- `main` 브런치에 작성해주세요.
