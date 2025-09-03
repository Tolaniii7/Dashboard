import { ArrowBigDownIcon } from "lucide-react"
import NavBar from "../components/NavBar"
import { Button } from "../components/ui/button"
import { supabase } from "../supabase-client";
import Metrics from "../components/Metrics";
import { useState } from "react";




interface MetricsData {
  title: string;
  present_score: number;
  previous_score: number;
}


const metrics_data = () : MetricsData[]  => [
    { title: 'Visibility Score', previous_score: Math.floor(Math.random() * 100), present_score: Math.floor(Math.random() * 100) },
    { title: 'Presence Score', previous_score: Math.floor(Math.random() * 100), present_score: Math.floor(Math.random() * 100) },
    { title: 'Average Rank', previous_score: Math.floor(Math.random() * 100), present_score: Math.floor(Math.random() * 100) },
    { title: 'Mentions', previous_score: Math.floor(Math.random() * 100), present_score: Math.floor(Math.random() * 100) }
]

const HomePage = () => {

  const [metrics, setMetrics] = useState<MetricsData[]>([]);
  const [isLoading, setLoading] = useState(false);

  const createMetrics = async () => {

    const generatedMetrics = metrics_data();
  const {data, error} = await supabase
        .from('metrics')
        .insert(generatedMetrics.map(metric => ({
        title: metric.title,
        previous_score: metric.previous_score,
        present_score: metric.present_score
      }))) 

  if (error) {
    console.error("Error creating metrics:", error);
    throw new Error(error.message);
  }

    return data;
}


const fetchMetrics = async () => {
  const {data, error} = await supabase
  .from('metrics')
  .select('title, previous_score, present_score')
  .order("id", { ascending: false })
  .limit(4)


  if (error) {
    throw new Error(error.message);
  }
   
  if(data){
      setMetrics(data  as MetricsData[]   );
  }
}
 

 const handleLoad = async () => {
    setLoading(true);     
    await createMetrics();

    await fetchMetrics();
    setLoading(false);
  };


  return (
    <section  className=' w-full'>
      <nav className='fixed top-0 w-full z-1 shadow-md bg-gray-900 p-4 flex flex-col justify-between items-start '>
        <div>
        <div>
          <NavBar />
        </div>

            <div className="flex justify-between items-center p-4 w-full"> 
              <div className="p-2"> 
                <h2 className="text-3xl font-bold">Dashboard</h2>
                <p className="text-sm text-white-300 ">Monitor your brands's visibility across AI models</p>
              </div>

              <div className="flex justify-center items-center md:flex-row flex-col gap-4">
                <Button onClick={handleLoad} className="w-20 rounded-2xl text-fff bg-blue-400" >Live Data</Button>
                <Button className="w-40 p-[2rem]  bg-blue-600 text-[18px] text-white"><ArrowBigDownIcon/> Export Report</Button>
              </div>    
            </div>
            </div>
      </nav> 
            <div className="w-full bg-white h-px  " />
                {!metrics.length && !isLoading && (
                  <div className=" text-center py-10 text-lg font-semibold">
                    No metrics available. Click "Live Data" to generate metrics.
                  </div>
                )}

            { isLoading ?
              (<div className="text-center py-10 text-lg font-semibold">
                    Loading metrics...
                </div>
              ) : (
                <div className="mt-40 max-md:mt-50">
                  <Metrics metrics = {metrics  || [] } />
                </div> 
            )}
    </section>
  )
}

export default HomePage
 