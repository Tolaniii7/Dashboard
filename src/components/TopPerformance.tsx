import { ArrowBigRight,  ArrowDownRightFromSquare,  ChartBar,  Crown,  MessageSquare,  SignalHighIcon } from "lucide-react"

export const leaderboardData = [
  {
    rank: 1,
    shortName: "A8",
    name: "AI8 Digital",
    user: true, // highlights "You"
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
    <div className="xl:flex xl:justify-between p-2 bg-gray-900 rounded-2xl mx-10 my-6">
        <div>
        <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="font-semibold text-2xl">Top Performing Prompts</h1>
              <p className="text-sm">Prompts driving the highest visibility and mentions</p>
            </div>
            <div>
              <button className="flex gap-2">View All <span><ArrowBigRight/></span> </button>
            </div>
        </div>

        <div className="flex flex-col gap-4">
            {topPerformingPrompts.map((item, index)=>(
                <div className="p-4  border rounded-2xl border-#fff" key={index}>
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-sm">{item.prompt}</p>
                        <p className="border text-sm rounded-2xl border-#fff p-2">{item.trend === "trending" ? "🔥 Trending" : item.trend === "rising" ? "📈 Rising" : "➖ Stable"}</p>
                    </div>
                    <div className="flex justify-between items-center text-sm text-#fff">
                        <div className="flex  gap-3">
                            <p className="flex items-center gap-1 "><span><SignalHighIcon size={15}/></span> Score {item.score}</p>
                            <p className="flex  items-center gap-1 "><span ><MessageSquare size={15}/></span>Mentions {item.mentions}</p>
                        </div>
                        <div>
                            <p className="border text-sm rounded-2xl border-#fff p-1"> {item.growth}%</p>   
                        </div>

                    </div>
                </div>
            ))}
        </div>
        </div>


            {/* Leaderboard Section */}
            <hr className="my-10 border-#fff"/>
        <div className="mt-10 xl:mt-0">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-semibold text-2xl">Competitor Ranking</h1>
                    <p className="text-sm">How you rank against key competitors in AI visibility</p>
                </div>
                <button className="flex gap-2">View Full Report <span><ArrowDownRightFromSquare/></span></button>
            </div>

            <div className="flex flex-col gap-3 " >
                {leaderboardData.map((data)=>(
                    <div className={`p-4 mt-2 flex gap-10 border rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:shadow-lg ${data.shortName !== 'A8' && 'border-white'} border-#fff`}>
                                {data.user === true && (<div><Crown size={20}/></div>)}
                                {<p className={`${data.shortName !== 'A8' && 'border rounded-2xl border-#fff p-2'}
                                    ${data.shortName === 'TC' && 'bg-blue-600'}
                                    ${data.shortName === 'IL' && 'bg-purple-600 p-2.5'}
                                    ${data.shortName === 'DW' && 'bg-red-600'}
                                    ${data.shortName === 'NG' && 'bg-orange-600'}
                                 `}>
                                    {data.shortName}</p>}

                                <div>
                                    <p className="text-sm mb-2">{data.name}</p>
                                    <p className="flex gap-3 text-sm">Score: {data.score} <span className="flex gap-1"><ChartBar size={15}/> {data.change}</span></p>
                                </div>
                                {data.user === true && (<p className="text-sm border-#fff border rounded-2xl p-2.5 ">You</p>)}


                    </div>
                ))}
            </div>
        </div>
    </div>

  )
}

export default TopPerformance
