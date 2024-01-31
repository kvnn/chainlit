import { Stack, Typography } from '@mui/material';

export default function WaterMark() {
  return (
    <Stack mx="auto" className="watermark oahubot">
      <a
        href="https://oahu.ai"
        target="_blank"
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none'
        }}
      >
        <Typography fontSize="12px" color="text.secondary">
          by Oahu.AI
        </Typography>
      </a>
      <img id="OahuBot-hero" src="/public/img/oahubot-brushbg.png" />
    </Stack>
  );
}
