import { Outlet, useLocation, Link } from 'react-router-dom';
import './Root.css';
import { Tooltip, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';

function Root() {

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    return <Outlet />;
  }

  return (
    <div className="root_pane">
      <div className="sidebar">
        <Link to="/">
          <Tooltip title="Home" placement="right" arrow
              slotProps={{
                tooltip: {
                  sx: {
                    maxWidth: 'none',
                    width: 'max-content',
                    fontSize: '0.75rem',
                    padding: '4px 8px',
                  }
                }
              }}>
            <IconButton  size="large">
              <HomeIcon style={{ color: 'white' }} fontSize="inherit"/>
            </IconButton>
          </Tooltip>
        </Link>
        <Link to="/summary">
          <Tooltip title="Project Summary" placement="right" arrow
            slotProps={{
              tooltip: {
                sx: {
                  maxWidth: 'none',
                  width: 'max-content',
                  fontSize: '0.75rem',
                  padding: '4px 8px',
                }
              }
            }}>
            <IconButton  size="large">
              <DescriptionIcon style={{ color: 'white' }} fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </Link>
      </div>
      
      
      <div id="detail">
        <Outlet /> {/* Child routes render here */}
      </div>
    </div>
  );
}

export default Root;