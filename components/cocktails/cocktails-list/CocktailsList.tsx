import { SearchCocktailsByNameResponseType } from '@/@types/api/TheCocktailsDbResponseTypes';
import { CocktailsListProps } from '@/@types/components/CocktailsList';
import bartenderGif from '@/public/assets/bartender.gif';
import failGif from '@/public/assets/fail-bartending.gif';
import { fetchCocktailsByName } from '@/utils/api';
import { CocktailCard } from '../cocktail-card/CocktailCard';
import { CocktailStatus } from './cocktail-status/CocktailStatus';
import styles from './CocktailsList.module.scss';

export async function CocktailsList({ filter }: CocktailsListProps) {
	let data: SearchCocktailsByNameResponseType | undefined;

	try {
		data = await fetchCocktailsByName(filter);
	} catch (error) {
		console.error('Failed to fetch cocktails:', error);
		return (
			<CocktailStatus
				title="Error! Failed to fetch cocktails."
				src={failGif}
				alt="himym bartender failure glass breaking."
			/>
		);
	}

	if (!data?.drinks || !Array.isArray(data.drinks)) {
		return (
			<CocktailStatus
				title="The searched cocktail was not found."
				src={bartenderGif}
				alt="bartender wiping the glass."
			/>
		);
	}

	return (
		<ul className={styles.cocktails}>
			{data.drinks.slice(0, 12).map((cocktail) => (
				<li key={cocktail.idDrink}>
					<CocktailCard cocktail={cocktail} />
				</li>
			))}
		</ul>
	);
}
