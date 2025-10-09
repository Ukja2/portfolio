import html from "../../assets/icons/HTML.svg";
import css from "../../assets/icons/CSS.svg";
import javascript from "../../assets/icons/JavaScript.svg";
import react from "../../assets/icons/React-Light.svg";
import netlify from "../../assets/icons/Netlify-Light.svg";
import vite from "../../assets/icons/Vite-Light.svg";
import git from "../../assets/icons/Github-Light.svg";
import firebase from "../../assets/icons/Firebase-Light.svg";
import figma from "../../assets/icons/Figma.svg";

export const SkillsData = {
  Frontend: [
    {
      name: "HTML",
      icon: html,
      details: [
        "시멘틱 마크업 구조 설계",
      ],
    },
    {
      name: "CSS",
      icon: css,
      details: [
        "Flex / Grid 레이아웃 활용",
        "CSS Module 기반 컴포넌트 스타일 관리",
      ],
    },
    {
      name: "JavaScript",
      icon: javascript,
      details: [
        "ES6+ 문법 적극 활용",
      ],
    },
    {
      name: "React",
      icon: react,
      details: [
        "Custom Hook 제작 및 재사용",
        "Zustand로 상태 관리 구현",
        "React Hook Form으로 폼 처리 및 유효성 검사",
        "Framer Motion, AOS 등 인터랙션 라이브러리 활용",
        "PWA 프로젝트 구성 경험",
        "Axios 기반 API 통신",
        "외부 SDK 활용 경험",
      ],
    },
  ],

  Deploy: [
    {
      name: "Netlify",
      icon: netlify,
      details: [
        "GitHub 연동 자동 배포 구성",
        "환경변수 설정 및 도메인 연결",
      ],
    },
  ],

  Tools: [
    {
      name: "Git / GitHub",
      icon: git,
      details: [
        "PR / Commit Convention 기반 협업 경험",
      ],
    },
    {
      name: "Firebase",
      icon: firebase,
      details: [
        "Auth로 로그인/회원가입 구현",
        "Firestore CRUD 로직 작성",
        "Hosting 통한 정적 사이트 배포",
      ],
    },
    {
      name: "Vite",
      icon: vite,
      details: [
        "빠른 개발 환경 구성 및 빌드 이해",
      ],
    },
    {
      name: "Figma",
      icon: figma,
      details: [
        "디자인 시스템 기반 협업 경험",
      ],
    },
  ],
};
