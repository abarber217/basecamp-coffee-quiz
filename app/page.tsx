"use client";

import { useState } from "react";

type PersonalityKey =
  | "sweetEnthusiast"
  | "zenMinimalist"
  | "healthNut"
  | "practicalPragmatist";

interface Personality {
  name: string;
  coffee: string;
  tagline: string;
  emoji: string;
  description: string;
  color: string;
}

interface Option {
  emoji: string;
  text: string;
  personality: PersonalityKey;
}

interface Question {
  text: string;
  options: Option[];
}

const personalities: Record<PersonalityKey, Personality> = {
  sweetEnthusiast: {
    name: "The Sweet Enthusiast",
    coffee: "Vanilla Latte",
    tagline: "You're a warm vanilla latte and good vibes kind of person.",
    emoji: "🍮",
    description:
      "Life's too short for boring coffee. You love seasonal specials, indulgent syrups, and turning every cup into a little celebration. Your local baristas know your order by heart.",
    color: "#FDE68A",
  },
  zenMinimalist: {
    name: "The Zen Minimalist",
    coffee: "Single-Origin Pour-Over",
    tagline: "You're a slow morning and single-origin pour-over kind of person.",
    emoji: "☕",
    description:
      "You believe the best coffee speaks for itself. No sugar, no milk — just you, the beans, and a moment of stillness before the day begins. You ask about the origin before you order.",
    color: "#E0D5C5",
  },
  healthNut: {
    name: "The Wellness Explorer",
    coffee: "Matcha Oat Latte",
    tagline: "You're a matcha oat latte and farmer's market kind of person.",
    emoji: "🍵",
    description:
      "Every cup is an opportunity to nourish yourself. Plant-based, mindful, and always curious about what's good for you and the planet. You've introduced half your friends to oat milk.",
    color: "#BBF7D0",
  },
  practicalPragmatist: {
    name: "The Practical Pragmatist",
    coffee: "Cold Brew",
    tagline: "You're a no-fuss cold brew and getting things done kind of person.",
    emoji: "⚡",
    description:
      "You need coffee to work, not to be a whole moment. Reliable, efficient, and strong — just like you. You've never once asked what the bean origin is, and you're fine with that.",
    color: "#BFDBFE",
  },
};

const questions: Question[] = [
  {
    text: "What does your morning routine look like?",
    options: [
      {
        emoji: "⏰",
        text: "Hit snooze twice, then rush out the door",
        personality: "practicalPragmatist",
      },
      {
        emoji: "🌅",
        text: "Slow and intentional — I savor the quiet",
        personality: "zenMinimalist",
      },
      {
        emoji: "🏃",
        text: "Up early for a workout, then meal prep",
        personality: "healthNut",
      },
      {
        emoji: "🍰",
        text: "I need something sweet to look forward to",
        personality: "sweetEnthusiast",
      },
    ],
  },
  {
    text: "Your perfect weekend afternoon looks like:",
    options: [
      {
        emoji: "📚",
        text: "Curled up with a book and a cozy drink",
        personality: "sweetEnthusiast",
      },
      {
        emoji: "🏔️",
        text: "A long hike with nothing but fresh air",
        personality: "zenMinimalist",
      },
      {
        emoji: "🧘",
        text: "Yoga class, then browsing the farmers market",
        personality: "healthNut",
      },
      {
        emoji: "✅",
        text: "Crushing my to-do list so I can fully relax",
        personality: "practicalPragmatist",
      },
    ],
  },
  {
    text: "When you walk into a coffee shop, you:",
    options: [
      {
        emoji: "🌟",
        text: "Go straight for the seasonal specialty",
        personality: "sweetEnthusiast",
      },
      {
        emoji: "🫘",
        text: "Ask which beans they're featuring today",
        personality: "zenMinimalist",
      },
      {
        emoji: "🌿",
        text: "Check if they have oat milk or plant-based options",
        personality: "healthNut",
      },
      {
        emoji: "🔁",
        text: "Order what you always get — no surprises",
        personality: "practicalPragmatist",
      },
    ],
  },
  {
    text: "How do you take your coffee?",
    options: [
      {
        emoji: "🍬",
        text: "Sweet and creamy, please!",
        personality: "sweetEnthusiast",
      },
      {
        emoji: "🖤",
        text: "Black. Always black.",
        personality: "zenMinimalist",
      },
      {
        emoji: "🌱",
        text: "Non-dairy milk, no added sugar",
        personality: "healthNut",
      },
      {
        emoji: "⚡",
        text: "However it comes fastest",
        personality: "practicalPragmatist",
      },
    ],
  },
  {
    text: "Your friends would describe you as:",
    options: [
      {
        emoji: "🎁",
        text: "The one who always brings homemade treats",
        personality: "sweetEnthusiast",
      },
      {
        emoji: "🌊",
        text: "Thoughtful, calm, and serene",
        personality: "zenMinimalist",
      },
      {
        emoji: "💚",
        text: "The wellness enthusiast of the group",
        personality: "healthNut",
      },
      {
        emoji: "🔧",
        text: "The reliable, no-nonsense problem-solver",
        personality: "practicalPragmatist",
      },
    ],
  },
  {
    text: "It's 3pm and you're hitting a wall. You reach for:",
    options: [
      {
        emoji: "🍫",
        text: "A dessert coffee — you deserve a treat",
        personality: "sweetEnthusiast",
      },
      {
        emoji: "🍃",
        text: "A carefully brewed pour-over to reset",
        personality: "zenMinimalist",
      },
      {
        emoji: "🥤",
        text: "A matcha or green smoothie for clean energy",
        personality: "healthNut",
      },
      {
        emoji: "💪",
        text: "The strongest coffee on the menu, stat",
        personality: "practicalPragmatist",
      },
    ],
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<PersonalityKey[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [started, setStarted] = useState(false);

  function handleAnswer(personality: PersonalityKey) {
    const newAnswers = [...answers, personality];
    if (currentQuestion < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setAnswers(newAnswers);
      setIsComplete(true);
    }
  }

  function getResults() {
    const tally: Record<PersonalityKey, number> = {
      sweetEnthusiast: 0,
      zenMinimalist: 0,
      healthNut: 0,
      practicalPragmatist: 0,
    };
    answers.forEach((p) => tally[p]++);
    return (Object.entries(tally) as [PersonalityKey, number][])
      .map(([key, count]) => ({
        key,
        count,
        percentage: Math.round((count / questions.length) * 100),
        ...personalities[key],
      }))
      .sort((a, b) => b.count - a.count);
  }

  function restart() {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsComplete(false);
    setStarted(false);
  }

  // Intro screen
  if (!started) {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-6"
        style={{ background: "#F5EFE6" }}
      >
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-10 text-center">
          <div className="text-5xl mb-5">☕</div>
          <h1
            className="text-3xl font-bold mb-3 leading-tight text-zinc-900"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            What&apos;s Your Coffee Personality?
          </h1>
          <p className="text-zinc-500 mb-8 text-base leading-relaxed">
            Answer 6 quick questions and discover your coffee identity — plus
            the perfect Basecamp drink waiting for you.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="bg-zinc-900 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-zinc-700 transition-colors cursor-pointer"
          >
            Start Quiz
          </button>
          <p className="text-zinc-400 text-xs mt-4">Takes about 1 minute</p>
        </div>
      </div>
    );
  }

  // Results screen
  if (isComplete) {
    const results = getResults();
    const top = results[0];

    return (
      <div
        className="min-h-screen flex items-center justify-center p-6"
        style={{ background: "#F5EFE6" }}
      >
        <div className="w-full max-w-lg">
          {/* Top result card */}
          <div className="bg-white rounded-2xl shadow-md p-8 mb-4">
            <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4 text-center">
              Your Coffee Personality
            </p>
            <div
              className="rounded-xl p-6 mb-5 text-center"
              style={{ background: top.color }}
            >
              <div className="text-6xl mb-3">{top.emoji}</div>
              <h2
                className="text-2xl font-bold mb-2 text-zinc-900"
                style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
              >
                {top.name}
              </h2>
              <p className="text-zinc-600 text-sm mb-3 italic">
                &ldquo;{top.tagline}&rdquo;
              </p>
              <span className="inline-block bg-white/70 text-zinc-700 text-xs font-semibold px-3 py-1 rounded-full">
                Try a {top.coffee}
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed text-center">
              {top.description}
            </p>
          </div>

          {/* Full breakdown */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-4">
            <h3
              className="text-base font-semibold mb-4 text-zinc-700"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Your Full Breakdown
            </h3>
            <div className="space-y-4">
              {results.map((r, i) => (
                <div key={r.key}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-zinc-700">
                      {r.emoji} {r.name}
                    </span>
                    <span className="text-sm font-semibold text-zinc-500">
                      {r.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-zinc-100 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-700"
                      style={{
                        width: `${r.percentage}%`,
                        background: i === 0 ? "#1a1a1a" : "#d4d4d4",
                      }}
                    />
                  </div>
                  {i === 0 && (
                    <p className="text-xs text-zinc-400 mt-1">
                      Your top match · Ask your barista for a {r.coffee}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={restart}
              className="text-zinc-400 text-sm hover:text-zinc-600 transition-colors cursor-pointer"
            >
              Take the quiz again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Question screen
  const question = questions[currentQuestion];
  const progress = (currentQuestion / questions.length) * 100;

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ background: "#F5EFE6" }}
    >
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-8">
        {/* Progress */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-zinc-400 font-medium">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-xs text-zinc-400">
            {Math.round(progress)}% complete
          </span>
        </div>
        <div className="w-full bg-zinc-100 rounded-full h-1 mb-8">
          <div
            className="h-1 rounded-full bg-zinc-900 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question */}
        <h2
          className="text-xl font-semibold mb-6 leading-snug text-zinc-900"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          {question.text}
        </h2>

        {/* Answer options */}
        <div className="space-y-3">
          {question.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(option.personality)}
              className="w-full text-left flex items-center gap-3 px-4 py-3 bg-white border border-zinc-200 rounded-xl hover:border-zinc-400 hover:bg-zinc-50 transition-all cursor-pointer"
            >
              <span className="text-xl flex-shrink-0">{option.emoji}</span>
              <span className="text-sm text-zinc-700 font-medium">
                {option.text}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
