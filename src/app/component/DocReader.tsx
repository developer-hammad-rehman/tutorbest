'use client'
import React, { useState } from "react";
import { RiLoader4Fill } from "react-icons/ri";
import PizZip from "pizzip";
import { DOMParser } from "@xmldom/xmldom";
import { useRouter } from "next/navigation";

function str2xml(str:any) {
  if (str.charCodeAt(0) === 65279) {
    // BOM sequence
    str = str.substr(1);
  }
  return new DOMParser().parseFromString(str, "text/xml");
}

// Get paragraphs as javascript array
function getParagraphs(content:any) {
  const zip = new PizZip(content);
  const xml = str2xml(zip.files["word/document.xml"].asText());
  const paragraphsXml = xml.getElementsByTagName("w:p");
  const paragraphs = [];

  for (let i = 0, len = paragraphsXml.length; i < len; i++) {
    let fullText = "";
    const textsXml = paragraphsXml[i].getElementsByTagName("w:t");
    for (let j = 0, len2 = textsXml.length; j < len2; j++) {
      const textXml = textsXml[j];
      if (textXml.childNodes) {
        fullText += textXml.childNodes[0].nodeValue;
      }
    }
    if (fullText) {
      paragraphs.push(fullText);
    }
  }
  return paragraphs;
}

const DocxReader = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [loading , setLoading] = useState(false)
 const {push}= useRouter()
  const onFileUpload = (event:any) => {
    const reader = new FileReader();
    let file = event.target.files[0];

    reader.onload = (e) => {
      const content = e.target?.result;
      const paragraphs = getParagraphs(content);
      // @ts-ignore
      setParagraphs(paragraphs);
    };

    reader.onerror = (err) => console.error(err);

    reader.readAsBinaryString(file);
  };

  return <div className="flex flex-col gap-3">
    <label htmlFor="files" className="cursor-pointer p-3 bg-gray-50 text-center">Browse File</label>
    <input type="file" onChange={onFileUpload} name="docx-reader" accept=".docx" id="files" className="hidden"/>
    <br />
    {paragraphs[0] ? <button className="bg-purple-200 p-3 flex gap-2" onClick={() =>{
      setLoading(true)
      setTimeout(() =>{
      push('/home')
      },1000)
    }}>{loading ? <RiLoader4Fill className="animate-spin text-xl"/> :null}Generate Guide</button> : null}
  </div>;
};

export default DocxReader;