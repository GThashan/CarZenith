
import { CustomerFilter, Hero, Searchbar } from "@/Components";
import Image from "next/image";

export default function Home() {
  return (
  
      <main className="overflow-hidden">
       <Hero/>
       <div className="py-9 px-16">
        <div>
          <h1 className="font-semibold text-[20px]">Car Catalogue</h1>
          <p className="text-gray-600 text-[15px]">Explore out cars might like</p>
        </div>

        <div className="flex">
          <Searchbar/>

          <div className="flex">
            <CustomerFilter/>
            <CustomerFilter/>
          </div>
        </div>
       </div>
        
      </main>
    
  );
}
