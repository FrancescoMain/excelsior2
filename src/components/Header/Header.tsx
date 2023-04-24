import React from "react";
import { useNavigate } from "react-router-dom";

//<----STYLED COMPONENT
import {
  A,
  Container,
  HeaderCont,
  Home,
  List,
  MobileMenu,
  MyButton,
  MyMenu,
  MyMenuIcon,
  Nav,
  Red,
} from "./style";

//<----MATERIAL UI
import MenuItem from "@mui/material/MenuItem";

export const Header = () => {
  //<----DATA
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  //<----BUSINESS LOGIC
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderCont>
      <Nav>
        <List>
          <div>
            <li>
              <Home
                onClick={() => {
                  navigate("/excelsior2");
                }}
              >
                <Red>EX</Red>CELSIOR
              </Home>
            </li>
          </div>

          {/* //<----DESKTOP MENU */}
          <Container>
            <li>
              <A
                onClick={() => {
                  navigate("/contatti");
                }}
              >
                Contattaci
              </A>
            </li>
            <li>
              <A
                onClick={() => {
                  navigate("/prodotto");
                }}
              >
                Il nostro metodo
              </A>
            </li>
          </Container>
          {/* //<----MOBILE MENU -----> MUI COMPONENT*/}
          <MobileMenu>
            <MyButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MyMenuIcon />
            </MyButton>
            <MyMenu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <A
                  onClick={() => {
                    navigate("/contatti");
                  }}
                >
                  Contattaci
                </A>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                {" "}
                <A
                  onClick={() => {
                    navigate("/prodotto");
                  }}
                >
                  Il nostro metodo
                </A>
              </MenuItem>
            </MyMenu>
          </MobileMenu>
        </List>
      </Nav>
    </HeaderCont>
  );
};
