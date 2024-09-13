import { action, makeObservable, observable } from 'mobx';
import { getItems } from '../utils/api';
import {Item} from '../utils/types.ts';

class MainStore {
  allUsers: Item[] = [];
  user: Item = {} as Item; // Use the Item type
  loading: boolean = false;
  error: string | null = null;

  constructor() {
    makeObservable(this, {
      allUsers: observable,
      user: observable,
      loading: observable,
      error: observable,
      getAllUsers: action,
      setAllUsers: action,
      setActiveUser: action,
      setLoading: action,
      setError: action,
    });
  }

  setAllUsers = (categories: Item[]) => {
    this.allUsers = categories;
  };

  setActiveUser = (user: Item) => {
    this.user = user;
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };

  setError = (message: string | null) => {
    this.error = message;
  };

  getAllUsers = async () => {
    this.setLoading(true);
    this.setError(null);
    try {
      const users = await getItems();
      this.setAllUsers(users);
    } catch (error) {
      this.setError('Failed to fetch users');
    } finally {
      this.setLoading(false);
    }
  };
}

export default MainStore;
