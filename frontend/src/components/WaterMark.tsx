import { Translator } from 'components/i18n';

export default function WaterMark() {
  return (
    <div
      className="watermark"
      style={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none'
      }}
    >
      <a
        href="https://tsel.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-muted-foreground"
      >
        <Translator path="chat.watermark" />
      </a>
      <a
        href="https://tsel.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 text-xs text-muted-foreground"
      >
        tsel.ai
      </a>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSecAKRmFp20oj15z7iD_eLMYePi4s_bNbnWlVUeZw83x59o1Q/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-3 text-xs text-muted-foreground"
      >
        Επικοινωνία
      </a>
    </div>
  );
}
