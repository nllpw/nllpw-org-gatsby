---
title: Shared Task
seo:
  title: Shared Task
  description: The eight workshop on Natural Legal Language Processing (NLLP 2026) explores methods and applications of Natural Language Processing for the Legal Domain by focusing on legal text and text with legal significance. Co-located with EMNLP 2026.
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: NLLP Workshop 2026
      keyName: property
    - name: 'og:description'
      value: The sixth workshop on Natural Legal Language Processing (NLLP 2026) explores methods and applications of Natural Language Processing for the Legal Domain by focusing on legal text and text with legal significance. Co-located with EMNLP 2026.
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: NLLP Workshop 2026
    - name: 'twitter:description'
      value: The sixth workshop on Natural Legal Language Processing (NLLP 2026) explores methods and applications of Natural Language Processing for the Legal Domain by focusing on legal text and text with legal significance. Co-located with EMNLP 2026.
    - name: 'keywords'
      value: 'nllp, emnlp, nlp, nlproc, natural language processing, natural legal language processing, legal text, legal domain language'
template: page
---

## ChildSafeAds — Commercial Content in Child-Facing YouTube Videos

Official page: (https://www.codabench.org/competitions/17595/)[https://www.codabench.org/competitions/17595/]

Imagine you work at an authority responsible for monitoring commercial content that reaches minors on video platforms. How would you build that monitoring system, and what can it achieve at each level of data access and cost?

Influencer marketing reaching children and teenagers is widespread on YouTube and frequently undisclosed. Assessing it at platform scale needs automated support, but doing so responsibly means classifying what is being sold, categorising it, and reasoning about the advertising-law concerns it raises. This task puts those three together on real data.

### The Data

3,360 instances: train 2,353 / dev 504 / test 503, channel-disjoint (no channel appears in more than one split). Each instance is one sponsored segment, community-verified via SponsorBlock, on a channel curated to plausibly reach a significant teen audience, paired with the product page its description links to.

Fields are grouped into four access levels ordered by collection cost: the segment transcript, then video metadata including YouTube's own paid-promotion flag, then channel context, then the crawled product page. A transcript-only system uses one field; each further level costs more to obtain at scale.

### The Sub-Tasks

| Task    | Output |
| -------- | ------- |
| ST1  | Commercial type	one label (EU Consumer Rights Directive contract types)    |
| ST2 | Product category	one or more labels     |
| ST3    | Compliance risk flags	one or more flags, grounded in EU consumer law (UCPD, AVMSD, DSA, CRD)    |

Participate in any subset. Definitions are in labels_taxonomy.md, shipped with the data; per-flag legal grounding is in legal_provisions.json as citations and notes, not statutory text.

Two things are given by the dataset and should not be re-assessed by systems: the channel is child-facing, and the segment is commercial. The question is what is being sold and what concerns it raises.

### What We Are Actually Asking

Accuracy is scored on the leaderboard, but the interesting question is a design one: what does each additional level of data buy, and is it worth the cost? Every submission therefore records which data levels it used, and that appears on the leaderboard beside the score, so results read as accuracy at a given data cost. Beyond that one dropdown, we highly encourage a short system design report describing the trade-offs you weighed. It is not a full paper, and it is where the most interesting findings of this task are likely to live.

A bonus track invites teams to go further and collect off-platform destination data themselves (shops, terms of service, apps) starting from the outbound link we ship. Not scored, very welcome in the report.

### Getting Started

1. Register (approval required; registering accepts the data-use terms).
2. Download Public Data and the Starting Kit from the Participate tab.
3. Run the majority baseline to produce a valid submission, check it with the included format checker, and submit.
