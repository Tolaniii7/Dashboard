import { Progress } from "../components/ui/progress"
import { Link } from "lucide-react"

export interface Metric {
  name: string
  icon: string
  change: number 
  visibility: number
  presence: number
}

export const aiMetrics: Metric[] = [
  {
    name: "OpenAI",
    icon: "🤖",
    change: 12.5,
    visibility: 8.7,
    presence: 82,
  },
  {
    name: "Claude",
    icon: "🔮",
    change: 5.3,
    visibility: 7.2,
    presence: 68,
  },
  {
    name: "Gemini",
    icon: "✨",
    change: -2.1,
    visibility: 6.8,
    presence: 71,
  },
  {
    name: "Meta AI",
    icon: "🌐",
    change: 8.7,
    visibility: 5.9,
    presence: 64,
  },
  {
    name: "Grok",
    icon: "⚡",
    change: 0.0,
    visibility: 4.2,
    presence: 45,
  },
  {
    name: "DeepSeek",
    icon: "🧠",
    change: 15.2,
    visibility: 3.1,
    presence: 38,
  },
]



const Performance = () => {
  return (
    <div className="p-6">
        <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl text-[var(--brand-100)] font-bold mb-2">Model Performance</h1>
              <p className="text-sm text-[var(--brand-50)] font-semibold ">Your brand visibility across different AI language models</p>
            </div>

            <button className="flex gap-4 items-center text-sm font-semibold border border-[#fff] text-[var(--brand-950)] dark:text-[var(--brand-50)] bg-[var(--brand-50)]  dark:bg-[var(--brand-950)] rounded-2xl p-3 text-center">View Details <span><Link/></span></button>
        </div>

        <div className="grid p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {aiMetrics.map((metric) => (
                <div className="border dark:border-2 rounded-2xl border-[var(--brand-300)] dark:border-[var(--brand-800)]  p-4 transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:shadow-lg" key={metric.name}>
                    <div className="flex items-center gap-4 mb-4">
                            <span className="border border-[var(--brand-200)] p-2 rounded-2xl ">{metric.icon}</span>
                        <div className="flex flex-col gap-1">
                            <h2 className="font-semibold text-sm text-[var(--brand-50)]">{metric.name}</h2>
                            <p className={`${metric.change >= 0 ? 'text-green-500' : 'text-red-500'}  text-sm` }>
                                {metric.change >= 0 ? '+' : ''}{metric.change}%
                            </p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="text-[var(--brand-50)] dark:text-[var(--brand-100)] text-sm flex items-center justify-between">Visibility: <span>{metric.visibility}%</span> </p>
                        <Progress   value={metric.visibility} />
                    </div>
                    <div>
                        <p className="text-[var(--brand-50)] dark:text-[var(--brand-100)] text-sm flex items-center justify-between">Presence: <span>{metric.presence}%</span></p>
                        <Progress  value={metric.presence} />
                    </div>
                </div>
            ))}
    </div>
    </div>

    
    
    
    
  )
}

export default Performance;
