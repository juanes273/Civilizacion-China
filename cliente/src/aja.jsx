import React, { useState, useEffect } from 'react';

function HTMLViewer() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch('index.html');
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error('Error al cargar el archivo HTML:', error);
      }
    };

    fetchHtmlContent();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default HTMLViewer;
