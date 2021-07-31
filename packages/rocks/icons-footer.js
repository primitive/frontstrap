// Generic, reusable component for displaying icon and label
export const LabeledIcon = ({ icon: Icon, label }) => (
  <Icon title={label} alt={label} />
);
export const FrontityLogo = () => (
  <svg
      className="svg-icon"
      aria-hidden="true"
      role="img"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140.63 28.96"
    >

  <path 
    fill="#d4aea6"
    fillRule="evenodd"
    d="M44.47,2.65V6.33H36.62v4.19h6.06V14H36.62v7.74H32V2.65Zm7.11,6.87a6.58,6.58,0,0,1,2.23-2.19,5.65,5.65,0,0,1,3-.81v5H55.45a4.56,4.56,0,0,0-2.85.78,3.14,3.14,0,0,0-1,2.65v6.87H47V6.68h4.62Zm14.31-3a8.51,8.51,0,0,1,4,.93,6.86,6.86,0,0,1,2.78,2.69,8.06,8.06,0,0,1,1,4.11,8,8,0,0,1-1,4.11A6.73,6.73,0,0,1,69.91,21a8.4,8.4,0,0,1-4,.94,8.5,8.5,0,0,1-4-.94,6.84,6.84,0,0,1-2.8-2.69,8.13,8.13,0,0,1-1-4.11,8.16,8.16,0,0,1,1-4.11,6.91,6.91,0,0,1,2.8-2.69,8.61,8.61,0,0,1,4-.93Zm0,4a2.94,2.94,0,0,0-2.23,1,3.91,3.91,0,0,0-.9,2.77,3.85,3.85,0,0,0,.9,2.76,3,3,0,0,0,2.23.95A2.93,2.93,0,0,0,68.11,17,3.85,3.85,0,0,0,69,14.22a3.91,3.91,0,0,0-.89-2.77,2.91,2.91,0,0,0-2.22-1Zm19.91-4a5.18,5.18,0,0,1,4.12,1.73A6.93,6.93,0,0,1,91.45,13v8.76H86.83V13.55a3.35,3.35,0,0,0-.8-2.37,2.76,2.76,0,0,0-2.12-.85,2.9,2.9,0,0,0-2.23.89,3.61,3.61,0,0,0-.83,2.54v8H76.23V6.68h4.62V9.44A5,5,0,0,1,82.79,7.3a5.67,5.67,0,0,1,3-.78Zm17.37,11.27v4h-2.09A6,6,0,0,1,97,20.46c-1-.88-1.47-2.32-1.47-4.34V10.57h-2V6.68h2V3h4.62V6.68h3v3.89h-3V16.2a1.7,1.7,0,0,0,.36,1.24,1.75,1.75,0,0,0,1.24.35Zm2.27-15.36A2.24,2.24,0,0,1,106.2.69a3.24,3.24,0,0,1,4,0A2.24,2.24,0,0,1,111,2.43a2.21,2.21,0,0,1-.76,1.72,3.24,3.24,0,0,1-4,0A2.25,2.25,0,0,1,105.44,2.43Zm5.06,4.25V21.77h-4.63V6.68Zm11.85,11.11v4h-2.09a6,6,0,0,1-4.12-1.31c-1-.88-1.47-2.32-1.47-4.34V10.57h-2V6.68h2V3h4.62V6.68h3v3.89h-3V16.2a1.66,1.66,0,0,0,.37,1.24,1.71,1.71,0,0,0,1.23.35Zm6.19-11.11,3.63,9.25,3.38-9.25h5.11L131.25,29h-5.09l3.55-7.76L123.38,6.68ZM3.76,5l9.29,9.28L9.82,17.49.54,8.21Z" 
    transform="translate(-0.03 0)"
    />

  <path
    fill="#d4aea6"
    fillRule="evenodd"
    d="M12.54,14.8,3.26,24.08,0,20.85l9.28-9.28Z" 
    transform="translate(-0.03 0)"
    />
  <path
    fill="#d4aea6"
    fillRule="evenodd"
    d="M14.37,5l9.28,9.28-3.22,3.23L11.14,8.21Z"
    transform="translate(-0.03 0)"
    />
  <path 
    fill="#d4aea6"
    fillRule="evenodd"
    d="M23.15,14.8l-9.29,9.28-3.22-3.23,9.28-9.28Z"
    transform="translate(-0.03 0)"
    />
  </svg>
);

export const HeartIt = () => (
  <svg
    className="svg-icon loveit"
    aria-hidden="true"
    role="img"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    width="332"
    height="140"
    viewBox="0 0 171.94 150.18">

      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            fill="#d4aea6"
            d="M122.52,43.49a16.36,16.36,0,0,1,1.39-1.13c1.39-.92,2.88-1.7,4.21-2.7,3.84-2.87,7.57-5.87,11.44-8.69a6.44,6.44,0,0,1,3.3-1.13c5.1-.24,10.22-.32,15.33-.47a7.21,7.21,0,0,0,1.19-.25c-5-1.59-10.11-.69-15.3-1,.53-1.3,1.48-1.1,2.3-1.11,4.79,0,9.58,0,14.37-.07.91,0,1.82-.15,2.74-.24v-.55C158.2,24.56,152.67,25.8,147,25c.47-.47.69-.88,1-.95a12.53,12.53,0,0,1,3-.44c4.23.12,8.46.35,12.69.51a2.68,2.68,0,0,0,2.76-1.21c-2.79-.29-5.29-.46-7.77-.84s-5,.37-7.53-.77c1.65-1.81,1.75-1.82,3.62-1.52,1.18.18,2.37.32,3.57.4,2.86.21,5.73.4,8.6.53.72,0,1.61.4,2.41-.83-4.44-1.81-9.2-.81-13.57-2,1.06-2.71,2.18-2.38,4.2-2.24,3.19.21,6.37.52,9.56.75.79.06,1.6,0,2.4,0v-.6c-1.92-.72-4-.63-6-.82s-4.18-.21-6.44-.31c.42-.83,1-1.53.86-1.75-1.14-1.67,0-3,.49-4.46.78-2.18,1.61-4.34,2.36-6.54A7,7,0,0,0,163.34.2l-.61-.2a20.52,20.52,0,0,0-1.32,2.38c-1.28,3.18-2.59,6.36-3.72,9.6a7.77,7.77,0,0,1-4.89,4.83c1.43-5.21,4.41-9.55,5.06-14.72a7.55,7.55,0,0,0-2.28,3.21c-1.26,3.54-2.51,7.07-3.82,10.6a12.39,12.39,0,0,1-1.29,2.54c-.23.36-.79.49-1.6,1,1.09-5.48,4.24-9.86,4.4-15.48a7.15,7.15,0,0,0-.53.93c-1.7,4.48-3.45,8.94-5.06,13.46-.53,1.5-1.62,2.48-2.73,4.21A7.24,7.24,0,0,1,145,21c1.54-4.52,3.12-9,4.67-13.56.24-.7.72-1.47-.3-2.4-2.78,6.71-4.6,13.63-8,19.89a3.39,3.39,0,0,1,.11-1.8c.92-2.55,1.89-5.07,2.83-7.62a10.44,10.44,0,0,0-.09-5.47,4.42,4.42,0,0,0-.56.78,65.87,65.87,0,0,0-2.75,6.64c-.73,2.34-2,4.51-2.08,7.09a4.08,4.08,0,0,1-2.67,3.92,7.29,7.29,0,0,0-1.43.87q-7.6,4.95-15.21,9.92c-.12.08-.3.06-.66.11a11.36,11.36,0,0,1-2-1.84A23.39,23.39,0,0,0,109.65,31c-2.08-1.3-4.12-2.65-6.24-3.87a24.72,24.72,0,0,0-3.7-1.69c-1.94-.7-3.93-1.81-5.89-1.8-4.36,0-8.85.05-12.83,2.29a81.68,81.68,0,0,0-9.54,5.92c-1.91,1.47-3.23,3.71-4.76,5.64-1.32,1.67-2.57,3.39-3.84,5.08l-7.47-3.8c-3-1.56-6.07-3.17-9.15-4.67a19.48,19.48,0,0,0-7.48-2.28,59.6,59.6,0,0,0-11.41.07c-3.19.41-6.26.94-9,2.53-2.39,1.39-4.54,3.19-6.8,4.81a30.45,30.45,0,0,1-3.14,2.19c-1.27.69-1,1.93-1.39,2.94-1.32,3.23-2.82,6.4-4.24,9.6a20.15,20.15,0,0,0-.8,2,13.64,13.64,0,0,0-.75,2.69Q.66,63.47.27,68.36C.14,70-.22,71.75.2,73.26c1,3.35,1.54,6.78,2.61,10.11a24.66,24.66,0,0,0,3.39,7c2.31,3.16,4.74,6.23,7.15,9.32A42.47,42.47,0,0,0,24.61,110c1.82,1.12,3.5,2.45,5.46,3.83l-14.4,14.76c-1-3-.13-5.65,0-8.65-.73.37-1.34.48-1.59.85a23.78,23.78,0,0,0-2.57,4.29c-1.65,4.16-3.09,8.39-4.64,12.59a56.67,56.67,0,0,0-1.51,6.18,21.56,21.56,0,0,0,2.64-.9c1.64-.82,3.25-1.71,4.85-2.59,4.12-2.28,8.23-4.55,12.32-6.87a8.47,8.47,0,0,0,1.41-1.38c-3-.81-5.88,1.23-8.59-1a23.78,23.78,0,0,1,1.91-2.2c1.84-1.64,3.72-3.25,5.63-4.81,2.54-2.07,5.19-4,7.67-6.14a2.75,2.75,0,0,1,3.49-.29c2.33,1.23,4.71,2.37,7,3.61,2.68,1.42,5.38,2.8,7.95,4.38,2,1.25,3.78,3,5.86,4.16a39.73,39.73,0,0,1,10.61,8.42c2.75,3.12,4.86,6.51,5.2,10.79a4.36,4.36,0,0,0,.53,1.19c1.49-1,1.45-2.44,1.78-3.72a18.31,18.31,0,0,1,.26-1.87c1.31-3.65,3-7.07,6.25-9.43,1.55-1.13,3-2.35,4.66-3.37,6.15-3.85,12.35-7.65,18.19-12a50.9,50.9,0,0,0,11.28-10.89c1.2-1.68,2.76-3.14,3.79-4.91a65,65,0,0,0,6.32-13.38c1-3.28,2.33-6.47,2.59-9.94.12-1.59.11-3.2.32-4.78a40,40,0,0,0-.18-12.11c-.73-4.26-1.4-8.41-3.53-12.28C124.29,49.17,123.64,46.49,122.52,43.49Z"
          />
          <path
            fill="#d4aea6"
            d="M122.52,43.49c29.41,75.68-44.71,77.59-48.67,106.69C67,130.44,34.68,104.38,18,131.07c2.71,2.24,5.62.2,8.59,1A100.78,100.78,0,0,1,5.34,143.82c2.57-7.09,2.89-17.42,10.31-23.91-.11,3-1,5.67,0,8.65l14.4-14.76C-8.21,95.47-14.23,25.91,41.4,32.18c39.07,20,9.68,2.11,47.17-8.43,21.43-5.15,33.67,41,55.59-13.7,1.7,5-2,8.1-2.85,14.89,3.42-6.26,5.24-13.18,8-19.89,1.51,4.81-4.14,10.62-4.38,17.47,3.67-4.43,5-11.86,8.32-18.6-.16,5.62-3.31,10-4.4,15.48,5-2.8,3.78-12,9-17.31-.65,5.17-3.63,9.51-5.06,14.72C159.61,14.6,158,4.79,163.34.2c-1,4.44-2.47,8.18-3.85,14.42,1.79.83,4-1.43,12.45,1.73-3.66,1.43-12.25-3.78-16.16,1.54,4.37,1.2,9.13.2,13.57,2-4.12,3.38-12.81-3-18.2,1.42,4.14,1.15,8.73.65,15.3,1.61C161.9,26.81,153.55,20.74,147,25c30,2.05,11.35.47-2.9,3.09,5.19.32,10.3-.58,15.3,1C138,29,139.51,31.37,122.52,43.49ZM63,50.09C16.19,7-28.53,84.15,47.36,117.44c7.81,7.33,19.81,13.52,26.47,25,9-21,55.36-21.29,49.68-76.58l1.26.47c-7.21-27.62-9.14-17.52-28.51-3.3-13.5,3,8-12.82,17.45-20.14C99.15,26.56,73.47,28.64,63,50.09ZM18.32,36.72c-.65-.42-.15-.44-1.69.6C17.24,37.66,16.69,37.54,18.32,36.72ZM13.9,39.47l.24.31c-.1-.25,1-.12.77-1.16Z"/>
            
            <path
              fill="#87635c"
              d="M63,50.09a35.11,35.11,0,0,1,7.36-9.74,32.22,32.22,0,0,1,21.26-9,15.28,15.28,0,0,1,10.08,3.22,3,3,0,0,0,2.58.93c.48-.1,1.2.39,1.66.79,1.53,1.37,3,2.84,4.48,4.23a11.92,11.92,0,0,0,1.35.93l2,1.42c-.82.73-1.39,1.34-2.06,1.83-2.2,1.59-4.53,3-6.62,4.74-3.21,2.63-6.3,5.41-9.39,8.19-1.52,1.36-2.94,2.85-4.35,4.23,1.41,2.4,2.89,2.72,5,1.15,2.35-1.78,4.61-3.69,6.94-5.5,3.78-2.94,7.56-5.89,11.4-8.76a10.7,10.7,0,0,1,2.63-1,31,31,0,0,1,2.06,3.5q2.65,6.13,5.12,12.35a11.83,11.83,0,0,1,.36,2.68l-1.26-.47a23.76,23.76,0,0,1,.41,2.63c.09,2,.1,4,.14,5.94a26.72,26.72,0,0,1,0,3.1A61.47,61.47,0,0,1,123,85.79a76.1,76.1,0,0,1-3.76,12.1,49.52,49.52,0,0,1-10.73,15.45c-.62.62-1.26,1.23-1.84,1.89a26.72,26.72,0,0,1-7.14,5.57c-2,1.08-3.74,2.43-5.63,3.63-2.15,1.36-4.28,2.78-6.52,4a30.9,30.9,0,0,0-8.06,6.3c-1.46,1.57-2.87,3.19-4.18,4.88a14.51,14.51,0,0,0-1.31,2.82l-3.55-5.21a7.63,7.63,0,0,0-1.11-1.55c-3.63-3.23-7.46-6.27-10.88-9.71-2-2-4.5-3.2-6.74-4.82-1.2-.87-2.63-1.51-3.24-3a1.51,1.51,0,0,0-1-.64,18.13,18.13,0,0,1-7.46-3.76,6.86,6.86,0,0,0-1.58-1,45.36,45.36,0,0,1-12.86-9c-3.55-3.67-7.3-7.14-10.69-11a48.29,48.29,0,0,1-4.57-7c-2.09-3.39-3-7.18-3.65-11.06C5.72,69.76,5.39,65,7.67,60.37a21.9,21.9,0,0,0,1.39-4.56,7.46,7.46,0,0,1,2.14-4.18,3.92,3.92,0,0,0,.88-1.41,15.17,15.17,0,0,1,5.55-6.43C18.88,42.93,20,41.93,21.2,41a8.84,8.84,0,0,1,4.74-2.15c4.2-.46,8.33-1.6,12.61-1.26a21.57,21.57,0,0,1,3.79.44c5.58,1.55,10.93,3.57,15.28,7.62C59.3,47.17,61.12,48.57,63,50.09Zm44-12.09-.16.23.67.52.12-.14Z"/>
            <path fill="#d4aea6"
             d="M18.32,36.72l-1.51.86-.18-.26,1.38-1Z"
            />
            <path fill="#d4aea6"
              d="M13.9,39.47l1-.85.24.3-1,.86Z"
            />
            <path
              fill="#d4aea6"
              d="M106.92,38l.63.61-.12.14-.67-.52Z"
            />
          </g>
        </g>
  </svg>
);

export const WordPress = () => (
  <svg 
  className="svg-icon"
  aria-hidden="true"
  role="img"
  focusable="false"
  xmlns="http://www.w3.org/2000/svg"
  width="80"
  height="80"
  viewBox="0 0 90 89.94">

    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          fill="#d4aea6"
          d="M89.34,38.47A43.77,43.77,0,0,0,76.46,13,44.42,44.42,0,0,0,50.81.42C49.61.24,48.48.12,47.28,0H42.6c-1.43.18-2.81.3-4.25.54A44.23,44.23,0,0,0,8.75,18.4,44.72,44.72,0,0,0,.42,39C.24,40.21.12,41.4,0,42.66v4.68c.18,1.38.3,2.81.54,4.19a43.69,43.69,0,0,0,17,29,42.73,42.73,0,0,0,22.35,9l2.93.36h4.32c1.44-.18,2.93-.3,4.37-.54A44.2,44.2,0,0,0,81.25,71.48a43.63,43.63,0,0,0,8.57-23.42l.18-.9V42.84C89.7,41.34,89.58,39.91,89.34,38.47ZM28.28,79.69C8.87,70.53,1.32,47.28,9.77,29.18ZM21.51,28.1c-.42-1.26-.36-1.38.9-1.38h3.42c.59,0,.83-.24.83-.83-.06-2.7.36-2.34-2.33-2.28-3.84.12-7.73.24-11.87.3,6-8.81,13.9-14.5,24.09-16.66,12.82-2.7,24.21.48,34.34,9.11-.72.12-1.2.12-1.68.24-3.72.78-5.69,4-5.1,8a17.2,17.2,0,0,0,2.46,6.11A29,29,0,0,1,70.11,38a20.27,20.27,0,0,1-.18,11.32C68.07,55.55,66,61.78,63.87,68c-.06-.24-.17-.42-.23-.66-4.44-13-8.87-26.06-13.25-39.07-.48-1.38-.36-1.5,1.08-1.56h3.06c.54,0,.78-.18.78-.71-.06-2.76.48-2.4-2.4-2.4-6.11.06-12.28,0-18.4,0-2.39,0-2-.24-2.09,1.92,0,1.25,0,1.25,1.26,1.25h3.11a1.21,1.21,0,0,1,1.26.9c1.8,5,3.65,10,5.45,15a2,2,0,0,1,0,.84c-2.69,8.21-5.45,16.48-8.15,24.69-.06.12-.12.3-.18.42C34,65.19,33,62,31.82,58.72Zm50,28.22c1.86-5.39,3.78-10.78,5.52-16.23a39.89,39.89,0,0,0,2-13c3.48,3.3,5.58,17.2,3.84,25.47-2.46,11.5-8.87,20.13-18.94,26.07l-.17-.18C66.27,71.13,68.91,63.75,71.48,56.32ZM33.74,81.91l11.86-34L57.82,81.31h0A38.51,38.51,0,0,1,33.74,81.91Z"
        />
      </g>
    </g>
  </svg>
  );

  export const PrimitiveLogo = () => (

    <svg
    className="svg-icon"
    aria-hidden="true"
    role="img"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    width="332"
    height="85"
    viewBox="0 0 170.8 44.1">


<path
  fill="#D4AEA6"
  d="M11,10.7c0-0.4,0-0.9-0.2-1.3c-0.1-0.2-0.1-0.5-0.1-0.7c0-0.3,0.2-0.6,0.5-0.7c0.3-0.2,0.7-0.3,1.1-0.3
	c0.9,0,1.8,0.2,2.4,0.8c0.6,0.5,0.9,1.2,0.9,1.9v19.8c0.8-0.1,1.6-0.3,2.3-0.6c0.9-0.3,1.8-0.8,2.7-1.3c1-0.6,1.9-1.3,2.7-2.1
	c0.9-0.9,1.7-1.8,2.4-2.9c1.6-2.5,2.3-5.4,2.3-8.4c0-1.2-0.2-2.4-0.5-3.5c-0.4-1.2-1-2.3-1.8-3.3C25,7,24,6.1,22.8,5.5
	c-1.4-0.7-3-1-4.5-1C16.1,4.5,14,4.9,12,5.6c-1.6,0.7-3.1,1.7-4.2,3C6.7,9.9,5.9,11.4,5.4,13c-0.5,1.7-0.8,3.5-0.8,5.3
	c0,1.1,0.1,2.3,0.3,3.4c0.2,0.8,0.4,1.5,0.8,2.3c0.2,0.5,0.5,0.9,0.8,1.3l0.4,0.5c0.3-0.1,0.6-0.1,0.7,0.1c0.2,0.2,0.2,0.5,0.2,0.7
	c0,0.4-0.1,0.8-0.3,1.2c-0.2,0.6-0.4,1.1-0.8,1.6c-0.3,0.4-0.7,0.8-1.1,1.1c-0.4,0.2-0.9,0.2-1.3-0.1c-0.2-0.2-0.6-0.6-1.1-1.2
	c-0.6-0.7-1.1-1.5-1.4-2.3c-0.6-1.1-1-2.3-1.3-3.4C0.2,21.9,0,20.3,0,18.7c0-2.6,0.4-5.2,1.3-7.7c0.8-2.2,2.1-4.2,3.7-5.9
	c1.6-1.7,3.6-3,5.8-3.8C13.2,0.4,15.7,0,18.3,0c2.1,0,4.1,0.3,6,1.1c1.7,0.7,3.3,1.7,4.6,3.1c1.3,1.3,2.3,2.9,2.9,4.7
	c0.7,1.9,1,3.9,1,5.9c0,2.5-0.5,5-1.4,7.3c-0.9,2.2-2.2,4.2-3.8,6c-3.1,3.4-7.3,5.8-11.9,6.7v8c0,0.4-0.2,0.8-0.5,1.1
	c-0.4,0.2-0.8,0.3-1.2,0.3c-0.4,0-0.7-0.1-1.1-0.2c-0.3-0.1-0.7-0.2-1-0.4c-0.3-0.1-0.5-0.3-0.7-0.6c-0.2-0.2-0.3-0.4-0.3-0.7
	L11,10.7z M48.9,44.1c-0.7,0-1.5-0.1-2.2-0.3c-0.7-0.2-1.4-0.6-2-1.1c-0.6-0.6-1.1-1.3-1.5-2.1c-0.4-1.1-0.6-2.2-0.6-3.3
	c0-2.1,0.3-4.2,0.8-6.2c0.6-2.4,1.4-4.8,2.3-7.2h-5.3c0,0.6-0.1,1.3-0.1,2.2s-0.1,1.9-0.3,2.9S39.8,31,39.6,32c-0.2,1-0.4,2-0.7,2.9
	c-0.2,0.6-0.5,1-0.9,1.1c-0.4,0.1-0.9,0-1.3-0.2c-0.4-0.3-0.8-0.6-1-1.1c-0.3-0.4-0.3-1-0.2-1.5c0.2-0.7,0.3-1.5,0.4-2.2
	c0.1-0.9,0.2-1.8,0.3-2.8s0.1-2,0.2-2.9s0.1-1.8,0.1-2.6c-0.7-0.4-1.4-0.9-1.9-1.6c-0.5-0.7-0.8-1.5-0.7-2.3c0-0.4,0.1-0.8,0.3-1.1
	c0.3-0.7,0.9-1.2,1.6-1.4c0.4-0.1,0.8-0.2,1.1-0.2c0.4,0,0.7,0.1,1.1,0.1c0.4,0.1,0.8,0.3,1.1,0.5c0.4,0.3,0.7,0.6,0.9,1
	c0.3,0.5,0.5,1,0.7,1.5l1.3,0.1l0.9,0.1h0.6h3.6c0.3,0,0.6,0.2,0.8,0.3c0.8,0.5,1.4,1.2,1.9,1.9c0.2,0.4,0.2,0.8,0.2,1.1
	c0,0.3-0.1,0.6-0.2,0.9l-0.5,1.7c-0.2,0.7-0.4,1.5-0.6,2.4s-0.4,1.8-0.6,2.8s-0.4,2-0.5,3.1c-0.1,1-0.2,2.1-0.2,3.1
	c0,0.4,0,0.8,0.1,1.2c0.1,0.4,0.2,0.7,0.4,1.1c0.2,0.3,0.5,0.6,0.8,0.7c0.3,0.2,0.7,0.3,1.1,0.3c0.7,0,1.3-0.2,1.8-0.7
	c0.5-0.5,0.9-1,1.2-1.6c0.3-0.7,0.6-1.4,0.8-2.1c0.2-0.8,0.4-1.5,0.5-2.1c0.1-0.5,0.3-1,0.6-1.4c0.2-0.3,0.5-0.4,0.9-0.4
	c0.3,0,0.5,0.1,0.7,0.2c0.3,0.2,0.5,0.4,0.7,0.6c0.2,0.2,0.4,0.5,0.5,0.8c0.1,0.3,0.2,0.6,0.2,0.9c0,0.1,0,0.2,0,0.2
	c0,0.1,0,0.1,0,0.2c-0.3,1.1-0.7,2.1-1.1,3.2c-0.4,1.1-1,2.1-1.7,3c-0.7,0.9-1.5,1.7-2.5,2.3C51.2,43.7,50.1,44.1,48.9,44.1z
	 M57.5,13.3c-0.5,0-1-0.1-1.4-0.3c-0.4-0.2-0.8-0.5-1.1-0.8c-0.3-0.3-0.6-0.7-0.8-1.2c-0.2-0.5-0.3-0.9-0.3-1.4c0-0.5,0.1-1,0.3-1.5
	c0.2-0.4,0.4-0.8,0.8-1.2c0.3-0.3,0.7-0.6,1.1-0.8C56.5,6,57,5.9,57.5,5.9c0.5,0,1,0.1,1.5,0.3c0.4,0.2,0.8,0.4,1.2,0.8
	c0.3,0.3,0.6,0.7,0.8,1.2c0.2,0.5,0.3,1,0.3,1.5c0,0.5-0.1,1-0.3,1.4c-0.2,0.4-0.4,0.8-0.8,1.2c-0.3,0.3-0.7,0.6-1.2,0.8
	C58.5,13.2,57.9,13.3,57.5,13.3L57.5,13.3z M58.9,37.3c0,0.1,0,0.4,0,0.7c0,0.3,0.1,0.6,0.2,0.9c0.1,0.3,0.3,0.6,0.5,0.8
	c0.2,0.2,0.6,0.4,0.9,0.3c0.6,0,1.1-0.2,1.6-0.7c0.5-0.5,0.9-1,1.2-1.6c0.3-0.7,0.6-1.4,0.8-2.1c0.2-0.8,0.4-1.5,0.5-2.1
	c0.1-0.5,0.3-0.9,0.6-1.3c0.2-0.3,0.5-0.4,0.8-0.5c0.3,0,0.6,0.1,0.9,0.2c0.3,0.2,0.6,0.4,0.8,0.7c0.2,0.3,0.4,0.6,0.5,1
	c0.1,0.3,0.1,0.7,0,1c-0.3,1.1-0.7,2.1-1.1,3.2c-0.4,1.1-1,2.1-1.7,3c-0.7,0.9-1.5,1.7-2.5,2.3c-1,0.6-2.2,1-3.4,0.9
	c-0.7,0-1.5-0.1-2.2-0.5c-0.6-0.3-1.2-0.7-1.6-1.2c-0.5-0.5-0.8-1.1-1-1.8c-0.2-0.7-0.3-1.4-0.3-2.2V22.2c0-0.4,0-0.8-0.1-1.2
	c-0.1-0.2-0.1-0.5-0.1-0.7c0-0.3,0.2-0.6,0.5-0.7c0.3-0.2,0.7-0.3,1.1-0.3c0.9,0,1.7,0.2,2.4,0.8c0.6,0.5,0.9,1.2,0.9,1.9L58.9,37.3
	z M100.9,34.6c-0.3,1.1-0.7,2.1-1.1,3.2c-0.4,1.1-1,2.1-1.7,3c-0.7,0.9-1.5,1.7-2.5,2.3c-1,0.6-2.2,1-3.4,0.9
	c-0.7,0-1.5-0.1-2.1-0.5c-0.6-0.3-1.2-0.7-1.6-1.2c-0.5-0.5-0.8-1.1-1-1.8c-0.2-0.7-0.3-1.4-0.3-2.2V26.1c0-0.5,0-0.9,0-1.3
	c0-0.4-0.1-0.7-0.1-1.1c-0.1-0.3-0.2-0.5-0.3-0.8c-0.1-0.2-0.4-0.3-0.6-0.3c-0.6,0.1-1.1,0.4-1.5,0.9c-0.7,0.7-1.2,1.5-1.7,2.3
	c-0.6,1-1.1,2.1-1.5,3.2c-0.4,1.2-0.7,2.4-0.8,3.6v8.8c0,0.3,0,0.6,0,0.9c0,0.3-0.1,0.6-0.2,0.8c-0.1,0.2-0.3,0.5-0.5,0.6
	c-0.3,0.2-0.6,0.3-1,0.3c-0.3,0-0.7,0-1-0.1c-0.3-0.1-0.7-0.2-0.9-0.4c-0.3-0.2-0.5-0.5-0.7-0.8c-0.2-0.4-0.4-0.9-0.4-1.4V26.1
	c0-0.5,0-0.9-0.1-1.3c0-0.4-0.1-0.7-0.2-1.1c-0.1-0.3-0.2-0.5-0.3-0.8c-0.1-0.2-0.4-0.3-0.6-0.3c-0.6,0.1-1.1,0.4-1.5,0.9
	c-0.7,0.7-1.2,1.5-1.7,2.3c-0.6,1-1.1,2.1-1.5,3.2c-0.4,1.2-0.7,2.4-0.8,3.6v8.8c0,0.3,0,0.6,0,0.9c0,0.3-0.1,0.6-0.2,0.8
	c-0.1,0.2-0.3,0.5-0.5,0.6c-0.3,0.2-0.6,0.3-1,0.3c-0.3,0-0.7,0-1-0.1c-0.3-0.1-0.7-0.2-0.9-0.4c-0.3-0.2-0.5-0.5-0.7-0.8
	c-0.2-0.4-0.3-0.9-0.3-1.4V22.2c0-0.4,0-0.8-0.1-1.2c-0.1-0.2-0.1-0.5-0.1-0.7c0-0.3,0.2-0.6,0.5-0.7c0.3-0.2,0.7-0.3,1.1-0.3
	c0.9,0,1.7,0.2,2.4,0.8c0.6,0.5,0.9,1.2,0.9,1.9v2.5c0.4-0.8,0.8-1.6,1.3-2.3c0.4-0.7,0.9-1.3,1.5-1.8c0.5-0.5,1.1-0.9,1.7-1.2
	c0.6-0.3,1.3-0.4,1.9-0.4c0.8,0,1.6,0.1,2.3,0.5c0.6,0.3,1.1,0.8,1.4,1.3c0.4,0.6,0.6,1.2,0.8,1.8c0.2,0.7,0.3,1.3,0.3,2
	c0.4-0.8,0.8-1.5,1.2-2.3c0.4-0.7,0.9-1.3,1.5-1.8c0.5-0.5,1.1-0.9,1.7-1.2c0.6-0.3,1.3-0.4,1.9-0.4c0.8,0,1.7,0.2,2.4,0.6
	c0.6,0.3,1.1,0.8,1.5,1.4c0.4,0.6,0.6,1.3,0.7,2c0.1,0.7,0.2,1.4,0.2,2.1v12.5c0,0.1,0,0.4,0,0.7c0,0.3,0.1,0.6,0.2,0.9
	c0.1,0.3,0.3,0.6,0.5,0.8c0.2,0.2,0.6,0.4,0.9,0.3c0.6,0,1.3-0.2,1.7-0.7c0.5-0.5,0.9-1,1.1-1.6c0.3-0.7,0.6-1.4,0.8-2.1
	c0.2-0.8,0.4-1.5,0.5-2.1c0.1-0.5,0.3-1,0.6-1.4c0.2-0.3,0.5-0.4,0.9-0.4c0.3,0,0.5,0.1,0.7,0.2c0.3,0.2,0.5,0.3,0.7,0.6
	c0.2,0.2,0.4,0.5,0.5,0.8c0.1,0.3,0.2,0.6,0.2,0.9v0.2C100.9,34.5,100.8,34.6,100.9,34.6L100.9,34.6z M100.8,13.2
	c-0.5,0-1-0.1-1.4-0.3c-0.4-0.2-0.8-0.5-1.2-0.8c-0.3-0.3-0.6-0.7-0.8-1.2c-0.2-0.5-0.3-0.9-0.3-1.4c0-0.5,0.1-1,0.3-1.5
	c0.2-0.4,0.4-0.8,0.8-1.2c0.3-0.3,0.7-0.6,1.2-0.8c0.4-0.2,0.9-0.3,1.4-0.3c0.5,0,1,0.1,1.5,0.3c0.4,0.2,0.8,0.4,1.2,0.8
	c0.3,0.3,0.6,0.7,0.8,1.2c0.2,0.5,0.3,1,0.3,1.5c0,0.5-0.1,1-0.3,1.4c-0.2,0.4-0.4,0.8-0.8,1.2c-0.3,0.3-0.7,0.6-1.2,0.8
	C101.8,13.2,101.3,13.3,100.8,13.2L100.8,13.2z M102.2,37.2c0,0.1,0,0.4,0,0.7c0,0.3,0.1,0.6,0.2,0.9c0.1,0.3,0.3,0.6,0.5,0.8
	c0.2,0.2,0.6,0.4,0.9,0.3c0.6,0,1.2-0.2,1.6-0.7c0.5-0.5,0.9-1,1.1-1.6c0.3-0.7,0.6-1.4,0.8-2.1c0.2-0.8,0.4-1.5,0.5-2.1
	c0.1-0.5,0.3-0.9,0.6-1.3c0.2-0.3,0.5-0.4,0.8-0.5c0.3,0,0.6,0.1,0.9,0.2c0.3,0.2,0.5,0.4,0.8,0.7c0.2,0.3,0.4,0.6,0.5,1
	c0.1,0.3,0.1,0.7,0,1c-0.3,1.1-0.7,2.1-1.1,3.2c-0.4,1.1-1,2.1-1.7,3c-0.7,0.9-1.5,1.7-2.5,2.3c-1,0.6-2.2,1-3.4,0.9
	c-0.7,0-1.5-0.1-2.2-0.5c-0.6-0.3-1.1-0.7-1.6-1.2c-0.5-0.5-0.8-1.1-1-1.8c-0.2-0.7-0.3-1.4-0.3-2.2V22.2c0-0.4,0-0.8-0.1-1.2
	c-0.1-0.2-0.1-0.5-0.1-0.7c0-0.3,0.2-0.6,0.5-0.7c0.3-0.2,0.7-0.3,1.1-0.3c0.9,0,1.7,0.2,2.4,0.8c0.6,0.5,0.9,1.2,0.9,1.9
	L102.2,37.2z M102.6,13.9c0.5,0,1,0.1,1.5,0.1s1,0.1,1.7,0.1h2.3V3.9c0-0.3,0-0.7-0.1-1c-0.1-0.2-0.1-0.4-0.2-0.6
	c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.3-0.2,0.5-0.2c0.2-0.1,0.4-0.1,0.6-0.1
	c0.2,0,0.4,0,0.7,0c0.9,0,1.7,0.2,2.4,0.8c0.6,0.5,0.9,1.2,0.9,1.9v10.6c1.9,0,3.8,0,5.9,0s4.1-0.1,6.2-0.2c0.3-0.3,0.5-0.4,0.7-0.3
	c0.2,0.1,0.3,0.3,0.3,0.6c0,0.4,0,0.7,0,1.1c0,0.4-0.1,0.8-0.2,1.2c-0.1,0.4-0.3,0.7-0.5,1.1c-0.1,0.3-0.4,0.4-0.7,0.4
	c-2.4,0.1-4.6,0.1-6.4,0.1h-5.2v19.1c-0.1,0.8,0.1,1.5,0.6,2.1c0.4,0.4,0.9,0.7,1.5,0.7c0.6,0,1.2-0.2,1.6-0.7
	c0.5-0.5,0.9-1,1.1-1.6c0.3-0.7,0.6-1.4,0.8-2.1c0.2-0.8,0.4-1.5,0.5-2.1c0.1-0.5,0.3-1,0.6-1.4c0.2-0.3,0.5-0.4,0.9-0.4
	c0.3,0,0.5,0.1,0.7,0.2c0.3,0.2,0.5,0.3,0.7,0.6c0.2,0.2,0.4,0.5,0.5,0.8c0.1,0.3,0.2,0.6,0.2,0.9v0.2c0,0.1,0,0.2-0.1,0.3
	c-0.3,1.1-0.6,2.1-1,3.2c-0.4,1.1-1,2.1-1.7,3c-0.7,0.9-1.5,1.7-2.5,2.3c-1,0.6-2.2,1-3.4,0.9c-0.8,0-1.5-0.1-2.2-0.4
	c-0.7-0.2-1.3-0.6-1.8-1.2c-0.5-0.6-0.9-1.3-1.2-2.1c-0.3-1-0.4-2-0.4-3.1V18.1h-1.8H105l-1.1-0.1c-0.5,0-1-0.2-1.3-0.6
	c-0.4-0.4-0.6-0.9-0.8-1.4c-0.1-0.5-0.2-0.9-0.1-1.4C101.9,14.2,102.2,13.9,102.6,13.9L102.6,13.9z M122.2,13.2
	c-0.5,0-1-0.1-1.4-0.3c-0.4-0.2-0.8-0.5-1.1-0.8c-0.3-0.3-0.6-0.7-0.8-1.2c-0.2-0.5-0.3-0.9-0.3-1.4c0-0.5,0.1-1,0.3-1.5
	c0.2-0.4,0.4-0.8,0.8-1.2c0.7-0.7,1.6-1,2.6-1c0.5,0,1,0.1,1.5,0.3c0.4,0.2,0.8,0.4,1.2,0.8c0.3,0.3,0.6,0.7,0.8,1.2
	c0.2,0.5,0.3,1,0.3,1.5c0,0.5-0.1,1-0.3,1.4c-0.2,0.4-0.4,0.8-0.8,1.2c-0.3,0.3-0.7,0.6-1.2,0.8C123.2,13.2,122.7,13.3,122.2,13.2
	L122.2,13.2z M123.6,37.2c0,0.1,0,0.4,0,0.7c0,0.3,0.1,0.6,0.2,0.9c0.1,0.3,0.3,0.6,0.5,0.8c0.2,0.2,0.6,0.4,0.9,0.3
	c0.6,0,1.1-0.2,1.6-0.7c0.5-0.5,0.8-1,1.1-1.6c0.3-0.7,0.6-1.4,0.8-2.1c0.2-0.8,0.4-1.5,0.5-2.1c0.1-0.5,0.3-0.9,0.6-1.3
	c0.2-0.2,0.5-0.4,0.8-0.5c0.3,0,0.6,0.1,0.9,0.2c0.3,0.2,0.6,0.4,0.8,0.7c0.2,0.3,0.4,0.6,0.5,1c0.1,0.3,0.1,0.7,0,1
	c-0.3,1.1-0.7,2.1-1.1,3.2c-0.4,1.1-1,2.1-1.7,3c-0.7,0.9-1.5,1.7-2.5,2.3c-1,0.6-2.2,1-3.4,0.9c-1.4,0-2.8-0.6-3.8-1.7
	c-0.4-0.5-0.8-1.1-1-1.8c-0.2-0.7-0.3-1.4-0.3-2.2V22.2c0-0.4,0-0.8-0.1-1.2c-0.1-0.2-0.1-0.5-0.1-0.7c0-0.3,0.2-0.6,0.5-0.7
	c0.3-0.2,0.7-0.3,1.1-0.3c0.9,0,1.7,0.2,2.4,0.8c0.6,0.5,0.9,1.2,0.9,1.9L123.6,37.2z M129.5,22.2c0-0.4,0-0.8-0.1-1.2
	c-0.1-0.2-0.1-0.5-0.1-0.7c0-0.3,0.2-0.6,0.5-0.7c0.3-0.2,0.7-0.3,1.1-0.3c0.9,0,1.7,0.2,2.4,0.8c0.6,0.5,0.9,1.2,0.9,1.9v16.3
	c0,0.5,0.1,0.9,0.3,1.4c0.2,0.4,0.6,0.6,1.1,0.5c0.8,0,1.6-0.3,2.3-0.8c0.8-0.6,1.5-1.3,2-2.2c0.7-1.1,1.2-2.3,1.5-3.5
	c0.4-1.5,0.6-3.1,0.6-4.7c0-1-0.1-2-0.3-3c-0.1-0.7-0.4-1.4-0.7-2c-0.2-0.4-0.5-0.8-0.8-1.1l-0.7-0.6c-0.2-0.1-0.3-0.2-0.5-0.2
	c-0.2,0-0.3-0.1-0.3-0.3c0,0,0,0,0,0c0-0.3,0.1-0.6,0.2-0.9c0.1-0.4,0.3-0.7,0.6-1c0.2-0.3,0.5-0.6,0.8-0.8c0.3-0.2,0.6-0.3,0.9-0.3
	c0.7,0,1.4,0.4,1.9,0.9c0.7,0.7,1.3,1.5,1.7,2.4c0.6,1.1,1,2.2,1.3,3.3c0.3,1.2,0.5,2.5,0.5,3.8c0,2-0.3,3.9-0.8,5.8
	c-0.5,1.7-1.3,3.3-2.4,4.8c-1,1.3-2.2,2.4-3.7,3.2c-1.5,0.8-3.1,1.2-4.8,1.2c-0.8,0-1.7-0.1-2.4-0.5c-0.6-0.3-1.2-0.7-1.6-1.3
	c-0.4-0.6-0.7-1.2-0.9-1.9c-0.2-0.7-0.3-1.5-0.3-2.3L129.5,22.2z M163.1,24.7c0,1.2-0.2,2.3-0.6,3.5c-0.4,1.2-1,2.3-1.7,3.4
	c-0.8,1.1-1.7,2-2.8,2.8c-1.2,0.9-2.5,1.5-3.9,1.9c0.2,0.5,0.5,1,0.8,1.5c0.3,0.5,0.7,0.9,1.2,1.2c0.5,0.3,1,0.6,1.6,0.8
	c0.7,0.2,1.4,0.3,2.1,0.3c1,0,2.1-0.2,3-0.7c0.8-0.4,1.5-1,2.1-1.7c0.6-0.7,1.1-1.6,1.4-2.4c0.3-0.9,0.6-1.8,0.8-2.8
	c0.1-0.6,0.4-1.1,0.9-1.3c0.4-0.2,0.9-0.3,1.3-0.2c0.5,0.1,0.9,0.4,1.1,0.8c0.3,0.4,0.5,0.9,0.4,1.4c-0.1,0.7-0.2,1.4-0.4,2.1
	c-0.2,0.8-0.5,1.6-0.8,2.4c-0.4,0.8-0.9,1.6-1.4,2.4c-0.6,0.8-1.3,1.5-2.1,2.1c-0.9,0.6-1.9,1.1-3,1.5c-1.3,0.4-2.6,0.6-3.9,0.6
	c-2.8,0-5.5-1.1-7.4-3.2c-1-1.1-1.8-2.4-2.4-3.8c-0.6-1.6-0.9-3.3-0.9-5.1c0-1.8,0.3-3.6,0.8-5.3c0.5-1.5,1.2-3,2.1-4.3
	c0.8-1.1,1.8-2.1,3-2.8c1-0.6,2.2-1,3.4-1c0.8,0,1.6,0.1,2.3,0.4c0.7,0.3,1.3,0.7,1.7,1.3c0.5,0.6,0.8,1.2,1.1,1.9
	C162.9,23.1,163,23.9,163.1,24.7L163.1,24.7z M153.3,31.9c0,0.2,0,0.4,0,0.5c0,0.2,0,0.4,0,0.6c0.7-0.4,1.4-0.8,2-1.4
	c0.6-0.6,1.1-1.2,1.6-1.9c0.4-0.7,0.8-1.5,1-2.3c0.2-0.9,0.4-1.7,0.4-2.6c0-0.5-0.1-1.1-0.3-1.6c-0.2-0.4-0.5-0.6-0.9-0.6
	c-0.5,0-1,0.2-1.3,0.5c-0.4,0.4-0.8,0.8-1,1.3c-0.3,0.6-0.5,1.2-0.7,1.8c-0.2,0.7-0.3,1.4-0.5,2.1c-0.1,0.7-0.2,1.3-0.2,2
	C153.2,30.9,153.2,31.4,153.3,31.9L153.3,31.9z"
  />
</svg>

  );