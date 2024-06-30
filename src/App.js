import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const modules = {
    toolbar : [
      [{header : [1,2,3,4,5,6, false]}],
      [{font : []}],
      [{size : []}],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{list: "ordered"},{list: "bullet"},{indent: "-1"},{indent: "+1"}],
      [{ align: '' }, { align: 'center' }, { align: 'right' }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'direction': 'rtl' }],
      ["link", "image", "video"]
    ],
  }
  return (
    <div className='container'>
      <div className='editor'>
        <ReactQuill theme="snow" value={value} onChange={setValue} className='quill-editor-area' modules={modules}/>
      </div>
      <div className='preview' dangerouslySetInnerHTML={{__html:value}}/>
    </div>
  )
}

export default App;
