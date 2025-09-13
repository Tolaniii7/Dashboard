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
      <nav className='fixed top-0 w-full z-1 shadow-md bg-[var(--brand-accent)] p-2 flex flex-col justify-between items-start '>
        <div>
              <div>
                <NavBar />
              </div>

              <div className="flex justify-between xl:gap-10 max-md:gap-5 items-center p-2 w-full"> 
                <div > 
                  <h2 className="text-3xl text-[var(--brand-100)] dark:text-[#fff] font-extrabold">Dashboard</h2>
                  <p className="text-sm max-sm:w-[80%] md:w-[80%] text-[var(--brand-100)] dark:text-[#fff] font-semibold ">Monitor your brands's visibility across AI models</p>
                </div>

                <div className="flex justify-center  items-center flex-col  xl:flex-row  gap-5">
                  <Button onClick={handleLoad} className="w-20 rounded-2xl dark:bg-[var(--brand-50)]  bg-[black] text-[var(--brand-50)] dark:text-[var(--brand-700)] font-semibold" >Live Data</Button>
                  <Button className="w-40  p-8 text-center bg-[var(--brand-50)]  dark:bg-[var(--brand-950)]  text-[18px] text-[var(--brand-700)] dark:text-[var(--brand-100)] font-semibold"><ArrowBigDownIcon/> Export Report</Button>
                </div>   
              </div>
        </div>
            {/* <div className="w-full  bg-white h-px  " /> */}

      </nav> 
                {!metrics.length && !isLoading && (
                  <div className=" text-center mx-3 pt-10 mt-50 text-3xl text-[var(--brand-100)] dark:text-[#fff] font-extrabold">
                    No metrics available. Click "Live Data" to generate metrics.
                  </div>
                )}

            { isLoading ?
              (<div className="text-center mt-100  text-lg font-semibold">
                    Loading metrics...
                </div>
              ) : (
                <div className="mt-30 xl:pt-20 md:pt-30 max-md:pt-30  ">
                  <Metrics metrics = {metrics  || [] } />
                </div> 
            )}
    </section>
  )
}

export default HomePage
 