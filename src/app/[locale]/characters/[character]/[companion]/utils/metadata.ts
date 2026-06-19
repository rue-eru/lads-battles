import { getTranslations } from 'next-intl/server';

export async function generateGuideMetadata({
  character,
  companion,
}: {
  character: string;
  companion: string;
}) {
  const tCharacters = await getTranslations('characters');
  const tLayout = await getTranslations('layout');

  const characterName = tCharacters(`chNames.${character}`);
  const companionName = tCharacters(`companions.${character}.${companion}`);

  const title = tLayout(`metadata.guideTitle`, {
    companionName,
    characterName,
  });
  const description = tLayout(`metadata.guideDescription`, {
    companionName,
    characterName,
  });

  console.log('characterName:', characterName);
console.log('companionName:', companionName);
  return {
    title,
    description,
  };
}