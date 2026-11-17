/*
  배경 맵 목록 — 이 파일은 직접 수정해도 됩니다.

  맵 하나 = { ... } 한 덩어리. 추가할 때는 기존 줄을 복사해서 값만 바꾸세요.
    id    : 겹치지 않는 영문/숫자 이름. 게임 기록(JSON)에 이 값이 저장되므로, 한번 쓴 뒤에는 바꾸지 마세요.
    name  : 목록에 보일 이름 (한글 가능)
    group : 목록에서 묶어 보일 그룹 이름
    file  : index.html 기준 이미지 경로 (대소문자까지 정확히. GitHub는 대소문자를 구분합니다)
    w, h  : 맵 가로·세로 크기,  unit : "in"(인치) 또는 "cm"
            이미지는 맵 테두리에 맞게 잘라 두고, 가로세로 비율이 w:h 와 같아야 합니다.

  주의
    - 각 { ... } 뒤에 쉼표(,)를 붙이세요. (마지막 줄 뒤 쉼표도 괜찮습니다)
    - 글자는 큰따옴표 " " 로 감싸세요.
    - 이 파일에 오타가 있으면 목록이 비어 보입니다. 그럴 때는 방금 고친 줄을 다시 확인하세요.

  워해머 40K 배치도 45종: 공식 Event Companion(9~53쪽)의 Force Disposition 대진별 Layout A/B/C.
  원본은 세로(44"x60")이며, 시계 방향 90° 돌려 가로(60"x44")로 맞췄습니다.
*/
window.BATTLE_MAPS = [
  // Take and Hold vs Take and Hold  (미션: Battlefield Dominance / Battlefield Dominance)
  { id: "take_and_hold_vs_take_and_hold_a", name: "Layout A", group: "Take and Hold vs Take and Hold", file: "maps/40k/TAKE_AND_HOLD_VS_TAKE_AND_HOLD_A.jpg", w: 60, h: 44, unit: "in" },
  { id: "take_and_hold_vs_take_and_hold_b", name: "Layout B", group: "Take and Hold vs Take and Hold", file: "maps/40k/TAKE_AND_HOLD_VS_TAKE_AND_HOLD_B.jpg", w: 60, h: 44, unit: "in" },
  { id: "take_and_hold_vs_take_and_hold_c", name: "Layout C", group: "Take and Hold vs Take and Hold", file: "maps/40k/TAKE_AND_HOLD_VS_TAKE_AND_HOLD_C.jpg", w: 60, h: 44, unit: "in" },

  // Take and Hold vs Purge the Foe  (미션: Immovable Object / Unstoppable Force)
  { id: "take_and_hold_vs_purge_the_foe_a", name: "Layout A", group: "Take and Hold vs Purge the Foe", file: "maps/40k/TAKE_AND_HOLD_VS_PURGE_THE_FOE_A.jpg", w: 60, h: 44, unit: "in" },
  { id: "take_and_hold_vs_purge_the_foe_b", name: "Layout B", group: "Take and Hold vs Purge the Foe", file: "maps/40k/TAKE_AND_HOLD_VS_PURGE_THE_FOE_B.jpg", w: 60, h: 44, unit: "in" },
  { id: "take_and_hold_vs_purge_the_foe_c", name: "Layout C", group: "Take and Hold vs Purge the Foe", file: "maps/40k/TAKE_AND_HOLD_VS_PURGE_THE_FOE_C.jpg", w: 60, h: 44, unit: "in" },

  // Take and Hold vs Disruption  (미션: Determined Acquisition / Death Trap)
  { id: "take_and_hold_vs_disruption_a", name: "Layout A", group: "Take and Hold vs Disruption", file: "maps/40k/TAKE_AND_HOLD_VS_DISRUPTION_A.jpg", w: 60, h: 44, unit: "in" },
  { id: "take_and_hold_vs_disruption_b", name: "Layout B", group: "Take and Hold vs Disruption", file: "maps/40k/TAKE_AND_HOLD_VS_DISRUPTION_B.jpg", w: 60, h: 44, unit: "in" },
  { id: "take_and_hold_vs_disruption_c", name: "Layout C", group: "Take and Hold vs Disruption", file: "maps/40k/TAKE_AND_HOLD_VS_DISRUPTION_C.jpg", w: 60, h: 44, unit: "in" },

  // Take and Hold vs Reconnaissance  (미션: Purge and Secure / Reconnaissance Sweep)
  { id: "take_and_hold_vs_reconnaissance_a", name: "Layout A", group: "Take and Hold vs Reconnaissance", file: "maps/40k/TAKE_AND_HOLD_VS_RECONNAISSANCE_A.jpg", w: 60, h: 44, unit: "in" },
  { id: "take_and_hold_vs_reconnaissance_b", name: "Layout B", group: "Take and Hold vs Reconnaissance", file: "maps/40k/TAKE_AND_HOLD_VS_RECONNAISSANCE_B.jpg", w: 60, h: 44, unit: "in" },
  { id: "take_and_hold_vs_reconnaissance_c", name: "Layout C", group: "Take and Hold vs Reconnaissance", file: "maps/40k/TAKE_AND_HOLD_VS_RECONNAISSANCE_C.jpg", w: 60, h: 44, unit: "in" },

  // Take and Hold vs Priority Assets  (미션: Inescapable Dominion / Secure Asset)
  { id: "take_and_hold_vs_priority_assets_a", name: "Layout A", group: "Take and Hold vs Priority Assets", file: "maps/40k/TAKE_AND_HOLD_VS_PRIORITY_ASSETS_A.jpg", w: 60, h: 44, unit: "in" },
  { id: "take_and_hold_vs_priority_assets_b", name: "Layout B", group: "Take and Hold vs Priority Assets", file: "maps/40k/TAKE_AND_HOLD_VS_PRIORITY_ASSETS_B.jpg", w: 60, h: 44, unit: "in" },
  { id: "take_and_hold_vs_priority_assets_c", name: "Layout C", group: "Take and Hold vs Priority Assets", file: "maps/40k/TAKE_AND_HOLD_VS_PRIORITY_ASSETS_C.jpg", w: 60, h: 44, unit: "in" },

  // Purge the Foe vs Purge the Foe  (미션: Meatgrinder / Meatgrinder)
  { id: "purge_the_foe_vs_purge_the_foe_a", name: "Layout A", group: "Purge the Foe vs Purge the Foe", file: "maps/40k/PURGE_THE_FOE_VS_PURGE_THE_FOE_A.jpg", w: 60, h: 44, unit: "in" },
  { id: "purge_the_foe_vs_purge_the_foe_b", name: "Layout B", group: "Purge the Foe vs Purge the Foe", file: "maps/40k/PURGE_THE_FOE_VS_PURGE_THE_FOE_B.jpg", w: 60, h: 44, unit: "in" },
  { id: "purge_the_foe_vs_purge_the_foe_c", name: "Layout C", group: "Purge the Foe vs Purge the Foe", file: "maps/40k/PURGE_THE_FOE_VS_PURGE_THE_FOE_C.jpg", w: 60, h: 44, unit: "in" },

  // Purge the Foe vs Disruption  (미션: Punishment / Delaying Action)
  { id: "purge_the_foe_vs_disruption_a", name: "Layout A", group: "Purge the Foe vs Disruption", file: "maps/40k/PURGE_THE_FOE_VS_DISRUPTION_A.jpg", w: 60, h: 44, unit: "in" },
  { id: "purge_the_foe_vs_disruption_b", name: "Layout B", group: "Purge the Foe vs Disruption", file: "maps/40k/PURGE_THE_FOE_VS_DISRUPTION_B.jpg", w: 60, h: 44, unit: "in" },
  { id: "purge_the_foe_vs_disruption_c", name: "Layout C", group: "Purge the Foe vs Disruption", file: "maps/40k/PURGE_THE_FOE_VS_DISRUPTION_C.jpg", w: 60, h: 44, unit: "in" },

  // Purge the Foe vs Reconnaissance  (미션: Consecrate / Triangulation)
  { id: "purge_the_foe_vs_reconnaissance_a", name: "Layout A", group: "Purge the Foe vs Reconnaissance", file: "maps/40k/PURGE_THE_FOE_VS_RECONNAISSANCE_A.jpg", w: 60, h: 44, unit: "in" },
  { id: "purge_the_foe_vs_reconnaissance_b", name: "Layout B", group: "Purge the Foe vs Reconnaissance", file: "maps/40k/PURGE_THE_FOE_VS_RECONNAISSANCE_B.jpg", w: 60, h: 44, unit: "in" },
  { id: "purge_the_foe_vs_reconnaissance_c", name: "Layout C", group: "Purge the Foe vs Reconnaissance", file: "maps/40k/PURGE_THE_FOE_VS_RECONNAISSANCE_C.jpg", w: 60, h: 44, unit: "in" },

  // Purge the Foe vs Priority Assets  (미션: Destroyer's Wrath / Vital Link)
  { id: "purge_the_foe_vs_priority_assets_a", name: "Layout A", group: "Purge the Foe vs Priority Assets", file: "maps/40k/PURGE_THE_FOE_VS_PRIORITY_ASSETS_A.jpg", w: 60, h: 44, unit: "in" },
  { id: "purge_the_foe_vs_priority_assets_b", name: "Layout B", group: "Purge the Foe vs Priority Assets", file: "maps/40k/PURGE_THE_FOE_VS_PRIORITY_ASSETS_B.jpg", w: 60, h: 44, unit: "in" },
  { id: "purge_the_foe_vs_priority_assets_c", name: "Layout C", group: "Purge the Foe vs Priority Assets", file: "maps/40k/PURGE_THE_FOE_VS_PRIORITY_ASSETS_C.jpg", w: 60, h: 44, unit: "in" },

  // Disruption vs Disruption  (미션: Outmanoeuvre / Outmanoeuvre)
  { id: "disruption_vs_disruption_a", name: "Layout A", group: "Disruption vs Disruption", file: "maps/40k/DISRUPTION_VS_DISRUPTION_A.jpg", w: 60, h: 44, unit: "in" },
  { id: "disruption_vs_disruption_b", name: "Layout B", group: "Disruption vs Disruption", file: "maps/40k/DISRUPTION_VS_DISRUPTION_B.jpg", w: 60, h: 44, unit: "in" },
  { id: "disruption_vs_disruption_c", name: "Layout C", group: "Disruption vs Disruption", file: "maps/40k/DISRUPTION_VS_DISRUPTION_C.jpg", w: 60, h: 44, unit: "in" },

  // Disruption vs Reconnaissance  (미션: Smoke and Mirrors / Surveil the Foe)
  { id: "disruption_vs_reconnaissance_a", name: "Layout A", group: "Disruption vs Reconnaissance", file: "maps/40k/DISRUPTION_VS_RECONNAISSANCE_A.jpg", w: 60, h: 44, unit: "in" },
  { id: "disruption_vs_reconnaissance_b", name: "Layout B", group: "Disruption vs Reconnaissance", file: "maps/40k/DISRUPTION_VS_RECONNAISSANCE_B.jpg", w: 60, h: 44, unit: "in" },
  { id: "disruption_vs_reconnaissance_c", name: "Layout C", group: "Disruption vs Reconnaissance", file: "maps/40k/DISRUPTION_VS_RECONNAISSANCE_C.jpg", w: 60, h: 44, unit: "in" },

  // Disruption vs Priority Assets  (미션: Locate and Deny / Extract Relic)
  { id: "disruption_vs_priority_assets_a", name: "Layout A", group: "Disruption vs Priority Assets", file: "maps/40k/DISRUPTION_VS_PRIORITY_ASSETS_A.jpg", w: 60, h: 44, unit: "in" },
  { id: "disruption_vs_priority_assets_b", name: "Layout B", group: "Disruption vs Priority Assets", file: "maps/40k/DISRUPTION_VS_PRIORITY_ASSETS_B.jpg", w: 60, h: 44, unit: "in" },
  { id: "disruption_vs_priority_assets_c", name: "Layout C", group: "Disruption vs Priority Assets", file: "maps/40k/DISRUPTION_VS_PRIORITY_ASSETS_C.jpg", w: 60, h: 44, unit: "in" },

  // Reconnaissance vs Reconnaissance  (미션: Gather Intel / Gather Intel)
  { id: "reconnaissance_vs_reconnaissance_a", name: "Layout A", group: "Reconnaissance vs Reconnaissance", file: "maps/40k/RECONNAISSANCE_VS_RECONNAISSANCE_A.jpg", w: 60, h: 44, unit: "in" },
  { id: "reconnaissance_vs_reconnaissance_b", name: "Layout B", group: "Reconnaissance vs Reconnaissance", file: "maps/40k/RECONNAISSANCE_VS_RECONNAISSANCE_B.jpg", w: 60, h: 44, unit: "in" },
  { id: "reconnaissance_vs_reconnaissance_c", name: "Layout C", group: "Reconnaissance vs Reconnaissance", file: "maps/40k/RECONNAISSANCE_VS_RECONNAISSANCE_C.jpg", w: 60, h: 44, unit: "in" },

  // Reconnaissance vs Priority Assets  (미션: Search and Scour / Vanguard Operation)
  { id: "reconnaissance_vs_priority_assets_a", name: "Layout A", group: "Reconnaissance vs Priority Assets", file: "maps/40k/RECONNAISSANCE_VS_PRIORITY_ASSETS_A.jpg", w: 60, h: 44, unit: "in" },
  { id: "reconnaissance_vs_priority_assets_b", name: "Layout B", group: "Reconnaissance vs Priority Assets", file: "maps/40k/RECONNAISSANCE_VS_PRIORITY_ASSETS_B.jpg", w: 60, h: 44, unit: "in" },
  { id: "reconnaissance_vs_priority_assets_c", name: "Layout C", group: "Reconnaissance vs Priority Assets", file: "maps/40k/RECONNAISSANCE_VS_PRIORITY_ASSETS_C.jpg", w: 60, h: 44, unit: "in" },

  // Priority Assets vs Priority Assets  (미션: Sabotage / Sabotage)
  { id: "priority_assets_vs_priority_assets_a", name: "Layout A", group: "Priority Assets vs Priority Assets", file: "maps/40k/PRIORITY_ASSETS_VS_PRIORITY_ASSETS_A.jpg", w: 60, h: 44, unit: "in" },
  { id: "priority_assets_vs_priority_assets_b", name: "Layout B", group: "Priority Assets vs Priority Assets", file: "maps/40k/PRIORITY_ASSETS_VS_PRIORITY_ASSETS_B.jpg", w: 60, h: 44, unit: "in" },
  { id: "priority_assets_vs_priority_assets_c", name: "Layout C", group: "Priority Assets vs Priority Assets", file: "maps/40k/PRIORITY_ASSETS_VS_PRIORITY_ASSETS_C.jpg", w: 60, h: 44, unit: "in" },
];
