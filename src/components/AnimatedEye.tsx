import { useEffect, useState, useRef } from "react";

const AnimatedEye = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const eyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculatePupilPosition = () => {
    if (!eyeRef.current) return { x: 0, y: 0 };

    const eyeRect = eyeRef.current.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const deltaX = mousePosition.x - eyeCenterX;
    const deltaY = mousePosition.y - eyeCenterY;

    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), 45);
    
    const maxDistance = 45;
    const normalizedDistance = Math.min(distance / 3.5, maxDistance);

    return {
      x: Math.cos(angle) * normalizedDistance,
      y: Math.sin(angle) * normalizedDistance,
    };
  };

  const pupilPosition = calculatePupilPosition();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Eye Container */}
      <div 
        ref={eyeRef}
        className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]"
      >
        {/* Eyeball - Sclera (white part) */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-[inset_0_5px_20px_rgba(0,0,0,0.1),0_10px_40px_rgba(0,0,0,0.2)] border border-gray-200/50 overflow-hidden">
          
          {/* Subtle blood vessels texture */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="vessels" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M50,10 Q60,30 50,50 T50,90" stroke="#e74c3c" strokeWidth="0.5" fill="none" opacity="0.3"/>
                  <path d="M20,30 Q30,50 40,70" stroke="#e74c3c" strokeWidth="0.3" fill="none" opacity="0.2"/>
                  <path d="M80,25 Q70,45 75,65" stroke="#e74c3c" strokeWidth="0.3" fill="none" opacity="0.2"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#vessels)" />
            </svg>
          </div>

          {/* Iris and Pupil Container */}
          <div 
            className="absolute top-1/2 left-1/2 w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 transition-transform duration-150 ease-out"
            style={{
              transform: `translate(calc(-50% + ${pupilPosition.x}px), calc(-50% + ${pupilPosition.y}px))`,
            }}
          >
            {/* Iris outer ring */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]">
              
              {/* Iris base gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-300 via-primary to-pink-600">
                
                {/* Iris detailed patterns */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  {/* Radial fibers */}
                  <div className="absolute inset-0" style={{
                    background: `repeating-conic-gradient(
                      from 0deg at 50% 50%,
                      transparent 0deg,
                      rgba(0,0,0,0.1) 2deg,
                      transparent 4deg
                    )`
                  }} />
                  
                  {/* Inner iris ring */}
                  <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-pink-400 to-primary opacity-80" />
                  
                  {/* Iris spots and texture */}
                  <div className="absolute inset-0 opacity-40">
                    <div className="absolute top-[20%] left-[25%] w-4 h-4 rounded-full bg-pink-800/40 blur-sm" />
                    <div className="absolute top-[40%] right-[30%] w-3 h-3 rounded-full bg-pink-900/30 blur-sm" />
                    <div className="absolute bottom-[30%] left-[40%] w-5 h-5 rounded-full bg-pink-700/30 blur-sm" />
                  </div>

                  {/* Crypts (darker spots near pupil) */}
                  <div className="absolute inset-[30%] rounded-full">
                    <div className="absolute top-2 left-3 w-2 h-3 bg-black/20 rounded-full blur-[1px]" />
                    <div className="absolute bottom-3 right-2 w-3 h-2 bg-black/20 rounded-full blur-[1px]" />
                  </div>
                </div>

                {/* Iris limbal ring (dark outer ring) */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_0_3px_rgba(0,0,0,0.4)]" />
              </div>
            </div>
            
            {/* Pupil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-black shadow-[0_0_15px_rgba(0,0,0,0.8),inset_0_0_10px_rgba(0,0,0,1)]">
              
              {/* Main light reflection */}
              <div className="absolute top-[20%] left-[25%] w-5 h-5 rounded-full bg-white opacity-90 blur-[2px]" />
              <div className="absolute top-[22%] left-[27%] w-3 h-3 rounded-full bg-white" />
              
              {/* Secondary reflection */}
              <div className="absolute bottom-[25%] right-[30%] w-3 h-3 rounded-full bg-white/50 blur-[1px]" />
            </div>
          </div>

          {/* Eye highlights and shine */}
          <div className="absolute top-[15%] left-[20%] w-32 h-32 rounded-full bg-gradient-to-br from-white/60 via-white/20 to-transparent blur-xl pointer-events-none" />
          <div className="absolute top-[25%] right-[25%] w-20 h-20 rounded-full bg-white/30 blur-lg pointer-events-none" />
          
          {/* Bottom shadow for depth */}
          <div className="absolute bottom-0 inset-x-0 h-[30%] bg-gradient-to-t from-black/15 via-black/5 to-transparent pointer-events-none" />
          
          {/* Top light reflection */}
          <div className="absolute top-0 inset-x-0 h-[25%] bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
        </div>

        {/* Subtle shadow underneath eye */}
        <div className="absolute inset-0 rounded-full shadow-[0_15px_50px_rgba(0,0,0,0.25)]" style={{ transform: 'translateY(5px)' }} />
      </div>
    </div>
  );
};

export default AnimatedEye;
