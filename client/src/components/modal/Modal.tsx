import { Dialog, DialogTitle } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

import styles from './styles.module.css';

const Modal = ({
  isVisible,
  closeModalHandler,
  onChangeTaskStatusHandler,
}: {
  isVisible: boolean;
  closeModalHandler: Function;
  onChangeTaskStatusHandler: Function;
}) => {
  return (
    <Dialog
      onClose={() => closeModalHandler()}
      aria-labelledby="simple-dialog-title"
      open={isVisible}
    >
      <div className={styles.row}>
        <DialogTitle id="simple-dialog-title">Change task status?</DialogTitle>
        <IconButton aria-label="close" onClick={() => closeModalHandler()}>
          <CloseIcon />
        </IconButton>
      </div>
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={() => onChangeTaskStatusHandler()}
      >
        Change
      </Button>
    </Dialog>
  );
};

export default Modal;
