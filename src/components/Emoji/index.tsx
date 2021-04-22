type EmojiProps = {
  symbol: string;
  label: string;
};

/**
 *
 * @param symbol emoji string such for example 😔
 * @param label label for the emoji for example "Pensive Face"
 * @returns span with aria-label and role img
 * @example
 *   <Emoji symbol="😔" label="Pensive Face" />
 */

const Emoji: React.FunctionComponent<EmojiProps> = ({ symbol, label }) => {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={label || ''}
      aria-hidden={label ? 'false' : 'true'}>
      {symbol}
    </span>
  );
};

export default Emoji;
