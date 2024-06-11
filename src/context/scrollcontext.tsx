import React, { createContext, useContext, useRef, ReactNode } from 'react';

// Define a context with empty defaults
const ScrollContext = createContext({
  homesection: { current: null } as React.RefObject<HTMLDivElement>,
  projectsection: { current: null } as React.RefObject<HTMLDivElement>,
  contactsection: { current: null } as React.RefObject<HTMLDivElement>,
});

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const homesection = useRef<HTMLDivElement>(null);
  const projectsection = useRef<HTMLDivElement>(null);
  const contactsection = useRef<HTMLDivElement>(null);

  return (
    <ScrollContext.Provider value={{ homesection, projectsection, contactsection }}>
      {children}
    </ScrollContext.Provider>
  );
};
