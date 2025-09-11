import { ArrowBigRight,  ArrowDownRightFromSquare,  ChartBar,  Crown,  MessageSquare,  SignalHighIcon } from "lucide-react"

export const leaderboardData = [
  {
    rank: 1,
    shortName: "A8",
    name: "AI8 Digital",
    user: true, // highlights "You";
    score: 8.4,
    change: +0.3,
  },
  {
    rank: 2,
    shortName: "TC",
    name: "TechCorp Solutions",
    score: 7.9,
    change: -0.1,
  },
  {
    rank: 3,
    shortName: "IL",
    name: "InnovateLabs",
    score: 7.6,
    change: +0.2,
  },
  {
    rank: 4,
    shortName: "NG",
    name: "NextGen Analytics",
    score: 7.2,
    change: 0.0,
  },
]


export const topPerformingPrompts = [
  {
    prompt: "What are the best project management tools for remote teams?",
    trend: "trending",
    score: 94,
    mentions: 1247,
    growth: 23,
  },
  {
    prompt: "How to implement AI in customer service workflows?",
    trend: "rising",
    score: 89,
    mentions: 892,
    growth: 18,
  },
  {
    prompt: "Best practices for digital marketing automation",
    trend: "stable",
    score: 85,
    mentions: 756,
    growth: 15,
  },
  {
    prompt: "Software development lifecycle management tools",
    trend: "rising",
    score: 82,
    mentions: 634,
    growth: 12,
  },
  {
    prompt: "Cloud infrastructure security best practices",
    trend: "stable",
    score: 78,
    mentions: 523,
    growth: 8,
  },
]



const TopPerformance = () => {
  return (
    <div className="xl:flex xl:justify-around p-6 rounded-2xl">
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="font-semibold text-[var(--brand-50)] text-2xl">Top Performing Prompts</h1>
                <p className="text-sm text-[var(--brand-50)]">Prompts driving the highest visibility and mentions</p>
              </div>
              <div>
                <button className="flex text-[var(--brand-50)] gap-2">View All <span><ArrowBigRight/></span> </button>
              </div>
          </div>

          <div className="flex flex-col gap-4">
              {topPerformingPrompts.map((item, index)=>(
                  <div className="p-4  border-2 rounded-2xl border-[var(--brand-50)] dark:border-[var(--brand-800)] " key={index}>
                      <div className="flex justify-between gap-2 items-center mb-2">
                          <p className="text-sm text-[var(--brand-50)]">{item.prompt}</p>
                          <p className="border-2 text-[var(--brand-50)] text-sm rounded-2xl border-[var(--brand-800)] p-2">{item.trend === "trending" ? "🔥 Trending" : item.trend === "rising" ? "📈 Rising" : "➖ Stable"}</p>
                      </div>
                      <div className="flex justify-between items-center text-sm text-#fff">
                          <div className="flex  gap-3">
                              <p className="flex items-center text-[var(--brand-50)] gap-1 "><span><SignalHighIcon size={15}/></span> Score {item.score}</p>
                              <p className="flex text-[var(--brand-50)] items-center gap-1 "><span ><MessageSquare size={15}/></span>Mentions {item.mentions}</p>
                          </div>
                          <div>
                              <p className="border-2 text-[var(--brand-50)] text-sm rounded-2xl border-[var(--brand-800)] p-1.5"> {item.growth}%</p>   
                          </div>

                      </div>
                  </div>
              ))}
          </div>
        </div>


            {/* Leaderboard Section */}
            <hr className="my-10 border-[#fff]"/>
        <div className="mt-10 xl:mt-0 p-3">
            <div className="flex justify-between gap-4 items-center mb-10">
                <div>
                    <h1 className="font-semibold text-[var(--brand-50)] text-2xl">Competitor Ranking</h1>
                    <p className="text-sm text-[var(--brand-50)]">How you rank against key competitors in AI visibility</p>
                </div>
                <button className="flex gap-1 text-[var(--brand-50)]">View Full Report <span><ArrowDownRightFromSquare/></span></button>
            </div>

            <div className="flex flex-col gap-3">
                {leaderboardData.map((data)=>(
                    <div className={`p-4 mt-2 flex gap-10 border-[var(--brand-600)] dark:border-[var(--brand-200)] border-2 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:shadow-lg ${data.shortName !== 'A8' && 'border-white dark:border-[var(--brand-800)] border-2'} `}>
                                {data.user === true && (<div className="text-[#fff]"><Crown size={20}/></div>)}
                                {<p className={` text-[#fff] ${data.shortName !== 'A8' && 'border rounded-2xl flex items-center justify-center   border-[var(--brand-50)] p-2' }
                                    ${data.shortName === 'TC' && 'bg-blue-600'}
                                    ${data.shortName === 'IL' && 'bg-purple-600 p-2.5'}
                                    ${data.shortName === 'NG' && 'bg-orange-600'}
                                 `}>
                                    {data.shortName}</p>}

                                <div>
                                    <p className="text-sm text-[var(--brand-50)] mb-2">{data.name}</p>
                                    <p className="flex gap-3 text-[var(--brand-50)] text-sm">Score: {data.score} <span className="flex gap-1"><ChartBar size={15}/> {data.change}</span></p>
                                </div>
                                {data.user === true && (<p className="text-sm text-[#fff]  ">You</p>)}


                    </div>
                ))}
            </div>
        </div>
    </div>

  )
}

export default TopPerformance
