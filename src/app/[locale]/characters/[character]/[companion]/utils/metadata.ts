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

  const title = tLayout(`metadata.guidePage.title`, {
    companionName,
    characterName,
  });
  const description = tLayout(`metadata.guidePage.description`, {
    companionName,
    characterName,
  });


  return {
    title,
    description,
  };
}