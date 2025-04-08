import React from 'react';

const TrophyGold = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-16 h-16 group relative"
        >
            <defs>
                <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="white" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="transparent" />
                </linearGradient>
                <mask id="shine-mask">
                    <rect
                        x="-100%"
                        y="-100%"
                        width="300%"
                        height="300%"
                        fill="url(#shine)"
                    >
                        <animate
                            attributeName="x"
                            from="-100%"
                            to="100%"
                            dur="1s"
                            begin="mouseover"
                            fill="freeze"
                        />
                    </rect>
                </mask>
            </defs>

            <path
                d="M310.06,127.79l-20.26-3.06a1.18,1.18,0,0,1-.77-.7L280,104.93a26.4,26.4,0,0,0-47.93,0L223,124a1.18,1.18,0,0,1-.76.71l-20.26,3.06a26.66,26.66,0,0,0-21.31,18.13,27.41,27.41,0,0,0,6.45,28l14.66,14.86a2,2,0,0,1,.46,1.66l-3.46,21a27.19,27.19,0,0,0,11.07,26.84,26.07,26.07,0,0,0,27.77,1.64L256.29,230l18.13,9.91a26,26,0,0,0,27.77-1.64,27.19,27.19,0,0,0,11.07-26.84l-3.46-21a2,2,0,0,1,.46-1.66L324.92,174a27.4,27.4,0,0,0,6.45-28A26.66,26.66,0,0,0,310.06,127.79ZM306.7,156,292,170.85a27.57,27.57,0,0,0-7.49,23.8l3.46,21a1.69,1.69,0,0,1-.62,1.79c-.34.25-.43.19-.67.06l-18.13-9.91a26.12,26.12,0,0,0-25.14,0l-18.12,9.91c-.25.14-.34.19-.68-.06a1.69,1.69,0,0,1-.62-1.79l3.46-21A27.57,27.57,0,0,0,220,170.85L205.31,156a1.85,1.85,0,0,1-.38-2c.27-.82.68-.88.84-.91L226,150a26.66,26.66,0,0,0,20.06-15l9.06-19.09c.63-1.3,1.06-1.3,1.68,0L265.9,135A26.66,26.66,0,0,0,286,150l20.27,3.06c.16,0,.57.09.84.91A1.85,1.85,0,0,1,306.7,156Zm192-76.67A44.75,44.75,0,0,0,465,64H422.15q.24-9.54.25-19.2v-.46C422.38,19.77,402.14,0,377.56,0H134.44C109.86,0,89.62,19.77,89.6,44.34v.46q0,9.66.25,19.2H47A44.9,44.9,0,0,0,2.58,115.06C15.52,210.33,76.17,289.51,158.3,329.77c17.19,26.41,36.85,46,58.12,57a99.25,99.25,0,0,1-2,10,102.4,102.4,0,0,1-57.22,67.78s-.09.09-.14.09l-.06,0a24.72,24.72,0,0,0,2,45.89,23.6,23.6,0,0,0,8.26,1.47H344.64a24.85,24.85,0,0,0,11.84-46.66c-.77-.38-1.54-.7-2.3-1.09A102.34,102.34,0,0,1,297.6,396.8a99.25,99.25,0,0,1-2-10c21.27-11,40.94-30.6,58.12-57,82.14-40.26,142.78-119.44,155.73-214.72A45.11,45.11,0,0,0,498.72,79.32ZM27.95,111.61a19.49,19.49,0,0,1,4.62-15.45A18.91,18.91,0,0,1,47,89.6H90.94c4.55,75.72,20.47,143.93,44,196.73C78.17,246.52,37.81,184.22,27.95,111.61ZM272.81,403.18a127.2,127.2,0,0,0,68.3,83.22H171.56l.58-.58a127.16,127.16,0,0,0,67-82.63c.66-2.58,1.22-5.19,1.72-7.82a80.32,80.32,0,0,0,30.18,0C271.59,398,272.14,400.61,272.81,403.18ZM256,371.2c-33.5,0-67.95-32.23-94.52-88.44-29.85-63.13-46.28-147.64-46.28-238v-.44A19,19,0,0,1,134.44,25.6H377.56A19,19,0,0,1,396.8,44.34v.46c0,90.32-16.44,174.83-46.28,238C323.95,339,289.5,371.2,256,371.2ZM484.05,111.61c-9.86,72.61-50.22,134.91-107,174.72,23.55-52.8,39.47-121,44-196.73H465a18.91,18.91,0,0,1,14.42,6.56A19.49,19.49,0,0,1,484.05,111.61Z"
                fill="#FFC107"
                mask="url(#shine-mask)"
            />
        </svg>
    );
};

export default TrophyGold;
