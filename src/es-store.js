import axios from 'axios';
import inflight from 'inflight';
import TimeAgo from './timeAgo';

class ESStore {
  constructor() {
    this.cache = {};
  }

  remove(url) {
    delete this.cache[url];
  }

  get(url, callback) {
    if (this.cache.hasOwnProperty(url)) {
      callback.call(null, this.cache[url]);
    }

    callback = inflight(url, callback);
    if (!callback) {
      return;
    }

    axios.get(url).then(function(response) {
      this.cache[url] = response;
      callback.call(null, this.cache[url]);
    }.bind(this));
  }
}

export default ESStore;
