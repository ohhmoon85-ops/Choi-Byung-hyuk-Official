import { PageType, NavItem, TimelineItem, InsightItem, MediaItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', page: PageType.HOME },
  { label: 'Profile', page: PageType.PROFILE },
  { label: 'Insights', page: PageType.INSIGHTS },
  { label: 'Media & Gallery', page: PageType.MEDIA },
  { label: 'Contact', page: PageType.CONTACT },
];

export const PROFILE_TIMELINE: TimelineItem[] = [
  {
    period: "2019 - 2020",
    role: "제29대 한미연합군사령부 부사령관 (육군 대장)",
    description: "한미 연합 방위 태세 강화 및 전시작전통제권 전환 기틀 마련, 굳건한 한미 동맹의 실질적 지휘.",
    type: "military"
  },
  {
    period: "2020 - 2022",
    role: "주 사우디아라비아 대한민국 특명전권대사",
    description: "'비전 2030' 협력 강화를 통한 한-사우디 관계 격상, 에너지 안보 및 방산 수출 주도.",
    type: "diplomacy"
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
];

export const INSIGHT_POSTS: InsightItem[] = [
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
];

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: 1,
    type: "photo",
    title: "사우디 투자부 장관 면담 및 경제 협력 논의",
    imageUrl: "https://images.unsplash.com/photo-1559592413-7cec4d0ea49b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    type: "photo",
    title: "제29대 한미연합사 부사령관 이임식 고별 연설",
    imageUrl: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    type: "photo",
    title: "주 사우디아라비아 대사 신임장 수여식",
    imageUrl: "https://images.unsplash.com/photo-1550965386-7a763f0d5718?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    type: "photo",
    title: "한미 연합 방위 태세 현장 점검 (with Gen. Abrams)",
    imageUrl: "https://images.unsplash.com/photo-1596726756616-83296c68e16d?auto=format&fit=crop&q=80&w=800"
  }
];