import { getConnectionOptions, createConnection } from 'typeorm';
export const connectDb = async () => {
	const options = await getConnectionOptions(
		process.env.NODE_ENV || 'development'
	);
	await createConnection({
		...options,
		name: 'default'
	});
};
