const fs = require('fs');
const path = require('path');

const envFilePath = path.join(__dirname, '.env');
const correctCocktailDbUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
const envContent = `NEXT_PUBLIC_THE_COCKTAIL_DB_URL=${correctCocktailDbUrl}`;

if (fs.existsSync(envFilePath)) {
	const envFileContent = fs.readFileSync(envFilePath, { encoding: 'utf8' });
	const cocktailDbUrlPattern = /^NEXT_PUBLIC_THE_COCKTAIL_DB_URL=(.*)$/m;
	const match = envFileContent.match(cocktailDbUrlPattern);

	if (match) {
		const currentUrl = match[1].trim();

		if (currentUrl !== correctCocktailDbUrl) {
			const updatedEnvContent = envFileContent.replace(cocktailDbUrlPattern, envContent);
			fs.writeFileSync(envFilePath, updatedEnvContent, { encoding: 'utf8' });
			console.warn('.env file updated with the correct NEXT_PUBLIC_THE_COCKTAIL_DB_URL. ⚛️\n');
		} else {
			console.log('Cocktail DB URL is correct, no changes needed. ✅\n');
		}
	} else {
		const updatedEnvContent = `${!!envFileContent.trim() ? `${envFileContent}\n` : ''}${envContent}\n`;
		fs.writeFileSync(envFilePath, updatedEnvContent, { encoding: 'utf8' });
		console.log('.env file updated with the correct NEXT_PUBLIC_THE_COCKTAIL_DB_URL. ⚛️\n');
	}
} else {
	try {
		fs.writeFileSync(envFilePath, envContent, { encoding: 'utf8' });
		console.log('.env file created with NEXT_PUBLIC_THE_COCKTAIL_DB_URL. ⚛️\n');
	} catch (error) {
		console.error('Error creating .env file:\n', error);
		throw error;
	}
}
