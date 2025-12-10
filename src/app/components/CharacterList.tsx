import Link from 'next/link';
import CharacterCard from "../components/CharacterCard";
import { useTranslations } from 'next-intl';
import { styles } from '../utils/styles';


export default function CharacterList () {

    const tCharas = useTranslations('chNames');

    const characters = ['xavier', 'zayne', 'rafayel', 'sylus', 'caleb'];

    return(
        <div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 p-5 font-inknut uppercase text-center mr-5 hover:bo">

          {characters.map((characterId) => (
            <Link
              key={characterId}
              href={`/characters/${characterId}`}
            >
              <CharacterCard 
                titleId={tCharas(characterId as any)}
                imageSize={150}
                imgRoot={`icons/${characterId}.png`}
                className={styles.charaIconStyle}
              />
             </Link>
          ))}
                
        </div>


        </div>
    )
}