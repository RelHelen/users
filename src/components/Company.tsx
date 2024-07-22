interface CompanyProps{
  companies: string[];
  action: (e: string) => void;
  display: () => void;
}
export default function Company({companies, action,display}: CompanyProps){   
    return(
      <div> 
        <h3 className="text-2xl mb-4 ">Select  company: </h3>
        <div className="flex gap-2 mb-6">     
            <select  name="company" onChange={(event)=>{action(event.target.value);}}  className="bg-gray-50 w-[300px]  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">             
            {          
            companies?.map((company: string) => <option value={company} key={company}> {company} </option>)           
            }               
            </select>
            <button onClick={()=>{display()}} className="w-[100px] bg-gray-70 border border-gray-300 text-gray-900 text-sm rounded-lg w" >All</button> 
            </div>
        </div>
      )
}
