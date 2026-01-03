import Image from "next/image";

// Mock 資料
const mockData = {
  name: "黃健旻 Vincent Huang",
  username: "Jian-Min-Huang",
  avatar: "https://avatars.githubusercontent.com/u/6296280?v=4",
  bio: "🔥 Go Go Go !",
  title: "$_purefunc, Co-founder",
  location: "Taiwan, Taipei",
  website: "https://jianminhuang.cc/",
  followers: 211,
  following: 75,
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jian-min-huang/",
      icon: "🔗",
    },
    { name: "X", url: "https://x.com/JianMin_V_Huang", icon: "𝕏" },
    {
      name: "Facebook",
      url: "https://www.facebook.com/yfr.huang/",
      icon: "📘",
    },
  ],
  about: [
    "👀 MBTI - ESFJ",
    "👨‍💻 Coder, 🎤 Speaker, 👨‍🏫 Mentor and 🚀 Leader",
    "♠️ Joint of React Frontend & JVM Backend & DevOps",
    "💼 $_purefunc, Co-founder",
  ],
  pinnedRepos: [
    {
      owner: "github",
      name: "awesome-copilot",
      description:
        "Community-contributed instructions, prompts, and configurations to help you make the most of GitHub Copilot.",
      language: "JavaScript",
      stars: "16.1k",
      forks: "1.9k",
    },
    {
      owner: "b2etw",
      name: "Spring-Kotlin-iThome-2021",
      description: "iThome ironman 2021 💪",
      language: "Kotlin",
      stars: "40",
      forks: "3",
    },
    {
      owner: "b2etw",
      name: "reactive-coroutine-performance-test",
      description: "Reactive X Coroutine X Performance Test ⚡️",
      language: "Kotlin",
      stars: "14",
      forks: "1",
    },
    {
      owner: "taiwan-kotlin-user-group",
      name: "emoji-jvm-string",
      description: "print emoji in your log message 🎃",
      language: "Kotlin",
      stars: "20",
      forks: "3",
    },
    {
      owner: "PureFuncInc",
      name: "pure-backend-practice",
      description: "some basic backend knowledge you need to know 💡",
      language: "TypeScript",
      stars: "64",
      forks: "9",
    },
    {
      owner: "PureFuncInc",
      name: "spring-boot-3-practice",
      description:
        "Spring Boot 3, Spring Framework 6, Java 17, Kotlin 1.7, GraalVM 22 🧧",
      language: "Kotlin",
      stars: "14",
      forks: "1",
    },
  ],
  languageStats: [
    { name: "Java", percentage: 40.62, color: "bg-orange-500" },
    { name: "Kotlin", percentage: 25.0, color: "bg-purple-500" },
    { name: "TypeScript", percentage: 9.38, color: "bg-blue-500" },
    { name: "Gherkin", percentage: 3.12, color: "bg-green-500" },
    { name: "AppleScript", percentage: 3.12, color: "bg-gray-500" },
  ],
  organizations: [
    "CommonMarvel",
    "b2etw",
    "Game-as-a-Service",
    "taiwan-kotlin-user-group",
    "PureFuncInc",
  ],
  contributions: 554,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 左側欄 - 個人資料 */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* 頭像與基本資訊 */}
              <div className="bg-[#161b22] rounded-lg p-6 border border-[#30363d]">
                <div className="flex flex-col items-center">
                  <img
                    src={mockData.avatar}
                    alt={mockData.name}
                    className="w-64 h-64 rounded-full border-2 border-[#30363d] mb-4"
                  />
                  <h1 className="text-2xl font-semibold text-white mb-1">
                    {mockData.name}
                  </h1>
                  <p className="text-xl text-gray-400 mb-2">
                    {mockData.username}
                  </p>
                  <p className="text-sm text-gray-300 mb-4">{mockData.bio}</p>

                  <button className="w-full bg-[#21262d] hover:bg-[#30363d] text-white py-2 px-4 rounded-md border border-[#30363d] transition-colors">
                    Follow
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-[#30363d]">
                  <div className="flex gap-4 text-sm mb-4">
                    <span className="text-gray-300">
                      <strong className="text-white">
                        {mockData.followers}
                      </strong>{" "}
                      followers
                    </span>
                    <span className="text-gray-300">
                      <strong className="text-white">
                        {mockData.following}
                      </strong>{" "}
                      following
                    </span>
                  </div>

                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <span>🏢</span>
                      <span>{mockData.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📍</span>
                      <span>{mockData.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🔗</span>
                      <a
                        href={mockData.website}
                        className="text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {mockData.website}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4">
                    {mockData.socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className="text-gray-400 hover:text-white transition-colors text-xl"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#30363d]">
                  <h3 className="text-sm font-semibold text-white mb-3">
                    Organizations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {mockData.organizations.map((org) => (
                      <div
                        key={org}
                        className="w-8 h-8 bg-linear-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center text-white text-xs font-bold"
                        title={org}
                      >
                        {org.charAt(0).toUpperCase()}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右側欄 - 主要內容 */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <div className="bg-[#161b22] rounded-lg p-6 border border-[#30363d]">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>👋</span>
                Hi there, I&apos;m Vincent Huang
              </h2>
              <div className="space-y-2 text-gray-300">
                {mockData.about.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>

            {/* Language Stats */}
            <div className="bg-[#161b22] rounded-lg p-6 border border-[#30363d]">
              <h2 className="text-xl font-semibold text-white mb-4">
                I Mostly Code in
              </h2>
              <div className="space-y-3">
                {mockData.languageStats.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{lang.name}</span>
                      <span className="text-gray-400">{lang.percentage}%</span>
                    </div>
                    <div className="w-full bg-[#21262d] rounded-full h-2">
                      <div
                        className={`${lang.color} h-2 rounded-full transition-all`}
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contributions */}
            <div className="bg-[#161b22] rounded-lg p-6 border border-[#30363d]">
              <h2 className="text-xl font-semibold text-white mb-4">
                {mockData.contributions} contributions in the last year
              </h2>
              <div className="grid grid-cols-52 gap-1">
                {Array.from({ length: 365 }).map((_, i) => {
                  const intensity = Math.floor(Math.random() * 5);
                  const colors = [
                    "bg-[#161b22]",
                    "bg-green-900/30",
                    "bg-green-700/50",
                    "bg-green-500/70",
                    "bg-green-400",
                  ];
                  return (
                    <div
                      key={i}
                      className={`w-2.5 h-2.5 rounded-sm ${colors[intensity]}`}
                      title={`Day ${i + 1}`}
                    />
                  );
                })}
              </div>
              <div className="flex items-center gap-2 mt-4 text-xs text-gray-400">
                <span>Less</span>
                <div className="flex gap-1">
                  {[
                    "bg-[#161b22]",
                    "bg-green-900/30",
                    "bg-green-700/50",
                    "bg-green-500/70",
                    "bg-green-400",
                  ].map((color, i) => (
                    <div
                      key={i}
                      className={`w-2.5 h-2.5 rounded-sm ${color}`}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>

            {/* Pinned Repositories */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Pinned</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockData.pinnedRepos.map((repo) => (
                  <div
                    key={`${repo.owner}/${repo.name}`}
                    className="bg-[#161b22] rounded-lg p-4 border border-[#30363d] hover:border-[#58a6ff] transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8V1.5z" />
                        </svg>
                        <h3 className="font-semibold text-blue-400 hover:underline">
                          {repo.owner}/{repo.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                      {repo.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <span
                          className={`w-3 h-3 rounded-full ${
                            repo.language === "JavaScript"
                              ? "bg-yellow-400"
                              : repo.language === "Kotlin"
                              ? "bg-purple-500"
                              : repo.language === "TypeScript"
                              ? "bg-blue-500"
                              : "bg-gray-500"
                          }`}
                        />
                        <span>{repo.language}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>⭐</span>
                        <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>🔱</span>
                        <span>{repo.forks}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
