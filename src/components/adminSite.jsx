import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";

const AdminSite = () => {
    
    const navigate = useNavigate()
    const goToPage = (addr)=>{
        navigate(addr)
    }
    
    const adminPassword = [{name: 'admin', password: 'admin'}]
    const [adminInfo, setAdminInfo] = useState({
        name: '',
        password: ''
    })

    const handleChange = ({target:{name, value}})=>{

        setAdminInfo({...adminInfo, [name]: value})
    }


    const handleSubmit = () => {
        const isValid = adminPassword.some(
            (admin) => admin.name === adminInfo.name && admin.password === adminInfo.password
        );

        if (!isValid) {
            alert('Invalid credentials');
        } else {
            alert('Login successful');
            goToPage('/home')
        }
    };

    return (
        

        <div
            className=" w-full sm:mx-10 md:w-1/2 lg:w-1/3 border-[0.1px] sm:min-h-screen md:min-h-[50vh] rounded-lg flex relative text-blue-50  overflow-hidden flex-col justify-between items-center">

            <div className="absolute scale-1 h-[100%] w-[100%] z-0 ">
                <img
                    src="/img/forest.jpg"
                    className="object-cover"
                />
            </div>
            <p className="z-10 px-5 md:px-10 special-font text-2xl font-zentry tracking-wide">Admin login</p>

            <div className="z-10 h-1/2 flex flex-col items-center justify-center">
                <p className="font-general text-xl">Welcome Great Admin</p>

                <form className="flex flex-col gap-2 w-full mt-4 py-5" onSubmit={handleSubmit} >

                   
                    <input

                        className="form"
                        type="text"
                        placeholder="Enter Your UserName"
                        name="name"
                        required
                        onChange={handleChange}
                        value={adminInfo.name}


                    />
                    <input
                       
                        className="form"
                        type="password"
                        placeholder="Enter Your Password"
                        name="password"
                        required
                        onChange={handleChange}
                        value={adminInfo.password}

                        

                    />

                   
                    <input type="submit" className="font-general w-max m-auto border px-2 rounded-lg"/>
                </form>
            </div>


        </div>

    )
}
export default AdminSite
