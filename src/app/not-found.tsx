import { getTranslations } from 'next-intl/server';
import ErrorPage from './components/ErrorPage';

export default async function NotFound() {


    const tError = await getTranslations('errors');
    const tNames = await getTranslations('characters.chNames');

    return (
        <ErrorPage 
            code={404} 
            title={tError("404.title")} 
            name={tNames("rafayel")} 
            description={tError("404.description")}
        />
    )
}