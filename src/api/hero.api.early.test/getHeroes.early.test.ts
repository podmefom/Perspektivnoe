
// Unit tests for: getHeroes


import { instance } from "../api";
import { getHeroes } from '../hero.api';


jest.mock("../api", () => ({
  instance: jest.fn(),
}));

describe('getHeroes() getHeroes method', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Happy Paths', () => {
    it('should return a list of heroes when the API call is successful', async () => {
      // Arrange: Mock the API response
      const mockHeroes = [{ id: 1, name: 'Hero One' }, { id: 2, name: 'Hero Two' }];
      (instance as jest.Mock).mockResolvedValue({ data: mockHeroes });

      // Act: Call the getHeroes function
      const result = await getHeroes();

      // Assert: Verify the result matches the mock data
      expect(result).toEqual(mockHeroes);
      expect(instance).toHaveBeenCalledWith({
        method: 'GET',
        url: '/heroes/',
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle an empty list of heroes', async () => {
      // Arrange: Mock the API response with an empty array
      (instance as jest.Mock).mockResolvedValue({ data: [] });

      // Act: Call the getHeroes function
      const result = await getHeroes();

      // Assert: Verify the result is an empty array
      expect(result).toEqual([]);
    });

    it('should throw an error when the API call fails', async () => {
      // Arrange: Mock the API to reject with an error
      const mockError = new Error('Network Error');
      (instance as jest.Mock).mockRejectedValue(mockError);

      // Act & Assert: Call the getHeroes function and expect it to throw
      await expect(getHeroes()).rejects.toThrow('Network Error');
    });
  });
});

// End of unit tests for: getHeroes
