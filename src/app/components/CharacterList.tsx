import Link from 'next/link';
import CharacterCard from "../components/CharacterCard";
import { useTranslations } from 'next-intl';
import { styles } from '../utils/styles';
import { characters } from '../utils/loaders/character-data-loader';


export default function CharacterList () {

    const tCharas = useTranslations('characters.chNames');

    return(
        <div>
          <div className="flex flex-wrap sm:justify-center justify-evenly items-center
           sm:grid sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-4 p-4 font-accent uppercase text-center">

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