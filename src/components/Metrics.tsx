import {  EyeIcon,  Globe,  MessageSquare, TrendingDownIcon, TrendingUpIcon, Trophy } from "lucide-react"
import AppBarChart from "./AppBarChart";
import AppRadialChart from "./AppRadialChart";
import Performance from "./Performance";
import TopPerformance from "./TopPerformance";

interface Metric {
  title: string;
  previous_score: number;
  present_score: number;
}

interface Props {
  metrics: Metric[];
}

const Metrics = ({metrics  }: Props) => {

  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  p-4">
          {metrics.map((metric)=>{
              const {title, previous_score, present_score} = metric;
              const percentage = () => {
                  if (previous_score === 0 && present_score === 0) return 0;
                  if (previous_score === 0 ) return present_score > 0 ?  100 : -100;    
                  return ((present_score - previous_score) / previous_score) * 100;
             };
            return(
                  <div className="w-full rounded-2xl border  bg-[var(--brand-50)] dark:bg-[var(--brand-500)] border-#fff p-4 mt-4 flex-col  justify-center transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:shadow-lg" >
                      <div className="flex justify-between items-center gap-2 p-2 mb-6">
                            <div  className="text-blue-500">{title === "Visibility Score" && <EyeIcon />}
                                 {title === "Presence Score" && <Globe />}
                                 {title === "Average Rank" && <Trophy />}
                                 {title === "Mentions" && <MessageSquare/>}
                             </div>

                            <p className={percentage() >= 0 ?  'flex items-center justify-center  text-green-500 font-semibold text-sm' : 'flex items-center justify-center  text-red-500 font-semibold text-sm'}>
                               {percentage() < 0 &&  <TrendingDownIcon/>}
                               {percentage() > 0 &&  <TrendingUpIcon className="w-4 h-4 mr-1" /> } 
                               {percentage().toFixed(2)}
                            </p>
                      </div>  
                      <div>
                            <p className="text-2xl font-bold dark:text-[var(--brand-100)] text-[var(--brand-900)]">
                                {title === 'Mentions' && present_score }
                                {title === 'Presence Score' && `${present_score % 100}%` }
                                {title === 'Visibility Score' && (present_score / 10).toFixed(1) }
                                {title === 'Average Rank' && (present_score/10).toFixed(1) }
                            </p>
                            <p className=" dark:text-[var(--brand-100)] text-[var(--brand-950)] font-semibold text-sm">{title}</p> 
                      </div>
                  </div>
            )})}   
        </div>

            {/* Tab Components */}
        <div className="p-4">
            <div  className="p-4 mt-6 flex flex-col  gap-1 items-start justify-start mx-4">
                <h1 className="font-semibold text-[var(--brand-50)]  text-2xl">Visibility & Presence Trends</h1>
                <p className="font-semibold text-[var(--brand-100)] ">Track your brand's performance across AI models over the last 7 days</p>
            </div>

            <div className="xl:flex xl:justify-around xl:items-center max-md:flex-col max-md:mx-auto">
                <AppBarChart />
                <AppRadialChart/>
            </div>                        
        </div>


        <div>
          <Performance />
          <TopPerformance/>
        </div>
    </section>

  )
    

}

export default Metrics
