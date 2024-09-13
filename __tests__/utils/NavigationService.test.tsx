import NavigationService, {navigationRef} from '../../src/navigation/NavigationService.ts';

describe('NavigationService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should call goBack when navigation is ready', () => {
        jest.spyOn(navigationRef, 'isReady').mockReturnValue(true);
        const goBackSpy = jest.spyOn(navigationRef, 'goBack');

        NavigationService.goBack();

        expect(goBackSpy).toHaveBeenCalled();
    });

    it('should not call goBack when navigation is not ready', () => {
        jest.spyOn(navigationRef, 'isReady').mockReturnValue(false);
        const goBackSpy = jest.spyOn(navigationRef, 'goBack');

        NavigationService.goBack();

        expect(goBackSpy).not.toHaveBeenCalled();
    });

    it('should call canGoBack when navigation is ready', () => {
        jest.spyOn(navigationRef, 'isReady').mockReturnValue(true);
        const canGoBackSpy = jest.spyOn(navigationRef, 'canGoBack').mockReturnValue(true);

        const result = NavigationService.canGoBack();

        expect(canGoBackSpy).toHaveBeenCalled();
        expect(result).toBe(true);
    });

    it('should not call canGoBack when navigation is not ready', () => {
        jest.spyOn(navigationRef, 'isReady').mockReturnValue(false);
        const canGoBackSpy = jest.spyOn(navigationRef, 'canGoBack');

        const result = NavigationService.canGoBack();

        expect(canGoBackSpy).not.toHaveBeenCalled();
        expect(result).toBeUndefined();
    });

    it('should not dispatch pop action when navigation is not ready', () => {
        jest.spyOn(navigationRef, 'isReady').mockReturnValue(false);
        const dispatchSpy = jest.spyOn(navigationRef, 'dispatch');

        NavigationService.pop(2);

        expect(dispatchSpy).not.toHaveBeenCalled();
    });
});
