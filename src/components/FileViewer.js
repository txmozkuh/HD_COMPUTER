import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
// import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './FileViewer.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles((theme) => ({
  root: {
  },
  file: {
    height: 400,
    width: 300
  }
}));

function FileViewer(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const {
    url, isFirstPage, fileType, propsStyle
  } = props;
  const classes = useStyles();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onError = (e) => {
    console.error(e, 'error in file-viewer');
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={classes.root} style={propsStyle}>
      { (fileType === 'pdf')
        ? (
          <Document
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
            onItemClick={({ pageNumber }) => setPageNumber(pageNumber)}
          >
            { isFirstPage ? (
              <Page
                width={propsStyle.maxWidth}
                key="page_1"
                pageNumber={1}
              />
            ) : Array.from(
              new Array(numPages),
              (el, index) => (
                <Page
                  width={windowSize * 0.7}
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                />
              ),
            )}
          </Document>
        ) : (
          <div>DOC</div>
        )}
    </div>
  );
}

FileViewer.defaultProps = {
  fileType: 'pdf'
};

export default FileViewer;
