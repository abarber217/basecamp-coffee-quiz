# Coffee Personality Quiz - Requirements

## Personality → Coffee Pairings

| Personality | Coffee | Tagline |
|-------------|--------|---------|
| Sweet Enthusiast | Caramel Latte | "Life's too short for bitter" |
| Zen Minimalist | Black Coffee, Single Origin | "Simple. Clean. Perfect." |
| Health Nut | Oat Milk Americano | "Wellness in every sip" |
| Practical Pragmatist | Large Drip, Whatever's Fresh | "Just make it work" |

## Result Display

**Option B: Show all percentages**
Show the full breakdown of all 4 personality types with percentages (e.g., "You're 50% Zen Minimalist, 30% Health Nut, 20% Sweet Enthusiast") plus all coffee recommendations.

## Visual Style

Mix of styles:
- **Layout & whitespace**: Style 2 (minimal, clean, lots of whitespace)
- **Font**: Style 4 (Lora serif font - warm and elegant)
- **Answer options**: Style 1 (emojis next to each answer)

Overall feel: Clean and minimal but with personality. Warm serif headings, generous whitespace, emoji icons in answer buttons.

## Images

Yes - one photo per result, saved in `public/`:
- `caramel-latte.jpg` → Sweet Enthusiast
- `black-coffee.jpg` → Zen Minimalist
- `oat-milk-americano.jpg` → Health Nut
- `drip-coffee.jpg` → Practical Pragmatist

## Icons

Yes - emoji icons next to each answer option.

## Quiz Questions (6 total)

**Q1. You have a completely free Sunday. What do you do?**
- 🏃 Morning workout, meal prep, and an early bedtime → Health Nut
- ✨ Farmers market, journaling, whatever feels right → Zen Minimalist
- 🛋️ Get things done efficiently and enjoy the rest → Practical Pragmatist
- 🎉 Brunch with friends, spontaneous plans, maybe dessert for dinner → Sweet Enthusiast

**Q2. Pick a Netflix genre:**
- 📖 Documentary or slow-burn drama → Zen Minimalist
- 💪 Fitness or nature documentary → Health Nut
- 😂 Whatever's trending and easy to watch → Practical Pragmatist
- 🍿 Rom-com or feel-good binge → Sweet Enthusiast

**Q3. You're at a restaurant. How do you order?**
- 🥗 Study the menu, pick the healthiest option → Health Nut
- 🧐 Ask the server what's best, then get that → Zen Minimalist
- 🍰 Go straight for what sounds most indulgent → Sweet Enthusiast
- ✅ Pick something reliable and move on → Practical Pragmatist

**Q4. If you were a city, you'd be:**
- 🗼 Kyoto - calm, intentional, beautiful → Zen Minimalist
- 🌿 Portland - active, health-conscious, outdoorsy → Health Nut
- 🗽 New York - efficient, no-nonsense, gets things done → Practical Pragmatist
- 🌸 Paris - indulgent, charming, always a treat → Sweet Enthusiast

**Q5. Your ideal morning routine:**
- 🧘 Meditation, stretching, quiet time before the world wakes up → Zen Minimalist
- 🥤 Green smoothie, workout, ready to crush the day → Health Nut
- ⚡ Up and moving fast - coffee in hand, out the door → Practical Pragmatist
- 🥐 Slow morning, something sweet, ease into the day → Sweet Enthusiast

**Q6. Your friend group would describe you as:**
- 🌟 The one who always has a wellness tip → Health Nut
- 🍭 The one who orders dessert and convinces everyone else to → Sweet Enthusiast
- 🧠 The thoughtful one who doesn't overthink → Zen Minimalist
- 🔧 The reliable one who just gets things done → Practical Pragmatist

## Logic

Each answer maps to one of the 4 personalities. At the end, tally all answers and display percentage breakdown for all 4 types, with the highest percentage as the primary result. Show all 4 coffee recommendations sorted by percentage.

## Tech Stack

- Next.js (JavaScript framework)
- No external dependencies beyond Next.js defaults
