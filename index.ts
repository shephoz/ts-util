function maxBy<T>(list: T[], byFunc: (item: T) => number): T {
	return list.reduce((a: T, b: T) => (byFunc(a) > byFunc(b) ? a : b));
}

function minBy<T>(list: T[], byFunc: (item: T) => number): T {
	return list.reduce((a: T, b: T) => (byFunc(a) < byFunc(b) ? a : b));
}

function groupedAndCount<T, K>(
	list: Array<T>,
	keyMapping: (item: T) => K,
): Map<K, number> {
	const grouped = Map.groupBy(list, (item: T) => keyMapping(item));
	return new Map(
		Array.from(grouped).map(([key, value]) => [key, value.length]),
	);
}

function range(size: number): number[] {
	return [...Array(size)].map((_, i) => i);
}

export { maxBy, minBy, groupedAndCount, range };
