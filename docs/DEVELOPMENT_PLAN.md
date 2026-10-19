# Complete development PR plan

One planned stable work unit corresponds to one future implementation PR; `prs: []` means no PR exists yet. Record actual GitHub PR numbers only when GitHub creates them. A unit cannot be marked completed until full behavior and tests are accepted. Later work must not proceed ahead of prerequisites.

## Foundation

- **GD-001 — App repository architecture and deferred plan**. Depends on: none. Acceptance: Complete app repository architecture and deferred plan functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
## Marine domain

- **GD-002 — Boat ownership sharing**. Depends on: GD-001. Acceptance: Complete boat ownership sharing functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-003 — Hull engine equipment registry**. Depends on: GD-002. Acceptance: Complete hull engine equipment registry functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-004 — Vessel documents vault**. Depends on: GD-003. Acceptance: Complete vessel documents vault functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-005 — Service history timeline**. Depends on: GD-004. Acceptance: Complete service history timeline functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-006 — Marina boatyard facilities**. Depends on: GD-005. Acceptance: Complete marina boatyard facilities functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-007 — Marine category service locations**. Depends on: GD-006. Acceptance: Complete marine category service locations functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-008 — Weather tides data adapters**. Depends on: GD-007. Acceptance: Complete weather tides data adapters functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-009 — Vessel facility compatibility**. Depends on: GD-008. Acceptance: Complete vessel facility compatibility functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
## Experiences

- **GD-010 — Responsive marine discovery web**. Depends on: GD-009. Acceptance: Complete responsive marine discovery web functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-011 — Provider profiles search UX**. Depends on: GD-010. Acceptance: Complete provider profiles search ux functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-012 — Marine service intake forms**. Depends on: GD-011. Acceptance: Complete marine service intake forms functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-013 — Job Room marine UI**. Depends on: GD-012. Acceptance: Complete job room marine ui functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-014 — Scheduling calendar UX**. Depends on: GD-013. Acceptance: Complete scheduling calendar ux functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-015 — Payments external option UX**. Depends on: GD-014. Acceptance: Complete payments external option ux functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-016 — Provider dashboard CRM UX**. Depends on: GD-015. Acceptance: Complete provider dashboard crm ux functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-017 — Subscriptions coupons ads UX**. Depends on: GD-016. Acceptance: Complete subscriptions coupons ads ux functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-018 — Reviews credentials verification UX**. Depends on: GD-017. Acceptance: Complete reviews credentials verification ux functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-019 — Accessibility localization**. Depends on: GD-018. Acceptance: Complete accessibility localization functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
## Old Salt

- **GD-020 — Old Salt avatar and metadata**. Depends on: GD-019. Acceptance: Complete old salt avatar and metadata functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-021 — Old Salt conversational UX**. Depends on: GD-020. Acceptance: Complete old salt conversational ux functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-022 — Vessel context consent**. Depends on: GD-021. Acceptance: Complete vessel context consent functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-023 — Sourced marine provider explanations**. Depends on: GD-022. Acceptance: Complete sourced marine provider explanations functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-024 — AI request parity tests**. Depends on: GD-023. Acceptance: Complete ai request parity tests functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-025 — Safety and availability checks**. Depends on: GD-024. Acceptance: Complete safety and availability checks functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-026 — Conversational conversion experiment analytics**. Depends on: GD-025. Acceptance: Complete conversational conversion experiment analytics functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
## Podcast

- **GD-027 — Podcast CMS RSS**. Depends on: GD-026. Acceptance: Complete podcast cms rss functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-028 — Persistent web playback**. Depends on: GD-027. Acceptance: Complete persistent web playback functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-029 — Native background playback**. Depends on: GD-028. Acceptance: Complete native background playback functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-030 — Transcripts search sponsorship**. Depends on: GD-029. Acceptance: Complete transcripts search sponsorship functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-031 — Podcast attribution analytics**. Depends on: GD-030. Acceptance: Complete podcast attribution analytics functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
## Mobile & launch

- **GD-032 — Expo React Native foundation**. Depends on: GD-031. Acceptance: Complete expo react native foundation functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-033 — Push deep links offline sync**. Depends on: GD-032. Acceptance: Complete push deep links offline sync functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-034 — End-to-end web and mobile workflows**. Depends on: GD-033. Acceptance: Complete end-to-end web and mobile workflows functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-035 — Privacy trust compliance**. Depends on: GD-034. Acceptance: Complete privacy trust compliance functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-036 — App store release packaging**. Depends on: GD-035. Acceptance: Complete app store release packaging functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
- **GD-037 — Staging production activation**. Depends on: GD-036. Acceptance: Complete staging production activation functionality, contract and authorization-negative tests, documentation, and recorded acceptance evidence.
