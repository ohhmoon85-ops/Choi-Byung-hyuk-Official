import { PageType } from './types';

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
          summary: "진정한 자주 국방을 위해서는 타임라인에 쫓기기보다 핵심 군사 능력의 완벽한 검증이 선행되어야 합니다.",
          date: "2023. 10. 15"
        },
        {
          id: 2,
          category: "Diplomacy & Economy",
          title: "제2의 중동 붐, 사우디 네옴시티와 한국 기업의 기회",
          summary: "변화하는 중동의 경제 지형 속에서 대한민국 기업들이 나아가야 할 전략적 방향성을 제시합니다.",
          date: "2023. 09. 22"
        },
        {
          id: 3,
          category: "Leadership",
          title: "지휘관의 고독과 결단: 4성 장군이 말하는 리더십",
          summary: "위기 상황에서의 의사결정 프로세스와 조직을 하나로 묶는 진정한 리더십의 본질에 대하여.",
          date: "2023. 08. 05"
        },
        {
          id: 4,
          category: "National Security",
          title: "북핵 위협 고도화와 확장억제 실효성 강화 방안",
          summary: "변화하는 안보 환경 속에서 한미 동맹이 추구해야 할 실질적인 억제력 강화 방안을 모색합니다.",
          date: "2023. 07. 12"
        }
      ]
    },
    media: {
      header: {
        title: "현장의 기록",
        desc: "치열했던 훈련 현장부터 긴박했던 외교 무대까지,\n역사의 한 페이지를 장식한 순간들입니다."
      },
      items: [
        {
          id: 1,
          type: "photo",
          title: "사우디 투자부 장관 면담 및 경제 협력 논의",
          imageUrl: "/assets/media_saudi.jpg"
        },
        {
          id: 2,
          type: "photo",
          title: "제29대 한미연합사 부사령관 이임식 고별 연설",
          imageUrl: "/assets/media_speech.jpg"
        },
        {
          id: 3,
          type: "photo",
          title: "이 남자와 함께 해 영광",
          imageUrl: "/assets/media_glory.jpg"
        },
        {
          id: 4,
          type: "photo",
          title: "한미 연합 방위 태세 현장 점검 (with Gen. Abrams)",
          imageUrl: "/assets/media_abrams.jpg"
        }
      ]
    },
    contact: {
      header: {
        title: "소통과 연결",
        desc: "대한민국의 안보와 미래를 위한 논의라면 언제든 환영합니다.\n강연, 자문, 언론 인터뷰 등을 제안해 주세요."
      },
      info: {
        title: "Contact Info",
        office: "사무실 (Office)",
        address: "서울특별시 종로구 (가상 주소)",
        inquiryTitle: "주요 문의 분야",
        inquiries: [
          "기업 및 기관 안보/리더십 강연",
          "방산 수출 및 중동 진출 기업 자문",
          "언론 인터뷰 및 방송 출연"
        ]
      },
      form: {
        title: "메시지 보내기",
        name: "이름 (Name)",
        org: "소속 (Organization)",
        email: "이메일 (Email)",
        type: "문의 유형 (Type)",
        typeOptions: ["강연 요청 (Lecture)", "자문 요청 (Advisory)", "인터뷰 요청 (Interview)", "기타 (Other)"],
        message: "상세 내용 (Message)",
        submit: "메시지 전송하기"
      }
    },
    admin: {
      loginTitle: "관리자 로그인",
      password: "비밀번호",
      loginButton: "로그인",
      dashboardTitle: "작가 대시보드",
      writeTitle: "새 글 쓰기",
      formTitle: "제목",
      formCategory: "카테고리",
      formSummary: "요약 내용",
      formLang: "언어 설정",
      saveButton: "글 게시하기",
      successMessage: "성공적으로 게시되었습니다.",
      backButton: "홈으로 돌아가기"
    },
    footer: {
      desc: "전 한미연합사 부사령관\n전 주 사우디아라비아 대사\n\n대한민국의 굳건한 안보와\n실리적 외교를 위한 평생의 헌신.",
      quickLinks: "Quick Links",
      contact: "Contact"
    }
  },
  en: {
    nav: [
      { label: 'Home', page: PageType.HOME },
      { label: 'Profile', page: PageType.PROFILE },
      { label: 'Insights', page: PageType.INSIGHTS },
      { label: 'Media & Gallery', page: PageType.MEDIA },
      { label: 'Contact', page: PageType.CONTACT },
    ],
    home: {
      hero: {
        title: "From Battlefield Commander\nto Diplomat of Peace",
        titleHighlight: "Diplomat of Peace",
        desc: "From the frontlines of Korea's national security at CFC to the heart of the Middle East in Saudi Arabia.\nChoi Byung-hyuk's path has always been towards national interest.",
        ctaProfile: "View Profile",
        ctaInsights: "Read Insights"
      },
      identity: {
        title: "\"In an era of security crisis, proven leadership is essential.\"",
        challengeTitle: "The Challenge",
        challengeDesc: "Amid rapidly changing international situations and complex security threats, experience and insight to suggest the right direction are needed more than ever.",
        solutionTitle: "The Solution",
        solutionDesc: "With over 40 years of practical experience in military and diplomatic fields, providing the strategic path forward for the Republic of Korea."
      },
      features: {
        title: "Core Expertise",
        items: [
          {
            title: "ROK-US Alliance Expert",
            desc: "Former Deputy Commander, ROK-US CFC.\nEstablished joint defense posture and laid the foundation for OPCON transfer."
          },
          {
            title: "Middle East Strategist",
            desc: "Former Ambassador to Saudi Arabia.\nLed practical diplomacy including energy security and defense exports, opening new horizons."
          },
          {
            title: "Crisis Management",
            desc: "Proven leadership in commanding organizations and deriving optimal solutions during national crises."
          }
        ]
      },
      proof: {
        years: "Years of Service",
        general: "General (Ret.)",
        ambassador: "Top Diplomat",
        merit: "Class Order Merit",
        quote: "\"General Choi is a true patriot with exceptional strategic insight as both a soldier and a diplomat.\"",
        quoteSource: "– Former USFK Commander"
      }
    },
    profile: {
      header: {
        title: "Journey of Dedication",
        desc: "I went wherever the nation called.\nDays lived with the honor of a soldier and the mission of a diplomat."
      },
      timeline: [
        {
          period: "2020 - 2022",
          role: "Ambassador Extraordinary and Plenipotentiary to Saudi Arabia",
          description: "Elevated ROK-Saudi relations through 'Vision 2030' cooperation, led energy security and defense exports.",
          type: "diplomacy"
        },
        {
          period: "2019 - 2020",
          role: "Deputy Commander, ROK-US Combined Forces Command (General)",
          description: "Strengthened joint defense posture, prepared for OPCON transfer, and practically commanded the robust ROK-US alliance.",
          type: "military"
        },
        {
          period: "2017 - 2019",
          role: "Vice Chief of Staff, ROK Army",
          description: "Oversaw army reform and force enhancement projects, led future defense innovation.",
          type: "military"
        },
        {
          period: "2015 - 2017",
          role: "Commanding General, 5th Corps",
          description: "Defended key strategic points on the central front and commanded elite mechanized units.",
          type: "military"
        },
        {
          period: "Education",
          role: "KMA Graduate / US Army War College Master's",
          description: "Built deep academic background in military strategy and international relations.",
          type: "education"
        }
      ],
      awards: {
        title: "Honors & Awards",
        items: [
          "Order of National Security Merit, Tongil Medal (Highest Honor)",
          "Legion of Merit (USA)",
          "Multiple Presidential Commendations and Defense Minister Citations"
        ]
      }
    },
    insights: {
      header: {
        title: "Insights & Perspectives",
        desc: "Sharing lessons learned from the field.\nStrategic proposals for Korea's tomorrow."
      },
      posts: [
        {
          id: 1,
          category: "National Security",
          title: "OPCON Transfer: Why Conditions Matter More Than Timing",
          summary: "For true self-defense, perfect verification of key military capabilities must precede adherence to a timeline.",
          date: "Oct 15, 2023"
        },
        {
          id: 2,
          category: "Diplomacy & Economy",
          title: "The Second Middle East Boom: NEOM City and Opportunities",
          summary: "Suggesting strategic directions for Korean companies amidst the changing economic landscape of the Middle East.",
          date: "Sep 22, 2023"
        },
        {
          id: 3,
          category: "Leadership",
          title: "Solitude and Decision: Leadership by a 4-Star General",
          summary: "On the decision-making process in crises and the essence of true leadership that unites an organization.",
          date: "Aug 05, 2023"
        },
        {
          id: 4,
          category: "National Security",
          title: "North Korean Nuclear Threat and Extended Deterrence",
          summary: "Exploring practical ways to strengthen deterrence for the ROK-US alliance in a changing security environment.",
          date: "Jul 12, 2023"
        }
      ]
    },
    media: {
      header: {
        title: "Moments of Impact",
        desc: "From intense training grounds to urgent diplomatic stages,\nthese are the moments that marked history."
      },
      items: [
        {
          id: 1,
          type: "photo",
          title: "Meeting with Saudi Minister of Investment",
          imageUrl: "/assets/media_saudi.jpg"
        },
        {
          id: 2,
          type: "photo",
          title: "Farewell Speech at CFC Deputy Commander Change of Command",
          imageUrl: "/assets/media_speech.jpg"
        },
        {
          id: 3,
          type: "photo",
          title: "Credential Presentation Ceremony as Ambassador",
          imageUrl: "/assets/media_president.jpg"
        },
        {
          id: 4,
          type: "photo",
          title: "Inspecting ROK-US Joint Defense Posture (with Gen. Abrams)",
          imageUrl: "/assets/media_abrams.jpg"
        }
      ]
    },
    contact: {
      header: {
        title: "Connect",
        desc: "Discussions for Korea's security and future are always welcome.\nPlease propose lectures, advisory roles, or interviews."
      },
      info: {
        title: "Contact Info",
        office: "Office",
        address: "Jongno-gu, Seoul (Virtual Address)",
        inquiryTitle: "Key Inquiry Areas",
        inquiries: [
          "Security/Leadership Lectures for Corporations",
          "Advisory for Defense Exports & Middle East Entry",
          "Media Interviews & Broadcasts"
        ]
      },
      form: {
        title: "Send a Message",
        name: "Name",
        org: "Organization",
        email: "Email",
        type: "Inquiry Type",
        typeOptions: ["Lecture Request", "Advisory Request", "Interview Request", "Other"],
        message: "Message",
        submit: "Send Message"
      }
    },
    admin: {
      loginTitle: "Admin Login",
      password: "Password",
      loginButton: "Login",
      dashboardTitle: "Author Dashboard",
      writeTitle: "Write New Post",
      formTitle: "Title",
      formCategory: "Category",
      formSummary: "Summary",
      formLang: "Language",
      saveButton: "Publish Post",
      successMessage: "Successfully published.",
      backButton: "Back to Home"
    },
    footer: {
      desc: "Former Deputy Commander, ROK-US CFC\nFormer Ambassador to Saudi Arabia\n\nA lifetime of dedication to\nrobust security and practical diplomacy.",
      quickLinks: "Quick Links",
      contact: "Contact"
    }
  }
};
