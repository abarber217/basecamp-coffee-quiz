# Business Case: Basecamp Rewards Program Refresh
**Prepared for:** Dana (Marketing Director) / CFO
**Date:** March 16, 2026
**Author:** Loyalty Program Manager

---

## Executive Summary

The Basecamp Rewards program is losing money and losing members. ROI sits at 0.5x — for every dollar spent, fifty cents comes back. Monthly active users have dropped to 2,100 against a target of 8,000. Without intervention, the program will continue declining and leadership will be right to kill it.

The fix is not more discounts. It's giving members something to *be*.

We have built a working prototype of a **Coffee Personality Quiz** — a 6-question experience that gives every member a coffee identity and a personalized drink recommendation. This document makes the case for investing in a full launch.

**The ask:** $28,000 in one-time investment. Conservative projections show 3.2x ROI in 12 months.

---

## The Problem

### Current Program Performance

| Metric | Current | Target | Gap |
|--------|---------|--------|-----|
| Monthly active users | 2,100 | 8,000 | −5,900 |
| Avg visits/month | 1.6 | 4.0 | −2.4 |
| 30-day retention | 27% | 60% | −33pts |
| Program NPS | 12 | — | (Brand NPS: 67) |
| ROI | 0.5x | — | Losing money |

### Why It's Failing

Every campaign we've run has been built on the same wrong premise: that points motivate people. They don't — not enough to build loyalty.

Members sign up (baristas ask them to), visit 2-3 times, then disappear. Not angry. Just indifferent. The program is invisible to them between purchases because it has no personality, no identity, and no connection to the Basecamp brand they actually love.

The gap between brand NPS (67) and program NPS (12) tells the whole story: **people love Basecamp Coffee. They don't care about Basecamp Rewards.**

### The Cost of Doing Nothing

| Scenario | Impact |
|----------|--------|
| Program cancelled | $40K sunk, no loyalty infrastructure, competitive disadvantage |
| Current trajectory continues | MAU drops to ~1,500 by Q4, ROI falls further |
| Defection accelerates | Already at 18% confirmed defection to Starbucks/Dutch Bros (up from 12%) |

---

## The Solution

### Coffee Personality Quiz

A 6-question discovery experience that gives every member a coffee identity:

- *"You're a slow morning and single-origin pour-over kind of person."*
- *"You're a no-fuss cold brew and getting things done kind of person."*
- *"You're a warm vanilla latte and good vibes kind of person."*

**Working prototype:** https://quiz-project-xi-livid.vercel.app

This is not a gimmick. It's the mechanism that connects the rewards program to the brand, drives personalization, and gives members a reason to engage beyond checking a point balance.

### Why This Works

**1. Genuine white space.** No competitor is doing coffee identity/discovery digitally at scale. Starbucks personalizes based on purchase history (what you already order). Dutch Bros builds relationship through baristas (can't scale). Nobody has given customers a *language* for their coffee identity.

**2. Customers are already asking for it.** Direct quotes from 4 months of feedback:
> *"I wish you could help me find new drinks to try. I always get the same thing."*
> *"What if you helped people find their signature drink?"*
> *"People light up when we ask about their coffee preferences but the app doesn't capture any of that."*

**3. It fits our brand perfectly.** Warm, knowledgeable, community-focused. A personality discovery experience *is* the Basecamp brand, expressed digitally.

**4. It creates organic sharing.** People share personality quiz results. Every share is a free acquisition touchpoint.

**5. It enables true personalization.** Once we know someone is a Zen Minimalist, we can recommend the new Kenya Wanjiku. If they're a Sweet Enthusiast, we surface the seasonal oat milk caramel latte. Points become meaningful when tied to identity.

---

## Financial Projections

### Key Assumptions
- Average ticket value: $6.50 (specialty coffee industry average)
- Gross margin: 65%
- Quiz completion rate: 40% of active app users (conservative)
- Retention improvement modeled on Roast & Co. case study (+18pts in 90 days post-personalization launch)
- MAU growth driven by quiz sharing + barista promotion in-store

### Three-Scenario Model

#### Conservative (low engagement, slow adoption)
| Month | MAU | Visits/mo | Monthly Revenue | Gross Profit |
|-------|-----|-----------|----------------|--------------|
| 1–3 | 3,500 | 2.2 | $50,050 | $32,533 |
| 4–6 | 5,000 | 2.8 | $91,000 | $59,150 |
| 7–12 | 6,500 | 3.5 | $147,875 | $96,119 |

**12-month gross profit uplift vs. baseline: ~$680,000**
**12-month ROI: 3.2x**

#### Base Case (moderate engagement, steady adoption)
| Month | MAU | Visits/mo | Monthly Revenue | Gross Profit |
|-------|-----|-----------|----------------|--------------|
| 1–3 | 4,500 | 2.5 | $73,125 | $47,531 |
| 4–6 | 6,500 | 3.2 | $135,200 | $87,880 |
| 7–12 | 8,000 | 4.0 | $208,000 | $135,200 |

**12-month gross profit uplift vs. baseline: ~$960,000**
**12-month ROI: 4.6x**

#### Optimistic (high sharing, strong barista activation)
| Month | MAU | Visits/mo | Monthly Revenue | Gross Profit |
|-------|-----|-----------|----------------|--------------|
| 1–3 | 6,000 | 3.0 | $117,000 | $76,050 |
| 4–6 | 8,000 | 3.8 | $197,600 | $128,440 |
| 7–12 | 10,000 | 4.5 | $292,500 | $190,125 |

**12-month gross profit uplift vs. baseline: ~$1,400,000**
**12-month ROI: 6.7x**

*Baseline for comparison: 2,100 MAU × 1.6 visits × $6.50 = $21,840/month, ~$14,196 gross profit/month*

---

## Investment Required

| Item | Cost | Notes |
|------|------|-------|
| Quiz integration into rewards app | $15,000 | API connection, profile storage, recommendation engine |
| Push notification fix (IT #4521) | $3,000 | Unblocks entire notification channel |
| Birthday automation fix | $2,000 | Quick win, high member impact |
| Launch marketing (in-store + social) | $5,000 | Barista training, table cards, social assets |
| Contingency | $3,000 | |
| **Total one-time** | **$28,000** | |
| Ongoing monthly (tech + rewards) | $4,500/mo | |

**Total 12-month cost: $82,000** (one-time + 12 months ongoing)
**Prior investment:** $40,000 already spent
**Conservative 12-month gross profit uplift: ~$680,000**

---

## Timeline

| Phase | Months | Milestones |
|-------|--------|------------|
| **Foundation** | 1–4 weeks | Fix push notifications, fix birthday rewards, integrate quiz into app |
| **Launch** | Month 2 | Quiz live in app, barista activation at all 45 locations, social launch |
| **Personalization** | Month 3–4 | Personality-based drink recommendations, targeted push campaigns |
| **Program refresh** | Month 4–6 | New tier benefits, time-limited challenges, identity markers |
| **Scale** | Month 6–12 | Full program operating at target metrics |

---

## Recommendation

The quiz prototype is built and working. The research is done. The strategy is clear.

What we need now is $28,000 and a green light to integrate the quiz into the existing rewards app, fix the two broken automations, and launch at all 45 locations.

The conservative case shows 3.2x ROI in 12 months. The prior $40,000 investment is recoverable. The program survives.

The alternative is cancellation — and Basecamp losing its loyalty infrastructure entirely at a moment when competitors are accelerating.

**Recommendation: Approve the $28,000 investment and proceed to full launch.**

---

*Supporting materials available: customer feedback synthesis, competitor analysis, campaign audit, quiz prototype*
