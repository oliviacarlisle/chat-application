interface EmojiProps {
  type: string;
  char: string;
}

const Emoji: React.FC<EmojiProps> = ({ char, type }) => <span className={type}>{char}</span>;

export default Emoji;
