import { Sidebar } from 'flowbite-react'
import React from 'react'
import {HiUser,HiArrowSmRight} from 'react-icons/hi'
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutSuccess } from '../redux/user/userSlice';
function DashSidebar() {
  const location=useLocation();
  const [tab,setTab]=useState('');
  useEffect(()=>{
    const urlParams=new URLSearchParams(location.search)
    const tabFromUrl=urlParams.get('tab')
    if(tabFromUrl)
    {
      setTab(tabFromUrl);
    }
  },[location.search]);

  const dispatch=useDispatch();

  const handleSignout= async()=>{
    try{
        const res=await fetch('/api/user/signout',{
            method:'POST',
        });
        const data=await res.json();
        if(!res.ok)
        {
            console.log(error);
        }
        else{
            dispatch(signOutSuccess());
        }
    }
    catch(error)
    {
        console.log(error);
    }
}


  return (
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
            <Link to='/dashboard?tab=profile'>
                <Sidebar.Item active={tab==='profile'} icon={HiUser} label={"User"} labelColor='dark' as='div'>
                    Profile
                </Sidebar.Item>
            </Link>
                <Sidebar.Item onClick={handleSignout} icon={HiArrowSmRight} className='cursor-pointer'>
                    Sign Out
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar