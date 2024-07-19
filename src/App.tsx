import React,{useEffect,useState} from 'react';
import axios, {AxiosError} from 'axios';

import {IUser} from'./models';
import User from './components/User';
import Company from  './components/Company';

export default function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');
  const [companies,setCompanies] = useState<string[]>([]);   
  const [search,setSearch] = useState<IUser[]>([]);  

  const sortName = (users :IUser[]) => setUsers(users.sort((a: IUser, b: IUser)=>a.name.localeCompare(b.name)))
  const findCompany = (name : string) => setSearch(users.filter((user : IUser) => user.company.name==name))
  const display = () => { 
    sortName(users)
    setSearch(users) ;     
  }
  async function fetchUsers(){
    try{
      setError('');
      setLoad(true); 
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');     
     
      sortName(response.data);
      setSearch(response.data);      
      setCompanies(response.data.map((user: IUser) => user.company.name));
      
      setLoad(false); 
      }
    catch(err){ 
      const error = err as AxiosError;     
      setLoad(true); 
      setError(error.message);
    }         
  }
  useEffect(
    () => {      
      fetchUsers();    
    },[]    
  )   
  
  return ( 
  
    <div className = "container mx-auto max-w-6xl">   
      { load && <p className="text-red-600"> Loading ....</p>}
      { error && <p>При загрузки страницы возникла ошибка: {error}</p> } 
      {
        companies &&
        <Company 
           companies = {companies} 
           action = {(name : string) => {findCompany(name)}} 
           display = {display}/>
      }

      <section  className = "user">       
      <h3 className="text-2xl mb-4 text-center">List of users </h3> 
      <div className = "space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        {
            search?.map((user) => <User key = {user.id} user={user}/>)
        }
      </div>
      </section>    
    </div>
      
  )
}


