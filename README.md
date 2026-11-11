# 린치핀아카데미 공무원 유입 랜딩페이지

공무원과 공공기관 실무자가 린치핀아카데미의 성격을 빠르게 이해하고, 무료 복습 영상 또는 LIVE 강의로 이동하도록 만든 독립 랜딩페이지입니다. 같은 메시지를 서로 다른 시각 언어로 풀어낸 두 가지 버전을 제공합니다.

- [일반 프리미엄 버전](https://obito-ai.github.io/linchpin-public-service-landing/)
- [브루탈리즘 버전](https://obito-ai.github.io/linchpin-public-service-landing/brutalist/)
- [린치핀아카데미 공식 홈페이지](https://linchpin-academy.kr)

## 디자인 기준

- Dropbox의 공식 린치핀아카데미 로고 원본을 사용
- 간다 마사노리의 PASONA 흐름(문제→공감→해결→제안→대상 좁히기→행동)을 과장 없는 공무원 언어로 재구성
- 일반 버전은 코발트·코랄·민트 계열과 `작년 HWP 파일` 장면을 사용
- 브루탈리즘 버전은 검정·형광 노랑·오렌지·시안과 강한 타이포그래피를 사용
- 홈페이지 문장을 옮기지 않고 공무원의 실제 업무 장면을 중심으로 새로 집필
- 가짜 후기·전환율·마감 압박은 사용하지 않음
- 모바일·키보드 탐색·모션 축소 환경 지원

## 로컬 실행

```bash
python3 -m http.server 4173
```

일반 버전은 `http://localhost:4173`, 브루탈리즘 버전은 `http://localhost:4173/brutalist/`을 엽니다.
