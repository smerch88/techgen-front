import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  styled,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import { CaretLeft, DotsThreeOutlineVertical, Trash } from 'phosphor-react';
import { Link } from 'react-router-dom';
import React from 'react';

export const PostHeader = ({ children, ...props }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    }}
    {...props}
  >
    <Link
      to={'/blog'}
      style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '30px',
        color: '#fff',
        opacity: '0.5',
        textDecoration: 'none',
      }}
    >
      <CaretLeft weight="bold" /> Back
    </Link>

    {children}
  </Box>
);

export default function ActionsDropdown({ children }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <DotsThreeOutlineVertical size={24} color="#fff" weight="bold" />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 'max-content',
            width: 'max-content',
          },
        }}
      >
        {children}
      </Menu>
    </div>
  );
}

export const Action = styled(MenuItem)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export function DeleteDialog({ onConfirm }) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleConfirm = () => {
    onConfirm && onConfirm();
    handleClose();
  };

  return (
    <div>
      <Action onClick={handleClickOpen}>
        <Trash size={18} weight="bold" /> Delete
      </Action>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: { background: 'rgba(120, 120, 120, 0.6)', padding: '24px' },
        }}
      >
        <DialogTitle id="alert-dialog-title">Confirm the deletion</DialogTitle>
        <DialogContent>
          <Typography id="alert-dialog-description">
            The post will be deleted
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button color="transparent" onClick={handleClose}>
            Cansle
          </Button>
          <Button color="gradient" onClick={handleConfirm} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export const PostTitle = styled(TextareaAutosize)(({ theme }) => ({
  ...theme.typography.h1,
  color: theme.palette.text.primary,
  width: '100%',
  background: 'transparent',
  outline: 'none',
  resize: 'none',
  padding: '12px 15px',
}));

export const EditorContainerDiv = styled(Box)(({ theme }) => ({
  '& .ql-editor': theme.typography.body1,
  '& .ql-editor h1': theme.typography.h1,
  '& .ql-editor h2': theme.typography.h2,
  '& .ql-editor h3': theme.typography.h3,
  '& .ql-editor::before': {
    color: 'rgb(117, 117, 117)',
  },
}));
