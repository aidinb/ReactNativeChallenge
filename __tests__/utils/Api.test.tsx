import { baseAPI } from '../../src/utils/baseUrl';
import {getItems} from '../../src/utils/api.ts';

// Mock the baseAPI.get method
jest.mock('../../src/utils/baseUrl', () => ({
    baseAPI: {
        get: jest.fn(),
    },
}));

describe('getItems', () => {
    it('fetches items successfully', async () => {
        // Arrange: Define the mock response
        const mockData = { data: [{ id: '1', name: 'Item 1' }, { id: '2', name: 'Item 2' }] };
        (baseAPI.get as jest.Mock).mockResolvedValue(mockData);

        // Act: Call the function
        const result = await getItems();

        // Assert: Verify the function behaves as expected
        expect(result).toEqual(mockData.data);
        expect(baseAPI.get).toHaveBeenCalledWith('/users');
    });

    it('handles errors correctly', async () => {
        // Arrange: Define the mock error
        const mockError = new Error('Network Error');
        (baseAPI.get as jest.Mock).mockRejectedValue(mockError);

        // Act & Assert: Verify that the function throws the error
        await expect(getItems()).rejects.toThrow('Network Error');
    });
});
