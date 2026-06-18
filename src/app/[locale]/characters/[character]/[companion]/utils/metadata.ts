import { getTranslations } from 'next-intl/server';

export async function generateGuideMetadata({
  character,
  companion,
}: {
  character: string;
  companion: string;
}) {
  const t = await getTranslations();

  const characterName = t(`characters.chNames.${character}`);
  const companionName = t(`characters.companions.${character}.${companion}`);

  const title = t(`layout.metadata.guideTitle`, {
    companionName,
    characterName,
  });
  const description = t(`layout.metadata.guideDescription`, {
    companionName,
    characterName,
  });

  return {
    title,
    description,
  };
}