import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PdfViewer(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const { url } = props;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Document
      file={url}
      onLoadSuccess={onDocumentLoadSuccess}
      onItemClick={({ pageNumber }) => setPageNumber(pageNumber)}
    >
      {
        Array.from(
          new Array(numPages),
          (el, index) => (
            <Page
              width={windowSize * 0.7}
              key={`page_${index + 1}`}
              pageNumber={index + 1}
            />
          ),
        )
      }
    </Document>
  );
}
