import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
export const AdminContacts = ()=>{
    const [contactData, setContactData] = useState([]);
    const {authorizationToken} = useAuth();
    const getContactData = async ()=>{
        try {
            const response = await fetch('http://localhost:5000/api/admin/contacts',{
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                }
            });
            const data = await response.json();
            if(response.ok){
                setContactData(data);
            }
            console.log(data);
        } catch (error) {
            next(error);
        }
    }
    useEffect(()=>{
        getContactData();
    },[])

    const deleteContactById = async (id) =>{
        try {
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`,
            {
                method:'DELETE',
                headers:{
                    Authorization:authorizationToken,
                }
            });
            if(response.ok){
                getContactData();
                toast.success("deleted successfully");
            }
            else{
                toast.success("Not deleted");
            }
        } catch (error) {
            next(error);
        }
    }
    return (
    <>
        <section className="admin-contacts-section">
        <h1>Admin Contact Data </h1>

        <div className="container  admin-users">
          {contactData.map((curContactData, index) => {
            const { username, email, message, _id } = curContactData;

            return (
              <div key={index}>
                <p>{username}</p>
                <p>{email}</p>
                <p>{message}</p>
                <button className="btn" onClick={() => deleteContactById(_id)}>
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
    );
};