import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";
import { toast } from "react-toastify";

export const ShareModal = ({ open, onClose, shareUrl, title }) => {
  const iconSize = 48;
  const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };

  return (
    <Modal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={open}
      onClose={onClose}
    >
      <Box sx={style}>
        <Typography textAlign="left" marginBottom={"10px"}>
          あなたの欲しいものを友達に知らせよう
        </Typography>
        <Box display="flex" justifyContent="space-around">
          <TwitterShareButton url={shareUrl} title={title}>
            <XIcon size={iconSize} round={true} />
          </TwitterShareButton>
          <LineShareButton url={shareUrl} title={title}>
            <LineIcon size={iconSize} round={true} />
          </LineShareButton>
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={iconSize} round={true} />
          </FacebookShareButton>
          <CopyToClipboard
            text={shareUrl}
            onCopy={() => {
              toast.success("URLをコピーしました");
            }}
          >
            <Button
              data-testid={"copyLink"}
              className={"react-share__ShareButton"}
              variant="contained"
              color="inherit"
              style={{
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                minWidth: "48px",
                verticalAlign: "text-bottom",
              }}
            >
              <ContentCopyIcon />
            </Button>
          </CopyToClipboard>
        </Box>
      </Box>
    </Modal>
  );
};
