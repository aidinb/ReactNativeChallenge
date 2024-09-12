import {action, makeObservable, observable} from 'mobx';
import {getItems} from '../utils/api';

interface Item {
  id: number;
  name: string;
  level: number;
  parentId: number | null;
  position: number;
  imagePath: string | null;
}

class MainStore {
  allUsers: Item[] = [];
  user: Item = {};

  constructor() {
    makeObservable(this, {
      allUsers: observable,
      user: observable,
      getAllUsers: action,
      setAllUsers: action,
      setActiveUser: action,
    });
  }

  setAllUsers = (categories: Item[]) => {
    this.allUsers = categories;
  };
  setActiveUser = (user: Item) => {
    this.user = user;
  };


  getAllUsers = async () => {
    try {
      const users = await getItems();
      console.log("getAllUsers", users)
      this.setAllUsers(users);
    } catch (error) {
      console.error('Failed to fetch users', error);
    }
  };






}

export default MainStore;
