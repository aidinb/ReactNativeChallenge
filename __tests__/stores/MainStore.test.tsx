import MainStore from '../../src/stores/mainStore';
import { Item } from '../../src/utils/types';
import { getItems } from '../../src/utils/api';

jest.mock('../../src/utils/api', () => ({
    getItems: jest.fn(),
}));

describe('MainStore', () => {
    let store: MainStore;

    beforeEach(() => {
        store = new MainStore();
        jest.clearAllMocks();
    });

    describe('setAllUsers', () => {
        it('should set allUsers correctly', () => {
            // Arrange
            const users: Partial<Item>[] = [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }];

            // Act
            store.setAllUsers(users as Item[]);

            // Assert
            expect(store.allUsers).toEqual(users);
        });
    });

    describe('setActiveUser', () => {
        it('should set the active user correctly', () => {
            // Arrange
            const user: Partial<Item> = { id: 1, name: 'User 1' };

            // Act
            store.setActiveUser(user as Item);

            // Assert
            expect(store.user).toEqual(user);
        });
    });

    describe('setLoading', () => {
        it('should set loading state correctly', () => {
            // Act
            store.setLoading(true);
            expect(store.loading).toBe(true);

            store.setLoading(false);
            expect(store.loading).toBe(false);
        });
    });

    describe('setError', () => {
        it('should set error state correctly', () => {
            store.setError('An error occurred');
            expect(store.error).toBe('An error occurred');

            store.setError(null);
            expect(store.error).toBeNull();
        });
    });

    describe('getAllUsers', () => {
        it('should handle fetch errors and update the store', async () => {
            (getItems as jest.Mock).mockRejectedValue(new Error('Network error'));

            await store.getAllUsers();

            expect(store.allUsers).toEqual([]);
            expect(store.loading).toBe(false);
            expect(store.error).toBe('Failed to fetch users');
        });
    });
});
