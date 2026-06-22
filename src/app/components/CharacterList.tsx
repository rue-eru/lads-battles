import Link from 'next/link';
import CharacterCard from "../components/CharacterCard";
import { useTranslations } from 'next-intl';
import { styles } from '../utils/styles';
import { characters } from '../utils/loaders/character-data-loader';
import type { CharacterListProps } from '../utils/interfaces-data';


export default function CharacterList ({ className }: CharacterListProps) {

    const tCharas = useTranslations('characters.chNames');

    return(
        <div>
          <div className={`font-accent uppercase text-center ${className}`}>

          {characters.map((characterId) => (
            <Link
              key={characterId}
              href={`/characters/${characterId}`}
            >
              <CharacterCard 
                titleId={tCharas(characterId as any)}
                imgRoot={`icons/${characterId}.png`}
                className={styles.charaIconStyle}
              />
             </Link>
          ))}
                
        </div>


        </div>
    )
}