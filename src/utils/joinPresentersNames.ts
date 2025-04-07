export function joinPresentersNames(
  presenters: Array<{ attributes: { name: string } }>,
) {
  if (presenters.length === 0) {
    return '';
  }

  const names = presenters.map((speaker) => speaker.attributes.name);

  if (names.length === 1) {
    return names[0];
  }

  if (names.length === 2) {
    return `${names[0]} & ${names[1]}`;
  }

  const lastSpeaker = names.pop();
  return `${names.join(', ')} & ${lastSpeaker}`;
}
