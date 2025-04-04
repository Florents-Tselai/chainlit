import { Translator } from 'components/i18n';

export default function WaterMark() {
  return (
    <a
      href="https://tsel.ai"
      target="_blank"
      rel="noopener noreferrer"
      className="watermark"
      style={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none'
      }}
    >
      <div className="text-xs text-muted-foreground">
        <Translator path="chat.watermark" />
      </div>
      <a
        href="https://tsel.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 text-xs text-muted-foreground"
      >
        tsel.ai
      </a>
    </a>
  );
}
