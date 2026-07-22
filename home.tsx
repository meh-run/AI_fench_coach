import {
  BookOpen,
  Brain,
  Flame,
  Settings,
  BarChart3,
  ChevronRight,
  CalendarDays,
  Clock3,
  Target,
} from "lucide-react";

const journey = [
  "Grammar",
  "Vocabulary",
  "Listening",
  "Speaking",
  "Reading",
  "Writing",
  "Homework",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2]">
      <div className="mx-auto max-w-7xl px-5 py-8">

        {/* Header */}

        <header className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <span className="text-xs uppercase tracking-[0.35em] text-gray-400">

              LE CARNET

            </span>

            <h1 className="mt-3 text-4xl font-bold text-[#2B2B2B]">

              Bonjour, Mehran 🌿

            </h1>

            <div className="mt-3 flex items-center gap-3 text-gray-500">

              <CalendarDays size={18} />

              Tuesday • July 22

            </div>

          </div>

          <div className="w-full lg:w-96">

            <div className="mb-2 flex justify-between text-sm">

              <span className="text-gray-500">

                Day 1 of 160

              </span>

              <span className="font-semibold">

                1%

              </span>

            </div>

            <div className="h-3 rounded-full bg-[#E7E2DB]">

              <div className="h-3 w-[1%] rounded-full bg-[#5B7C99]" />

            </div>

          </div>

        </header>

        {/* Desktop */}

        <section className="mt-10 hidden gap-6 lg:grid lg:grid-cols-3">

          {/* Journey */}

          <div className="col-span-2 rounded-3xl border border-[#E8E2D9] bg-white p-8 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-2xl font-semibold">

                  Today's Journey

                </h2>

                <p className="mt-2 text-gray-500">

                  Small steps every day.

                </p>

              </div>

              <Target
                className="text-[#5B7C99]"
                size={36}
              />

            </div>

            <div className="mt-8 space-y-3">

              {journey.map((item) => (

                <button
                  key={item}
                  className="flex w-full items-center justify-between rounded-2xl border border-[#ECE7E0] p-5 transition hover:bg-[#F8F6F2]"
                >

                  <div className="flex items-center gap-4">

                    <div className="h-4 w-4 rounded-full border-2 border-[#5B7C99]" />

                    <span className="font-medium">

                      {item}

                    </span>

                  </div>

                  <ChevronRight size={18} />

                </button>

              ))}

            </div>

            <div className="mt-8 flex items-center justify-between">

              <div className="flex items-center gap-2 text-gray-500">

                <Clock3 size={18} />

                Estimated Time

              </div>

              <span className="font-semibold">

                45 Minutes

              </span>

            </div>

            <button className="mt-8 h-14 w-full rounded-2xl bg-[#5B7C99] text-lg font-semibold text-white transition hover:opacity-90">

              Continue Learning →

            </button>

          </div>

          {/* Right Column */}

          <div className="space-y-6">

            <div className="rounded-3xl border border-[#E8E2D9] bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <h3 className="text-xl font-semibold">

                  Review

                </h3>

                <Brain
                  size={26}
                  className="text-[#5B7C99]"
                />

              </div>

              <p className="mt-8 text-5xl font-bold">

                18

              </p>

              <p className="mt-2 text-gray-500">

                Cards waiting

              </p>

              <button className="mt-8 w-full rounded-xl border border-[#5B7C99] py-3 font-medium text-[#5B7C99] transition hover:bg-[#5B7C99] hover:text-white">

                Start Review

              </button>

            </div>

            <div className="rounded-3xl border border-[#E8E2D9] bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <h3 className="text-xl font-semibold">

                  Today's Goal

                </h3>

                <BookOpen
                  className="text-[#5B7C99]"
                  size={24}
                />

              </div>
                <div className="mt-8 space-y-5">

                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <span className="text-sm text-gray-500">
                      Vocabulary
                    </span>

                    <span className="text-sm font-medium">
                      0 / 20
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-[#ECE7E0]">
                    <div className="h-2 w-0 rounded-full bg-[#7FA58A]" />
                  </div>

                </div>

                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <span className="text-sm text-gray-500">
                      Grammar
                    </span>

                    <span className="text-sm font-medium">
                      0 / 1
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-[#ECE7E0]">
                    <div className="h-2 w-0 rounded-full bg-[#7FA58A]" />
                  </div>

                </div>

                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <span className="text-sm text-gray-500">
                      Listening
                    </span>

                    <span className="text-sm font-medium">
                      0 / 15 min
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-[#ECE7E0]">
                    <div className="h-2 w-0 rounded-full bg-[#7FA58A]" />
                  </div>

                </div>

                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <span className="text-sm text-gray-500">
                      Speaking
                    </span>

                    <span className="text-sm font-medium">
                      0 / 10 min
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-[#ECE7E0]">
                    <div className="h-2 w-0 rounded-full bg-[#7FA58A]" />
                  </div>

                </div>

              </div>

            </div>

            <div className="rounded-3xl bg-[#5B7C99] p-6 text-white">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm opacity-80">
                    Current Streak
                  </p>

                  <h2 className="mt-3 text-5xl font-bold">
                    0
                  </h2>

                </div>

                <Flame size={42} />

              </div>

              <p className="mt-6 opacity-90">
                Keep showing up.
                One lesson every day.
              </p>

            </div>

          </div>

        </section>

        {/* ---------------- Mobile ---------------- */}

        <section className="mt-8 space-y-5 lg:hidden">

          <div className="rounded-3xl border border-[#E8E2D9] bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-2xl font-semibold">
                  Today's Journey
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Small steps every day.
                </p>

              </div>

              <Target
                className="text-[#5B7C99]"
                size={32}
              />

            </div>

            <div className="mt-6 space-y-3">

              {journey.map((item) => (

                <button
                  key={item}
                  className="flex w-full items-center justify-between rounded-2xl border border-[#ECE7E0] p-4"
                >

                  <div className="flex items-center gap-4">

                    <div className="h-4 w-4 rounded-full border-2 border-[#5B7C99]" />

                    <span>{item}</span>

                  </div>

                  <ChevronRight size={18} />

                </button>

              ))}

            </div>

            <button className="mt-8 h-14 w-full rounded-2xl bg-[#5B7C99] text-lg font-semibold text-white">

              Continue Learning →

            </button>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-3xl border border-[#E8E2D9] bg-white p-5 shadow-sm">

              <Brain
                className="text-[#5B7C99]"
                size={28}
              />

              <h3 className="mt-5 text-3xl font-bold">
                18
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Cards
              </p>

              <button className="mt-5 text-sm font-semibold text-[#5B7C99]">

                Review →

              </button>

            </div>

            <div className="rounded-3xl bg-[#5B7C99] p-5 text-white">

              <Flame size={28} />

              <h3 className="mt-5 text-3xl font-bold">
                0
              </h3>

              <p className="mt-1 text-sm opacity-80">
                Day Streak
              </p>

            </div>

          </div>
                    {/* Goal Card */}

          <div className="rounded-3xl border border-[#E8E2D9] bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center justify-between">

              <h3 className="text-xl font-semibold">
                Today's Goal
              </h3>

              <BookOpen
                size={24}
                className="text-[#5B7C99]"
              />

            </div>

            <div className="space-y-5">

              <div>

                <div className="mb-2 flex justify-between text-sm">

                  <span className="text-gray-500">
                    Vocabulary
                  </span>

                  <span>
                    0 / 20
                  </span>

                </div>

                <div className="h-2 rounded-full bg-[#ECE7E0]">
                  <div className="h-2 w-0 rounded-full bg-[#7FA58A]" />
                </div>

              </div>

              <div>

                <div className="mb-2 flex justify-between text-sm">

                  <span className="text-gray-500">
                    Grammar
                  </span>

                  <span>
                    0 / 1
                  </span>

                </div>

                <div className="h-2 rounded-full bg-[#ECE7E0]">
                  <div className="h-2 w-0 rounded-full bg-[#7FA58A]" />
                </div>

              </div>

              <div>

                <div className="mb-2 flex justify-between text-sm">

                  <span className="text-gray-500">
                    Listening
                  </span>

                  <span>
                    0 / 15 min
                  </span>

                </div>

                <div className="h-2 rounded-full bg-[#ECE7E0]">
                  <div className="h-2 w-0 rounded-full bg-[#7FA58A]" />
                </div>

              </div>

              <div>

                <div className="mb-2 flex justify-between text-sm">

                  <span className="text-gray-500">
                    Speaking
                  </span>

                  <span>
                    0 / 10 min
                  </span>

                </div>

                <div className="h-2 rounded-full bg-[#ECE7E0]">
                  <div className="h-2 w-0 rounded-full bg-[#7FA58A]" />
                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

      {/* Bottom Navigation */}

      <nav className="fixed bottom-0 left-0 right-0 border-t border-[#E6E2DB] bg-white/95 backdrop-blur-md lg:hidden">

        <div className="mx-auto flex max-w-md items-center justify-around py-4">

          <button className="flex flex-col items-center gap-1 text-[#5B7C99]">

            <BookOpen size={22} />

            <span className="text-xs font-medium">
              Home
            </span>

          </button>

          <button className="flex flex-col items-center gap-1 text-gray-400">

            <Target size={22} />

            <span className="text-xs">
              Learn
            </span>

          </button>

          <button className="flex flex-col items-center gap-1 text-gray-400">

            <Brain size={22} />

            <span className="text-xs">
              Review
            </span>

          </button>

          <button className="flex flex-col items-center gap-1 text-gray-400">

            <BarChart3 size={22} />

            <span className="text-xs">
              Progress
            </span>

          </button>

          <button className="flex flex-col items-center gap-1 text-gray-400">

            <Settings size={22} />

            <span className="text-xs">
              Settings
            </span>

          </button>

        </div>

      </nav>

    </main>
  );
}
