import axios from 'axios';
import TimeAgo from 'time-ago';

class ESStore {
  constructor() {
    this.cache = {}
  }

  remove(url) {
    delete this.cache[url];
  }

  get(url) {
    this.cache[url] = this.cache.hasOwnProperty(url) ? this.cache[url] : axios.get(url);
    return this.cache[url];
  }
}

export default ESStore;
