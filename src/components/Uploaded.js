import React, { useState } from 'react';
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
import list from "../assets/List.png";
import crossIcon from "../assets/cross.png";

const Uploaded = () => {
 
  const [selectedTags, setSelectedTags] = useState(Array(5).fill(''));

  const handleTagSelect = (index, event) => {
    const newSelectedTag = event.target.value;
    setSelectedTags(prevSelectedTags => {
      const updatedSelectedTags = [...prevSelectedTags];
      updatedSelectedTags[index] = updatedSelectedTags[index] ? `${updatedSelectedTags[index]}, ${newSelectedTag}` : newSelectedTag;
      return updatedSelectedTags;
    });
  };

 
  const removeTag = (index, tagIndex) => {
    setSelectedTags(prevSelectedTags => {
      const updatedSelectedTags = [...prevSelectedTags];
      const tags = updatedSelectedTags[index].split(', ');
      tags.splice(tagIndex, 1);
      updatedSelectedTags[index] = tags.join(', ');
      return updatedSelectedTags;
    });
  };

  return (
    // Inside the return statement of your component
<div>
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
          }}>
            <div style={{ position: 'absolute', top: '-25px', left: '0%', transform: 'translateX(-120%)' }}>Upload CSV</div>
          </h1>
        </div>
        <div className="py-40 px-80 flex items-center justify-center flex-col">
          <img alt="excel" src={excel} className="mb-9" />
          <div className="flex items-center gap-8 mb-9">
            <button 
              className="bg-blue-300 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
              style={{ width: '564px', height: '56px', borderRadius: '8px' }}
            >
              <img src={upload} alt="upload" className="mr-2" style={{ width: '24px', height: '24px' }} />
              Upload
            </button>
          </div>
          <div>
            <div className="flex justify-start">
              <h1 className="text-2xl font-semibold" style={{ fontFamily: 'Figtree', fontSize: '24px', fontWeight: 600, lineHeight: '32px', letterSpacing: '0px', textAlign: 'left', color: '#000000', }}>Uploads</h1>
            </div>
            <table 
              className="mt-8"
              style={{
                width: '1065px',
                height: '419px',
                top: '767px',
                left: '302px',
                borderRadius: '8px',
                gap: '16px',
                background: '#F5F5F5',
              }}
            >
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>Links</th>
                  <th>Prefix</th>
                  <th>Add Tags</th>
                  <th>Selected Tags</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr key={index}>
                    <td style={{ textAlign: 'center' }}>{index + 1}</td>
                    <td style={{ textAlign: 'center' }}><a href="http://www.google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>www.google.com</a></td>
                    <td style={{ textAlign: 'center' }}>prefixsample</td>
                    <td style={{ textAlign: 'center' }}>
                      <select onChange={(event) => handleTagSelect(index, event)}>
                        <option value="">Select Tags</option>
                        {[...Array(10)].map((_, optionIndex) => (
                          <option key={optionIndex} value={`TAG ${optionIndex + 1}`}>TAG {optionIndex + 1}</option>
                        ))}
                      </select>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {selectedTags[index].split(', ').map((tag, tagIndex) => (
                          <div key={tagIndex} style={{ backgroundColor: '#605BFF', padding: '3px 8px', borderRadius: '8px', marginRight: '5px', marginBottom: '5px', position: 'relative', display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '5px' }}>{tag}</span>
                            <img 
                              src={crossIcon} 
                              alt="cross" 
                              style={{ cursor: 'pointer' }}
                              onClick={() => removeTag(index, tagIndex)}
                            />
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
</div>

  )
}

export default Uploaded;















