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
    <div>
      <div className=" fixed w-full  bg-white flex justify-start gap-5 items-center p-4 border-b border-gray-700">
        <div className="flex flex-col gap-3 ">
            <div className=" max-w-20 bg-black"><NavBar /></div>
            <h1 className='text-3xl text-gray-900 font-bold'>Reports</h1>
            <p className=' text-sm text-gray-700'>Welcome to the Reports . Here you can find various reports and analytics.</p>
            <p className=' text-sm text-gray-600 '>Export and analyze your LLM visibility data</p>
        </div>
        <Button className="flex gap-2 text-#fff bg-gray-950 items-center text-sm  rounded-2xl">Filters <FilterIcon size={15} /></Button>
      </div>

      <div className="p-2">
        {summaryData.map((data)=>(
            <div key={data.title} className="bg-white  p-4 m-2 rounded-lg shadow-md text-center mt-6">
                <h2 className="text-lg text-gray-700 mb-3 font-semibold">{data.title}</h2>
                <p className="text-sm text-gray-600">{data.value}</p>
            </div>
        ))}
      </div>

      <div className=" p-4">
      <div className="bg-white border rounded-2xl">

        <h1 className="font-semibold text-sm">Detailed daily metrics for LLM visibility and presence tracking</h1>
        <div className="grid grid-cols-6 gap-4 p-4 font-semibold text-gray-700 border-b border-gray-300 text-sm">
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
                    <p><Progress className="w-10 bg-blue-500" value ={metrics.visibility}/></p>
                    <p><Progress className="w-10 bg-gray-40000" value ={metrics.presence}/></p>
                    <p className="bg-gray-700 text-sm rounded-2xl p-1 text-center ">{metrics.mentions}</p>
                    <p className="mx-6 text-gray-600">{metrics.avgRank}</p>
                    <p className="flex gap-2 items-center justify-center bg-gray-950 text-sm rounded-2xl p-1 max-md:flex-col max-md:p-2 ">{metrics.action}<span><EyeIcon/></span></p>
                    
                </div>
            ))}
        </div>
      </div>
    </div>

      

    </div>
  )
}

export default ReportPage
