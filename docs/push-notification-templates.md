# Push Notification Templates: Coffee Personality Quiz Launch
**For:** Loyalty Program Manager → Priya (Analytics) for scheduling
**Date:** March 2026
**Note:** All notifications assume IT ticket #4521 is resolved. Test open rates before full send.

---

## How to Use This Doc

Templates are organized by campaign type. Personalization tokens are in `{curly braces}`. Where four variants exist, send the matching variant based on the member's quiz personality tag.

**Character limits to respect:**
- Title: 50 characters max
- Body: 100 characters max

---

## Campaign 1: Quiz Invite (Non-completers)

*For members who haven't taken the quiz yet. Goal: drive first quiz completion.*

### 1A — Launch Day
> **Title:** What kind of coffee person are you?
> **Body:** Find out in 60 seconds. Your result might surprise you. ☕
> **Send time:** 8:00am (morning coffee moment)
> **Audience:** All active members without a personality tag

### 1B — One Week Later (Non-completers only)
> **Title:** {first_name}, you haven't taken the quiz yet
> **Body:** Thousands of your neighbors already know their coffee personality. Do you?
> **Send time:** 2:00pm (afternoon slump)
> **Audience:** Active members, no personality tag, did not open 1A

### 1C — Final Nudge (Two Weeks After Launch)
> **Title:** Quick question, {first_name}
> **Body:** Bold espresso or cold brew pragmatist? One quick quiz. We think we know. 👀
> **Send time:** 9:00am Saturday
> **Audience:** Active members, no personality tag, did not open 1A or 1B

---

## Campaign 2: Post-Quiz Welcome

*Sent immediately after a member completes the quiz. One per personality type.*

### 2A — Zen Minimalist
> **Title:** You're a Zen Minimalist, {first_name}
> **Body:** Slow mornings, great coffee. Ask your barista about our single-origin pour-over today.
> **Send time:** Immediate (triggered)
> **Audience:** Members who just completed quiz → Zen Minimalist result

### 2B — Sweet Enthusiast
> **Title:** You're a Sweet Enthusiast, {first_name}
> **Body:** Life's better with something delicious in hand. Your next vanilla latte is waiting. 🍮
> **Send time:** Immediate (triggered)
> **Audience:** Members who just completed quiz → Sweet Enthusiast result

### 2C — Wellness Explorer
> **Title:** You're a Wellness Explorer, {first_name}
> **Body:** Mindful, curious, and always trying something new. A matcha oat latte has your name on it.
> **Send time:** Immediate (triggered)
> **Audience:** Members who just completed quiz → Wellness Explorer result

### 2D — Practical Pragmatist
> **Title:** You're a Practical Pragmatist, {first_name}
> **Body:** No fuss, no nonsense — just great coffee. Your cold brew is ready when you are. ⚡
> **Send time:** Immediate (triggered)
> **Audience:** Members who just completed quiz → Practical Pragmatist result

---

## Campaign 3: Personalized Drink Recommendations

*Ongoing. Sent weekly or bi-weekly. Rotate through variants to avoid repetition.*

### 3A — Zen Minimalist
> **Title:** {first_name}, we think you'll love this
> **Body:** Our baristas are pouring a Kenya Wanjiku today. Made for people like you.
> **Send time:** 7:30am weekday

> **Title:** Something worth slowing down for
> **Body:** New single-origin in. Ethiopian natural process — clean, fruity, no fuss. ☕
> **Send time:** 8:00am Saturday

### 3B — Sweet Enthusiast
> **Title:** {first_name}, the seasonal special is here
> **Body:** Our new oat milk caramel latte just dropped. You're going to love this one. 🍮
> **Send time:** 10:00am (mid-morning treat window)

> **Title:** We made this for you, {first_name}
> **Body:** Brown sugar lavender cold foam latte. Limited time. Your name is on it.
> **Send time:** 11:00am weekday

### 3C — Wellness Explorer
> **Title:** {first_name}, something new to try
> **Body:** Ceremonial-grade matcha just arrived. Ask about the oat milk version — it's worth it. 🍵
> **Send time:** 8:00am weekday

> **Title:** New this week at your local Basecamp
> **Body:** Turmeric oat latte, hot or iced. You're exactly the kind of person who'd appreciate it.
> **Send time:** 9:00am Saturday

### 3D — Practical Pragmatist
> **Title:** Fresh cold brew batch, {first_name}
> **Body:** We brewed a new batch overnight. Strongest one we've done in a while. ⚡
> **Send time:** 7:00am weekday (early, before the rush)

> **Title:** In and out in under 2 minutes
> **Body:** Mobile order is open. Your cold brew is ready before you park.
> **Send time:** 7:30am weekday

---

## Campaign 4: Re-engagement (Lapsed Members)

*For members who haven't visited in 30+ days. Personalized by personality.*

### 4A — Zen Minimalist
> **Title:** It's been a while, {first_name}
> **Body:** We have a new single-origin in. The kind of thing you'd want to know about.
> **Send time:** 8:00am Saturday

### 4B — Sweet Enthusiast
> **Title:** {first_name}, you've been missed
> **Body:** There's a new seasonal drink with your name on it. Come say hi. ☕
> **Send time:** 10:00am Saturday

### 4C — Wellness Explorer
> **Title:** Something new worth trying, {first_name}
> **Body:** New plant-based option just landed. We thought of you immediately.
> **Send time:** 9:00am Saturday

### 4D — Practical Pragmatist
> **Title:** {first_name}, your points are waiting
> **Body:** You've got {points} points. That's a free cold brew. Just saying. ⚡
> **Send time:** 7:30am weekday

---

## Campaign 5: Time-Limited Challenges

*Personality-based challenges to drive visit frequency. Month 3 onward.*

### 5A — Zen Minimalist
> **Title:** A challenge for you, {first_name}
> **Body:** Try 3 different single-origins this month. Your inner coffee nerd will thank you.
> **Send time:** 1st of the month, 8:00am

### 5B — Sweet Enthusiast
> **Title:** Sweet challenge incoming, {first_name}
> **Body:** Try all 3 seasonal specials this month. Complete them, earn a bonus treat. 🍮
> **Send time:** 1st of the month, 10:00am

### 5C — Wellness Explorer
> **Title:** This month's explorer challenge
> **Body:** Try something you've never ordered before. 3 new drinks = a surprise reward. 🍵
> **Send time:** 1st of the month, 8:30am

### 5D — Practical Pragmatist
> **Title:** Simple challenge, {first_name}
> **Body:** Visit 8 times this month. That's it. Bonus points waiting at the end. ⚡
> **Send time:** 1st of the month, 7:00am

---

## General Notes for Priya

- **Never send more than 2 notifications per week** per member — open rates drop fast with frequency
- **Morning sends (7–10am) outperform afternoon** for coffee-adjacent content
- **Saturday morning** is the highest-engagement window for non-urgent messages
- **Triggered notifications** (post-quiz welcome) should fire within 5 minutes of quiz completion
- **A/B test subject lines** where possible — even small copy changes move open rates meaningfully
- **Suppress notifications** for members who visited in the last 24 hours — they don't need a push
- Track open rate, click-through, and same-day visit correlation per personality type — Priya will want this for the 90-day report

---

## What Success Looks Like

| Metric | Baseline | 30-Day Target | 90-Day Target |
|--------|----------|---------------|---------------|
| Push open rate | 5% | 15% | 20%+ |
| Click-through rate | ~1% | 8% | 12% |
| Same-day visit rate (clicked) | Unknown | 25% | 35% |
