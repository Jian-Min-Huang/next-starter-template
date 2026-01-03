"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface TimelineEvent {
  year: number;
  label: string;
  description: string;
  icon: string;
  position: number;
}

export default function LingjiuHomepage() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  useEffect(() => {
    // 生成漂浮的光點粒子
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 20,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const timelineEvents: TimelineEvent[] = [
    {
      year: 2024,
      label: "今天",
      description: "媽媽錄下生日祝福",
      icon: "🎂",
      position: 10,
    },
    {
      year: 2028,
      label: "4年後",
      description: "孩子畢業收到鼓勵",
      icon: "🎓",
      position: 30,
    },
    {
      year: 2035,
      label: "11年後",
      description: "孩子結婚聽見祝福",
      icon: "💍",
      position: 55,
    },
    {
      year: 2050,
      label: "26年後",
      description: "孫子聽見祖父的聲音",
      icon: "👶",
      position: 80,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* 星空背景粒子 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-200 opacity-50 animate-twinkle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* 主要內容 */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Logo */}
        <div className="text-center mb-16">
          <h1 className="text-2xl font-light text-amber-200 tracking-widest">
            靈居
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-2"></div>
        </div>

        {/* 主視覺區 */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          {/* 主標題 */}
          <h2 className="text-5xl md:text-6xl font-light text-blue-50 mb-6 leading-tight">
            給未來的你們
            <br />
            <span className="text-amber-300">一封來自時光深處的信</span>
          </h2>

          {/* 副標題 */}
          <p className="text-xl md:text-2xl text-blue-200 mb-16 font-light leading-relaxed">
            今天記錄的每一刻
            <br />
            都可能成為明天最珍貴的陪伴
          </p>

          {/* 互動式時間線 */}
          <div className="bg-opacity-5 backdrop-blur-sm rounded-3xl p-12 mb-12 border border-blue-200 border-opacity-20">
            <h3 className="text-2xl text-amber-200 mb-8 font-light">
              時光之旅
            </h3>

            {/* 時間線容器 */}
            <div className="relative h-32 mb-8">
              {/* 主時間線 */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-blue-400 to-purple-500 transform -translate-y-1/2 rounded-full shadow-lg shadow-blue-500/50"></div>

              {/* 時間點 */}
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer transition-all duration-300"
                  style={{ left: `${event.position}%` }}
                  onMouseEnter={() => setHoveredYear(event.year)}
                  onMouseLeave={() => setHoveredYear(null)}
                >
                  {/* 光點 */}
                  <div
                    className={`w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg transition-all duration-300 ${
                      hoveredYear === event.year
                        ? "scale-150 shadow-2xl shadow-amber-400/80"
                        : "shadow-amber-400/50"
                    }`}
                  >
                    <div className="absolute inset-0 rounded-full bg-amber-200 opacity-50 animate-ping"></div>
                  </div>

                  {/* 年份標籤 */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <div className="text-amber-300 text-sm font-medium">
                      {event.label}
                    </div>
                    <div className="text-blue-200 text-xs mt-1">
                      {event.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 時間點詳情顯示區 */}
            <div className="min-h-24 flex items-center justify-center">
              {hoveredYear ? (
                <div className="text-center animate-fadeIn">
                  <div className="text-5xl mb-3">
                    {timelineEvents.find((e) => e.year === hoveredYear)?.icon}
                  </div>
                  <p className="text-blue-50 text-lg font-light">
                    {
                      timelineEvents.find((e) => e.year === hoveredYear)
                        ?.description
                    }
                  </p>
                </div>
              ) : (
                <p className="text-blue-300 text-sm italic">
                  將滑鼠移到時間點上,探索不同時刻
                </p>
              )}
            </div>
          </div>

          {/* CTA 按鈕 */}
          <button className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-900 px-12 py-4 rounded-full text-lg font-medium hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300">
            創建我的時間膠囊
          </button>

          <p className="text-blue-300 text-sm mt-4 font-light">
            開始很簡單：一張照片、一段語音、一個故事
          </p>
        </div>

        {/* 三個核心價值卡片 - 調整為深色主題 */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-opacity-5 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-opacity-10 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 border border-blue-200 border-opacity-20">
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-xl font-medium text-amber-200 mb-3">
              生前準備
            </h3>
            <p className="text-blue-200 leading-relaxed">為未來留下禮物</p>
          </div>

          <div className="bg-opacity-5 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-opacity-10 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2 border border-purple-200 border-opacity-20">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-xl font-medium text-amber-200 mb-3">
              持續對話
            </h3>
            <p className="text-blue-200 leading-relaxed">思念時能聽見回應</p>
          </div>

          <div className="bg-opacity-5 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-opacity-10 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-2 border border-amber-200 border-opacity-20">
            <div className="text-5xl mb-4">🌸</div>
            <h3 className="text-xl font-medium text-amber-200 mb-3">
              永恆陪伴
            </h3>
            <p className="text-blue-200 leading-relaxed">重要時刻不缺席</p>
          </div>
        </div>

        {/* 底部文案 */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-blue-300 italic text-lg leading-relaxed">
            「每個人都值得被記得，不只是曾經存在，而是永遠存在」
          </p>
        </div>
      </div>
    </div>
  );
}
