import {
    Link,
    useMatch,
    useResolvedPath
  } from "react-router-dom";
export default function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
        <Link
          style={{ 
            background: match ? "rgb(200,206,208,0.12)" : "#fff", 
            display:'flex',
            textDecoration:'none',
            color: match ? 'gray' : 'inherit',
        }}
          to={to}
          {...props}
        >
          {children}
        </Link>        
    );
  }
 
  