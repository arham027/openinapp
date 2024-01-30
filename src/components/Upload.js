
import React from 'react';
import companyLogo from "../assets/Logo and company.png";
import userIcon from "../assets/user image.png";
import analytics from "../assets/Analytics.png";
import invoice from "../assets/Invoice.png";
import schedule from "../assets/Schedule.png";
import calender from "../assets/Group 7564.png";
import notification from "../assets/Notification.png";
import settings from "../assets/Settings.png";
import category from "../assets/Category.png";
import excel from "../assets/Frame 6875.png";
import upload from "../assets/Icon.png";
import {Link} from 'react-router-dom';

const Upload = () => {
  return (
    <div className="w-[1490px] h-[887px] top-[-440px] left-[-1779]">
      <div className="grid grid-flow-col">
        <div className="w-218 h-1047px bg-white" style={{ top: '-1px' }}>
          <img 
            className="h-42 w-111 px-3 py-5 mb-6"
            alt="Logo"
            src={companyLogo}
          />
          <div>
            <div className="flex items-center px-5 mb-7">
              <img className="h-[24px]" alt="category" src={category}/>
              <span className="ml-3 h-[22px] text-gray-400 font-medium">Dashboard</span>
            </div>
            <img className="px-5 mb-7" alt="analytics" src={analytics} />
            <img className="px-5 mb-7" alt="invoice" src={invoice}/>
            <img className="px-5 mb-7" alt="invoice" src={schedule}/>
            <img className="px-5 mb-7" alt="invoice" src={calender}/>
            <img className="px-5 mb-7" alt="invoice" src={notification}/>
            <img className="px-5 mb-7" alt="invoice" src={settings}/>
          </div>
        </div>
        <div className="w-[1052px] h-[32px] top-[49px] left-[248px] gap-[16px] px-3 py-6 relative">
          <div className="w-full text-center mb-8">
            <h1 style={{
              fontFamily: 'Figtree',
              fontSize: '24px',
              fontWeight: 600,
              lineHeight: '32px',
              letterSpacing: '0px',
              textAlign: 'left',
              // Add more styles if needed
            }}>
              <div style={{ position: 'absolute', top: '-25px', left: '0%', transform: 'translateX(-120%)' }}>Upload CSV</div>
            </h1>
          </div>
          <div className="py-40 px-80 flex items-center justify-center flex-col">
            <img alt="excel" src={excel} className="mb-3"/>
            <div className="flex items-center gap-8 mt-10">
             
              <Link className="link" to="/Uploaded"> <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
                style={{ width: '564px', height: '56px', borderRadius: '8px' }}
                onClick={() => { /* Navigate to "Uploading" */ }}
              >
               <img src={upload} alt="upload" className="mr-2" style={{ width: '24px', height: '24px' }} />
                Upload
              </button></Link> 
            </div>
          </div>
        </div>
        <div>
          <img 
            className="py-6"
            alt="user"
            src={userIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default Upload;




