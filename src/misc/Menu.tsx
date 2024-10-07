import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button, Modal } from "@mui/material";
import { useState } from "react";
import { useAppSelector } from "../store/hooks";
import { TeamChoice } from "./SharedComponents";
import { useIncPoints } from "../hooks/pointsHooks";
import ChatMenu from "./ChatMenu";

export default function MenuDropDown() {
  const teams = useAppSelector((state) => state.teams.value);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [team, setTeam] = useState(localStorage.getItem("team"));
  const open = Boolean(anchorEl);
  const [modalRender, setModalRender] = useState("teams");
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const incPoints = useIncPoints();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (mr: string) => () => {
    setAnchorEl(null);
    setModalRender(mr);
    setModalOpen(true);
  };
  const [teamErr, setTeamErr] = useState("");

  const chooseTeam = (team: string) => {
    if (teams.includes(team)) {
      localStorage.setItem("team", team);
      setTeam(team);
      setModalOpen(false);
      window.location.reload();
    } else {
      setTeamErr("This is not a real team");
    }
  };

  const clearCode = () => {
    localStorage.setItem("code", "");
    setModalOpen(false);
    window.location.reload();
  };

  const [modalOpen, setModalOpen] = React.useState(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #000",
    backgroundColor: "black",
    color: "lime",
    padding: "10px",
    borderRadius: "10px",
  };

  const AddPointsForm = ({
    teamErr,
    chooseTeam,
  }: {
    teamErr: string;
    chooseTeam: (team: string) => void;
  }) => {
    const [points, setPoints] = useState(0);
    const [name, setName] = useState("");
    const [reason, setReason] = useState("");

    const handleUpdatePoints = (pts: string) => {
      if (!isNaN(parseInt(pts))) {
        setPoints(parseInt(pts));
      }
    };

    // TODO - only allow update points for the game codes and overwrite old ones I guess... still need history ough
    return (
      <div>
        <div className="title">Add game points</div>
        <input
          value={points}
          onChange={(e) => handleUpdatePoints(e.target.value)}
        />
        <Button
          className="button"
          color="primary"
          variant="contained"
          onClick={() => {
            incPoints(points);
          }}
        >
          <b>Update Points</b>
        </Button>
        <div className="error">{teamErr}</div>
      </div>
    );
  };

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {modalRender === "teams" ? (
          <div style={style} className="modal-content">
            <div className="modal-title">Switch Teams</div>
            <div>You are currently on the {team} team</div>
            <TeamChoice teamErr={teamErr} chooseTeam={chooseTeam} />
          </div>
        ) : modalRender === "points" ? (
          <div style={style} className="modal-content">
            <AddPointsForm teamErr={teamErr} chooseTeam={chooseTeam} />
          </div>
        ) : (
          <div style={style} className="modal-content">
            <div className="modal-title">Reset Code</div>
            <div>Click here to reset the game code</div>
            <Button
              color="primary"
              style={{ marginTop: "10px" }}
              variant="contained"
              onClick={clearCode}
            >
              Reset Code
            </Button>
          </div>
        )}
      </Modal>
      <div
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </div>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleMenuClick("points")}>
          <div className="menu-dropdown">Add Points</div>
        </MenuItem>
        <MenuItem onClick={handleMenuClick("teams")}>
          <div className="menu-dropdown">Teams</div>
        </MenuItem>
        <MenuItem onClick={handleMenuClick("code")}>
          <div className="menu-dropdown">Reset Code</div>
        </MenuItem>
        <MenuItem onClick={handleMenuClick("chat")}>
          <div className="menu-dropdown">Talk to Mort</div>
        </MenuItem>
      </Menu>
    </div>
  );
}
