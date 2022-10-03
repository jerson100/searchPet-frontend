import React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../../hooks/useAuthContext";

const settings = [
  { name: "Configuración", nameUrl: "configuration" },
  { name: "Logout", nameUrl: "logout" },
];

const UserLogued = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { logout } = useAuthContext();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (e) => {
    setAnchorElUser(null);
    if (e?.target?.textContent === "Configuración") {
      navigate(`/configuration`);
    } else if (e?.target?.textContent === "Logout") {
      logout();
    }
  };

  return (
    <>
      <IconButton onClick={handleOpenUserMenu} size="medium" sx={{ mr: -1 }}>
        <Avatar
          alt={user.user.name}
          sx={{ width: "32px", height: "32px" }}
          src={user.user.urlImageProfile}
        />
      </IconButton>
      <Menu
        sx={{ mt: { xs: "40px", md: "48px" } }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting.name}
            name={setting.nameUrl}
            onClick={handleCloseUserMenu}
          >
            <Typography textAlign="center">{setting.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default UserLogued;
