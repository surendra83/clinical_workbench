// CsvDownloadButton.tsx
import React from 'react';
import {endpoint_apiurl} from '../services/apiService';
interface CsvDownloadButtonProps {
  documentId: string;
  apiUri:string;
}
const CsvDownloadButton: React.FC<CsvDownloadButtonProps> = ({ documentId,apiUri }) => {
  const API_ENVPOINT=endpoint_apiurl;
  const handleDownload = () => {
    const url = `${API_ENVPOINT}/${apiUri}?document_id=${documentId}`;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${documentId}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div  className='export-icon-csv' title='Download CSV' onClick={handleDownload}></div>
  );

};

export default CsvDownloadButton;