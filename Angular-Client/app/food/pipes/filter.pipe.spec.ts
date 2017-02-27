import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {

    let filterPipe: FilterPipe;

    // synchronous beforeEach
    beforeEach(() => {
        filterPipe = new FilterPipe();
    });

    it('filterPipe should be instanciated', () => {
        expect(filterPipe).toBeDefined();
    });

    it('filterPipe should filter', () => {

        let items: any[] = [];

        items.push({ id: 1, name: 'Hans' });
        items.push({ id: 2, name: 'Franz' });
        items.push({ id: 3, name: 'Kurt' });
        items.push({ id: 4, name: 'Gustav' });

        let filtered = filterPipe.transform(items, 'name', 'Hans');

        expect(filtered).Any;
        expect(filtered.length).toBe(1);
    });

    it('filterPipe should filter two items', () => {

        let items: any[] = [];

        items.push({ id: 1, name: 'Hans' });
        items.push({ id: 2, name: 'Hans' });
        items.push({ id: 3, name: 'Kurt' });
        items.push({ id: 4, name: 'Gustav' });

        let filtered = filterPipe.transform(items, 'name', 'Hans');

        expect(filtered).Any;
        expect(filtered.length).toBe(2);
    });
});
