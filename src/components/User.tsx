import {IUser} from'../models';
interface UserProps {
    user: IUser;
}
export default function User({user} : UserProps){  
  return(  
    <article className = "w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className = "card-body">
        <p className = "mb-3 font-normal text-gray-700 dark:text-gray-400"><strong> Name: </strong> {user.name} </p>
        <p className = "mb-3 font-normal text-gray-700 dark:text-gray-400"><strong> Email: </strong> {user.email} </p>       
      </div>
    </article>    
  )
}