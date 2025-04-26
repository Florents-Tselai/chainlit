// import { Translator } from 'components/i18n';

export default function WaterMark() {
  return (
    <div className="watermark flex items-center text-xs text-muted-foreground">
      <a>🛠️ με ❤️ απο</a>
      <a
        href="https://tselai.com/about?utm_source=chat_footer"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1"
      >
        TselAI
      </a>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSecAKRmFp20oj15z7iD_eLMYePi4s_bNbnWlVUeZw83x59o1Q/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-3"
      >
        Επικοινωνία
      </a>
    </div>
  );
}
