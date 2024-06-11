import React, { createContext, useContext, useRef, ReactNode } from 'react';

// Define a context with empty defaults
const ScrollContext = createContext({
  homesectionMob: { current: null } as React.RefObject<HTMLDivElement>,
  projectsectionMob: { current: null } as React.RefObject<HTMLDivElement>,
  contactsectionMob: { current: null } as React.RefObject<HTMLDivElement>,
  techSkills: { current: null } as React.RefObject<HTMLDivElement>,
  aboutMob: { current: null } as React.RefObject<HTMLDivElement>,


});

export const useScrollMob = () => useContext(ScrollContext);

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const homesectionMob = useRef<HTMLDivElement>(null);
  const projectsectionMob = useRef<HTMLDivElement>(null);
  const contactsectionMob = useRef<HTMLDivElement>(null);
  const techSkills = useRef<HTMLDivElement>(null);
  const aboutMob = useRef<HTMLDivElement>(null);



  return (
    <ScrollContext.Provider value={{ homesectionMob, projectsectionMob, contactsectionMob,techSkills,aboutMob}}>
      {children}
    </ScrollContext.Provider>
  );
};
