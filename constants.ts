import { PageType } from './types';

// [중요] 빌드 에러 해결을 위해 추가된 변수입니다. 실제 이메일 주소로 변경하세요.
export const CONTACT_EMAIL = "contact@example.com"; 

export const TRANSLATIONS = {
  ko: {
    nav: [
      { label: 'Home', page: PageType.HOME },
      { label: 'Profile', page: PageType.PROFILE },
      { label: 'Insights', page: PageType.INSIGHTS },
      { label: 'Media & Gallery', page: PageType.MEDIA },
      { label: 'Contact', page: PageType.CONTACT },
    ],
    home: {
      hero: {
        title: "전장의 지휘관에서\n평화의 외교관으로",
        titleHighlight: "평화의 외교관",
        desc: "대한민국 안보의 최전선 한미연합사에서 중동의 핵심 사우디아라비아까지.\n최병혁이 걸어온 길은 언제나 국익을 향했습니다.",
        ctaProfile: "프로필 자세히 보기",
        ctaInsights: "최신 칼럼 읽기"
      },
      identity: {
        title: "\"안보 위기의 시대, 검증된 리더십이 필요합니다.\"",
        challengeTitle: "The Challenge",
        challengeDesc: "급변하는 국제 정세와 복잡해지는 안보 위협 속에서, 단순한 대응을 넘어 올바른 방향을 제시할 경험과 통찰이 그 어느 때보다 필요한 시점입니다.",
        solutionTitle: "The Solution",
        solutionDesc: "40여 년간 군과 외교 현장에서 축적한 실전 경험과 전략적 식견으로, 대한민국이 나아가야 할 길을 제시합니다."
      },
      features: {
        title: "Core Expertise",
        items: [
          {
            title: "한미 동맹 전문가",
            desc: "한미연합사 부사령관 역임.\n연합 방위 태세 확립과 전시작전통제권 전환의 기틀을 마련했습니다."
          },
          {
            title: "중동 외교 전략가",
            desc: "주 사우디아라비아 대사 역임.\n에너지 안보와 방산 수출 등 실리 외교를 주도하며 새로운 지평을 열었습니다."
          },
          {
            title: "위기 관리 리더십",
            desc: "국가적 위기 상황에서 조직을 통솔하고\n최적의 해법을 도출하는 검증된 리더십을 보유했습니다."
          }
        ]
      },
      proof: {
        years: "Years of Service",
        general: "General (Ret.)",
        ambassador: "Top Diplomat",
        merit: "Class Order Merit",
        quote: "\"최병혁 장군은 군인이자 외교관으로서, 탁월한 전략적 식견을 가진 진정한 애국자다.\"",
        quoteSource: "– 전 주한미군사령관 추천사"
      }
    },
    profile: {
      header: {
        title: "헌신의 발자취",
        desc: "국가가 부르면 어디든 갔습니다.\n군인으로서의 명예와 외교관으로서의 사명을 가슴에 품고 살아온 날들입니다."
      },
      timeline: [
        {
          period: "2020 - 2022",
          role: "주 사우디아라비아 대한민국 특명전권대사",
          description: "'비전 2030' 협력 강화를 통한 한-사우디 관계 격상, 에너지 안보 및 방산 수출 주도.",
          type: "diplomacy"
        },
        {
          period: "2019 - 2020",
          role: "제29대 한미연합군사령부 부사령관 (육군 대장)",
          description: "한미 연합 방위 태세 강화 및 전시작전통제권 전환 기틀 마련, 굳건한 한미 동맹의 실질적 지휘.",
          type: "military"
        },
        {
          period: "2017 - 2019",
          role: "육군참모차장",
          description: "육군 개혁 및 전력 증강 사업 총괄, 미래 국방 혁신 주도.",
          type: "military"
        },
        {
          period: "2015 - 2017",
          role: "제5군단장",
          description: "중부 전선 핵심 요충지 방어 및 최정예 기계화 부대 지휘.",
          type: "military"
        },
        {
          period: "Education",
          role: "육군사관학교 졸업 / 미 육군 대학원 석사",
          description: "군사 전략 및 국제 관계에 대한 심도 있는 학문적 배경 구축.",
          type: "education"
        }
      ],
      awards: {
        title: "주요 상훈",
        items: [
          "보국훈장 통일장 수훈 (대한민국 정부 최고 영예)",
          "미 공로훈장 (Legion of Merit) 수훈",
          "대통령 표창 및 국방부 장관 표창 다수"
        ]
      }
    },
    insights: {
      header: {
        title: "통찰과 제언",
        desc: "현장의 경험을 통해 얻은 교훈을 나눕니다.\n대한민국의 내일을 위한 전략적 제언들입니다."
      },
      posts: [
        {
          id: 1,
          category: "National Security",
          title: "전시작전권 전환, 시기보다 조건이 중요한 이유",
          summary: "진
