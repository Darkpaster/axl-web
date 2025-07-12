export const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    largeDesktop: '1200px'
} as const;

export const mediaQueries = {
    mobile: `@media (max-width: ${breakpoints.mobile})`,
    tablet: `@media (max-width: ${breakpoints.tablet})`,
    desktop: `@media (max-width: ${breakpoints.desktop})`,
    largeDesktop: `@media (max-width: ${breakpoints.largeDesktop})`
} as const;


const GlobalMobileStyles = `
  ${mediaQueries.mobile} {
    * {
      box-sizing: border-box;
    }
    
    body {
      overflow-x: hidden;
    }
    
    pre {
      white-space: pre-wrap;
      word-wrap: break-word;
      overflow-x: auto;
    }
    
    code {
      font-size: 0.8rem;
      word-wrap: break-word;
    }
    
    input, textarea {
      font-size: 16px; /* Предотвращает зум на iOS */
    }
    
    table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }
  }
  
  ${mediaQueries.tablet} {
    .desktop-only {
      display: none;
    }
  }
  
  ${mediaQueries.mobile} {
    .tablet-only {
      display: none;
    }
  }
`;

export { GlobalMobileStyles };