import { EyeIcon, FilterIcon } from "lucide-react"
import { Progress } from "../components/ui/progress";
import NavBar from "../components/NavBar";
import { Button } from "../components/ui/button";

export interface SummaryData {
  title: string;
  value: string | number;
}

export const summaryData: SummaryData[] = [
  { title: "Days Analyzed", value: 7 },
  { title: "Total Mentions", value: 1970 },
  { title: "Avg Visibility", value: "77%" },
  { title: "Avg Presence", value: "71%" },
];

export const performanceData = [
  {
    date: "📅",
    visibility: 84,
    presence: 74,
    mentions: 298,
    avgRank: 2.1,
    action: "View",
  },
  {
    date: "📅",
    visibility: 86,
    presence: 72,
    mentions: 312,
    avgRank: 2.3,
    action: "View",
  },
  {
    date: "📅",
    visibility: 81,
    presence: 76,
    mentions: 289,
    avgRank: 2.0,
    action: "View",
  },
  {
    date: "📅",
    visibility: 78,
    presence: 73,
    mentions: 234,
    avgRank: 2.4,
    action: "View",
  },
  {
    date: "📅",
    visibility: 75,
    presence: 69,
    mentions: 178,
    avgRank: 2.7,
    action: "View",
  },
  {
    date: "📅",
    visibility: 72,
    presence: 71,
    mentions: 203,
    avgRank: 2.5,
    action: "View",
  },
  {
    date: "📅",
    visibility: 68,
    presence: 68,
    mentions: 156,
    avgRank: 2.9,
    action: "View",
  },
];



const ReportPage = () => {
  return (
   <>
      <div className="  w-full bg-[var(--brand-50)] flex gap-4 items-center  px-4 py-4 border-b border-[var(--brand-600)] ">
        <div className="flex flex-col gap-6 mt-5  xl:flex-row xl:justify-between xl:items-center w-full">
          <div className="">
            <div className="mt-3 max-w-22 dark:bg-[var(--brand-500)] rounded px-4 "><NavBar /></div>
              <h1 className='mt-3 text-3xl text-[var(--brand-700)] font-bold'>Reports</h1>
              <p className='mt-3 text-sm text-[var(--brand-600)] w-[90%]'>Welcome to the Reports . Here you can find various reports and analytics.</p>
              <p className='mt-1 text-sm text-[var(--brand-600)] '>Export and analyze your LLM visibility data</p>
            </div>
            <Button className="flex w-60 gap-2 text-[#fff] bg-[var(--brand-500)] items-center text-sm  rounded-2xl">Filters <FilterIcon size={15} /></Button>
        </div>
      </div>

      <div>
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mt-10">
            {summaryData.map((data)=>(
                <div key={data.title} className="bg-white  p-4 m-2 rounded-lg shadow-md text-center mt-6">
                    <h2 className="text-lg text-[var(--brand-400)] mb-3 font-semibold">{data.title}</h2>
                    <p className="text-sm font-extrabold text-gray-600">{data.value}</p>
                </div>
            ))}
          </div>

          <div className="  p-4">
            <div className="bg-[var(--brand-100)] max-md:overflow-x-auto dark:bg-[var(--brand-600)]  rounded-2xl p-6 ">

              <h1 className="font-extrabold dark:text-[var(--brand-100)] text-[var(--brand-500)] text-sm">Detailed daily metrics for LLM visibility and presence tracking</h1>
              <div className=" max-md:min-w-[800px] mt-6">
                <div className="   grid grid-cols-6 gap-10 p-4 font-light text-[var(--brand-900)] dark:text-[var(--brand-100)] border-b border-gray-300 text-sm">
                    <p >Date</p>
                    <p>Visibility %</p>
                    <p>Presence %</p>
                    <p>Mentions</p>
                    <p>Avg Rank</p>
                    <p>Action</p>
                </div>


                <div >
                    {performanceData.map((metrics)=>(
                        <div className="grid grid-cols-6 items-center gap-4 p-4">
                            <p className="text-sm">{metrics.date}</p>
                            <p><Progress className="w-10" value ={metrics.visibility}/></p>
                            <p><Progress className="w-10 " value ={metrics.presence}/></p>
                            <p className="bg-[var(--brand-600)]  dark:bg-[var(--brand-100)]  dark:text-[var(--brand-600)]   text-[var(--brand-100)] text-sm rounded-2xl p-1 text-center ">{metrics.mentions}</p>
                            <p className="mx-6 xl:mx-10 text-sm text-[var(--brand-800)] dark:text-[var(--brand-100)]  font-bold">{metrics.avgRank}</p>
                            <p className="flex gap-1 items-center justify-center bg-[var(--brand-400)] text-sm rounded-2xl p-2 md:px-10 ">{metrics.action}<span><EyeIcon className="text-white"/></span></p>

                        </div> 
                    ))}
                </div>
              </div>
            </div>
        </div>

              

      </div>
    </>
  )
}

export default ReportPage
