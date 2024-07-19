interface CompanyProps{
  companies: string[];
  action: (e: string) => void;
  display: () => void;
}
export default function Company({companies, action,display}: CompanyProps){   
    return(
      <div> 
        <h4>Select  company: </h4>
        <div className="d-flex align-items-center justify-content-center gap-2">     
            <select className="form-control form-control-sm " name="company" onChange={(event)=>{action(event.target.value);}}>             
            {          
            companies?.map((company: string) => <option value={company} key={company}> {company} </option>)           
            }               
            </select>
            <button className="btn btn-primary  btn-sm " onClick={()=>{display()}}>All</button> 
            </div>
        </div>
      )
}