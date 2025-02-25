// Sidebar Component
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box, Container } from "@mui/material";

export default function Sidebar() {
    return (
      <Drawer variant="permanent" anchor="left">
        <List>
          <ListItem button>
            <HomeIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ShoppingCartIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="Cart" />
          </ListItem>
          <ListItem button>
            <PersonIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
      </Drawer>
    );
  }